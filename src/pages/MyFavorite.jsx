import React from 'react';
import Layout from '../components/Layout';
import CardMyfavorite from '../components/CardMyfavorite';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MyFavorite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = () => {
    axios({
      method: 'get',
      url: 'https://group3.altaproject.online/favourites',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setFavourites(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Favorite</h1>
        <div className="flex flex-col justify-center">
          {favourites.map((item, index) => (
            <CardMyfavorite key={index} title={item.resto_name} location={item.location} rating={item.rating} category={item.category} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyFavorite;
