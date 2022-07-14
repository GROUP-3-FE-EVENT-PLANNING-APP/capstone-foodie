import React from "react";
import Layout from "../components/Layout";
import CardMyfavorite from "../components/CardMyfavorite";

const MyFavorite = () => {
  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Favorite</h1>
        <div className="flex flex-col justify-center">
          <CardMyfavorite />
        </div>
      </div>
    </Layout>
  );
};

export default MyFavorite;
