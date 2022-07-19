import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CardRestoadmin from "../components/CardRestoadmin";

const AdminResto = () => {
  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">List Resto</h1>
        <div className="flex flex-col justify-center">
          <CardRestoadmin />
        </div>
      </div>
    </Layout>
  );
};

export default AdminResto;
