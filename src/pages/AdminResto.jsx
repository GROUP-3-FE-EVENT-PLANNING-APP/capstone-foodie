import React from "react";
import Layout from "../components/Layout";
import CardRestoadmin from "../components/CardRestoadmin";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminResto = () => {
  const [daftarresto, setDaftarResto] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAdminRestaurant();
  }, []);

  const getAdminRestaurant = (e) => {
    axios({
      method: "get",
      url: `https://group3.altaproject.online/admins/restaurants
      `,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setDaftarResto(results);
      })
      .catch(function (error) {
        // handle error
        swal({
          title: "Good job!",
          text: "EROOR",
        });
      })
      .finally(() => {
        setLoading(false);
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
        <div className="h-full">
          <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">List Resto</h1>
          <div className="grid grid-cols-3 mr-8 gap-4">
            {daftarresto.map((item, index) => (
              <CardRestoadmin
                key={index}
                image={item.resto_image_url}
                title={item.resto_name}
                location={item.location}
                rating={item.rating}
                status={item.status}
                category={item.category}
                onClickItem={() => navigate(`/admindetail/${item.id}`)}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
};

export default AdminResto;
