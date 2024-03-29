import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CardMyresto from "../components/CardMyresto";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Loading } from "../components/Loading";

const MyResto = () => {
  const [resto, setResto] = useState({});
  const [remove, setRemove] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verifikasi, setVerifikasi] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getmyResto();
  }, []);

  const getmyResto = () => {
    axios
      .get(`https://group3.altaproject.online/myresto`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const results = response.data.data;
        setResto(results);
        setVerifikasi(results.status);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRemove = (id) => {
    axios
      .delete(`https://group3.altaproject.online/restaurants`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const results = response.data;
        setRemove(results);
        swal({
          title: "Good job!",
          text: "SUKSES DELETE DATA",
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
        getmyResto();
        navigate("/", { replace: true });
      });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <div className="h-full dark:text-white">
          <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Resto</h1>
          <div className="flex flex-col items-center py-48">
            {["unverification", "verified"].includes(verifikasi) ? (
              <div className="flex flex-col justify-center">
                <CardMyresto
                  key={resto.id}
                  restoname={resto.resto_name}
                  rating={resto.rating}
                  image={resto.resto_image_url}
                  status={resto.status}
                  location={resto.location}
                  category={resto.category}
                  onClick={() => handleRemove(resto.id)}
                  onClickEdit={() => navigate(`/editresto/${resto.id}`)}
                />
              </div>
            ) : (
              <div className="dark:text-white">
                <p className="text-2xl">Kamu tidak memiliki resto</p>
                <div className="text-center">
                  <button
                    type="submit"
                    className="py-2 px-4 mr-3 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
                  >
                    <Link to="/addresto">Buat Resto</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};

export default MyResto;
