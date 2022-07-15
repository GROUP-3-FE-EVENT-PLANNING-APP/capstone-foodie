import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState, useRef, useMemo, useCallback } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function AddMap() {
  const center = {
    lat: -6.169,
    lng: 106.8209,
  };
  const [latitude, setLatitude] = useState(center.lat);
  const [longitude, setLongitude] = useState(center.lng);

  //const position = [-6.597629, 106.799568];
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    console.log(position),
    (
      <div className="App">
        <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
          >
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? "Marker is draggable"
                  : "Click here to make marker draggable"}
              </span>
            </Popup>
          </Marker>
        </MapContainer>

        <div className="text-left mt-3">
          {" "}
          <input
            className="border-solid border-2 border-gray-400"
            placeholder={position.lat}
          ></input>{" "}
          <input
            className="border-solid border-2 border-gray-400"
            placeholder={position.lng}
          ></input>{" "}
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
            onClick={() => {
              setPosition(position);
              console.log(position);
              setLatitude(position.lat);
              setLongitude(position.lng);
            }}
          >
            Set
          </button>
        </div>
      </div>
    )
  );
}

export default AddMap;
