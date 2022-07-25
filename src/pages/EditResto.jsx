import React from "react";
import Layout from "../components/Layout";
import AddMap from "../components/AddMap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

const EditResto = () => {
  const [objSubmit, setObjSubmit] = useState("");
  const [menu, setMenu] = useState("");
  const [berkas, setBerkas] = useState("");
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);

  const editsResto = () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    // e.preventDefault();
    axios({
      method: "put",
      url: `https://group3.altaproject.online/restaurants`,
      data: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        console.log(response);
        swal("Good job!", "Sukses Edit Resto ", "success");
        navigate("/");
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const setLocation = async (lat, lng) => {
    let temp = { ...objSubmit, latitude: lat, longitude: lng };
    setObjSubmit(temp);

    setLatitude(lat);
    setLongitude(lng);
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
    console.log(temp);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <div className="justify-center p-10">
          <div className="text-2xl font-bold md:ml-12 pt-5">Edit Resto</div>
          <form
            className="p-10 w-full bg-white "
            onSubmit={(e) => editsResto(e)}
          >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white">
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Name Resto
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        id="input-resto"
                        type="text"
                        name="resto_name"
                        className="py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                        placeholder=" Name"
                        onChange={(e) =>
                          handleChange(e.target.value, "resto_name")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Booking
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="text"
                        name="booking_fee"
                        id="booking_fee"
                        className="py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                        placeholder=" Harga Booking"
                        onChange={(e) =>
                          handleChange(e.target.value, "booking_fee")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Fasilitas
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="text"
                        name="fasilitas"
                        id="input-fasilitas"
                        className="py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                        placeholder=" Fasilitas"
                        onChange={(e) =>
                          handleChange(e.target.value, "facility")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <select
                        type="text"
                        name="category"
                        id="category"
                        className="py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                        placeholder=" Category"
                        onChange={(e) =>
                          handleChange(e.target.value, "category")
                        }
                      >
                        <option value="halal">Halal</option>
                        <option value="non halal">Non Halal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Kapasitas Meja
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="number"
                        name="table_quota"
                        id="input-kapasitas"
                        className="py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                        placeholder=" Kapasitas meja"
                        onChange={(e) =>
                          handleChange(e.target.value, "table_quota")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2 mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="text"
                        name="location"
                        id="input-kapasitas"
                        className="py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                        placeholder=" Location"
                        onChange={(e) =>
                          handleChange(e.target.value, "location")
                        }
                      />
                    </div>
                  </div>
                  <AddMap onChangeLocation={setLocation} />
                  <div className="text-sm">
                    {"Lattitude : "}
                    <input
                      disabled
                      type="text"
                      value={latitude}
                      onChange={(e) => handleChange(e.target.value, "latitude")}
                    />
                    <br />
                    {"Longitude : "}
                    <input
                      disabled
                      type="text"
                      value={longitude}
                      onChange={(e) =>
                        handleChange(e.target.value, "longitude")
                      }
                    />
                  </div>
                </div>

                <div className="mb-5 mt-5">
                  <div>
                    <p>Upload Berkas</p>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block max-h-80 max-w-7xl overflow-hidden bg-gray-100">
                      <img src={menu} alt="" width="210" height="210" />
                    </span>
                    <input
                      type="file"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onChange={(e) => {
                        setMenu(URL.createObjectURL(e.target.files[0]));
                        handleChange(e.target.files[0], "menu_image_url");
                      }}
                    />
                  </div>
                </div>

                <div className="mb-5 mt-5">
                  <div>
                    <p>Upload Menu</p>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block max-h-80 max-w-7xl overflow-hidden bg-gray-100">
                      <img src={berkas} alt="" width="210" height="210" />
                    </span>
                    <input
                      type="file"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onChange={(e) => {
                        setBerkas(URL.createObjectURL(e.target.files[0]));
                        handleChange(e.target.files[0], "file_image_url");
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
                >
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
};

export default EditResto;
