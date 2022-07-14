import React from "react";
import Layout from "../components/Layout";
import CardMyresto from "../components/CardMyresto";

const MyResto = () => {
  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Resto</h1>
        <div className="flex flex-col justify-center">
          <CardMyresto />
        </div>
      </div>
    </Layout>
  );
};

export default MyResto;
