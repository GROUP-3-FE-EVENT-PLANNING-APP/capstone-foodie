import React from 'react';
import { CardHomePage } from '../components/CardHomePage';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get(
        `https://my-json-server.typicode.com/Maruta45/mockjson/events
      `
      )
      .then((response) => {
        // handle success
        console.log(response);

        const results = response.data;
        setProduct(results);
        console.log(results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  }
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
        {product.map((item) => (
          <CardHomePage key={item.event.id} title={item.event.name} quantity={item.qty} price={item.event.location} product={item.description} image={item.event.image} />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
