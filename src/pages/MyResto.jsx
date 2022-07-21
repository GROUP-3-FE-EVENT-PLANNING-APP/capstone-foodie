import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CardMyresto from '../components/CardMyresto';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const MyResto = () => {
  const [resto, setResto] = useState([]);
  const [remove, setRemove] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getmyResto();
  }, []);

  const getmyResto = () => {
    axios
      .get(`https://group3.altaproject.online/myresto`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        const results = response.data.data;
        setResto(results);
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
      .delete(`https://group3.altaproject.online/myresto/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        const results = response.data;
        setRemove(results);
        swal({
          title: 'Good job!',
          text: 'SUKSES DELETE DATA',
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
        getmyResto();
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
        <div className="h-screen">
          <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Resto</h1>
          <div className="flex flex-col justify-center">
            {resto.map((item) => (
              <CardMyresto
                key={item.id}
                restoname={item.resto_name}
                rating={item.rating}
                image={item.resto_image_url}
                status={item.status}
                location={item.location}
                category={item.category}
                onClick={() => handleRemove(item.id)}
                onClickEdit={() => navigate.push(`edit/${item.id}`)}
              />
            ))}
          </div>
          <div className="flex flex-col items-center my-48">
            <p className="text-2xl">Kamu tidak memiliki resto</p>
            <button
              type="submit"
              className="py-2 px-4 mr-3 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
            >
              <Link to="/addresto">Buat Resto</Link>
            </button>
          </div>
        </div>
      </Layout>
    );
  }
};

export default MyResto;
