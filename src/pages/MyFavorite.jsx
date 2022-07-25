import React from "react";
import Layout from "../components/Layout";
import CardMyfavorite from "../components/CardMyfavorite";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const MyFavorite = () => {
  const [favourites, setFavourites] = useState([]);
  const [remove, setRemove] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = () => {
    axios({
      method: "get",
      url: "https://group3.altaproject.online/favourites",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setFavourites(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRemove = (resto_id) => {
    axios
      .delete(`https://group3.altaproject.online/favourites/${resto_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setRemove(results);
        swal({
          title: "Good job!",
          text: "SUCCESS DELETE RESTO FAVORITE",
        });
        getFavorite();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="h-screen dark:text-white">
          <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Favorite</h1>
          <div className="grid grid-cols-2 mx-6 gap-6">
            {favourites.map((item, index) => (
              <CardMyfavorite
                key={index}
                image={item.resto_image_url}
                title={item.resto_name}
                location={item.location}
                rating={item.rating}
                category={item.category}
                onClick={() => handleRemove(item.resto_id)}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
};

export default MyFavorite;
