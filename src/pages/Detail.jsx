import React from "react";
import Layout from "../components/Layout";
import Map from "../components/Map";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import CommentList from "../components/CommentList";
import CommentForms from "../components/CommentForms";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    console.log(params);
    const { detail_id } = params;
    axios
      .get(
        `https://my-json-server.typicode.com/Maruta45/mockjson/events/${detail_id}`
      )
      .then((response) => {
        // handle success
        console.log(response.data);
        const { data } = response;
        setData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        {/* detail image */}
        <div className="container px-5 mx-auto lg:px-20">
          <div className="grid-cols-3 px-5 py-5 space-y-2 bg-gray-50 lg:space-y-0 lg:grid lg:gap-3">
            <div className="w-full col-span-2 row-span-2 rounded">
              <img
                className="w-full h-full"
                src="http://1.bp.blogspot.com/-5LszCXemuic/U5CwVQcaYcI/AAAAAAAAGEg/kfhTlsPjMhM/s1600/btscitos5.jpg"
                //src="https://images.unsplash.com/photo-1532619031801-97b02fb2de1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full"
                //src="http://1.bp.blogspot.com/-5LszCXemuic/U5CwVQcaYcI/AAAAAAAAGEg/kfhTlsPjMhM/s1600/btscitos5.jpg"
                src="https://media.istockphoto.com/photos/cute-girl-is-reading-book-sitting-in-nursery-library-picture-id1168630189?k=20&m=1168630189&s=612x612&w=0&h=oSnxfJvOe4aAvwSyOpPKFTa1u2qDpfOnKNYJdWFJ1_M="
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full"
                //src="https://media.istockphoto.com/photos/cute-girl-is-reading-book-sitting-in-nursery-library-picture-id1168630189?k=20&m=1168630189&s=612x612&w=0&h=oSnxfJvOe4aAvwSyOpPKFTa1u2qDpfOnKNYJdWFJ1_M="
                src="https://images.unsplash.com/photo-1532619031801-97b02fb2de1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center box-border h-8 w-1/4 border-2 border-green-400">
            <span className="text-sm font-medium py-1 px-2 text-green-500 align-middle">
              Halal
            </span>
          </div>
          <div className="flex justify-end">
            <Button className="mx-5" variant="contained" color="success">
              Favorite
            </Button>
            <Button variant="contained">Book now</Button>
          </div>
          <div className="px-10">
            <div className="pt-5 text-2xl font-medium">Bebek Tepi Sawah</div>
            <div className="text-sm font-light">Ubud - Bali</div>
            <p class="mb-5  bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-gray-800 my-2">
              4.0 <AiFillStar />
            </p>
          </div>
          <div className="mb-5 lg:flex flex-row justify-center">
            {/* left side */}
            <div className="text-xl px-5 lg:pr-24 lg:pl-10 py-8 shadow-xl bg-yellow-50">
              Menu
              <img
                className="w-96 mb-5"
                src="https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/cul-assets-252301483284-b172d73b6c43cddb/culinary/asset/REST_201-720x995-FIT_AND_TRIM-2898ffc03f8ac72f6e72f108f015ea1a.jpeg?tr=q-40,c-at_max,w-720,h-1280&amp;_src=imagekit"
                //src="https://b.zmtcdn.com/data/menus/805/7412805/ad0cc3792bdebc4ef970f38193ed5ede.jpg"
                alt=""
              />
            </div>
            {/* right side */}
            <div className="shadow-xl px-5 lg:pl-24 lg:pr-10 py-8 bg-yellow-50">
              <div className="mb-5">
                <div className="text-xl">Fasilitas</div>
                <ul className="text-sm pl-10">
                  <li type="circle">Taman Bermain</li>
                  <li type="circle">Kamar Mandi</li>
                  <li type="circle">Musholla</li>
                </ul>
              </div>
              <div>Kapasitas Meja : 20</div>
              <div className="mb-5">Harga Booking : Rp. 50.000</div>
              <div>
                <PlaceIcon />
                Location
                <div className="text-sm">Ubud - Bali</div>
                <Map></Map>
              </div>
            </div>
          </div>{" "}
          {/* comment */}
          <div>
            <CommentForms></CommentForms>
            <CommentList></CommentList>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Detail;
