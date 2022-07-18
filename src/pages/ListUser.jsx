import React from "react";
import CardUser from "../components/CardUser";
import Layout from "../components/Layout";

const ListUser = () => {
  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">List User</h1>
        <div className="flex flex-col justify-center">
          <CardUser />
        </div>
      </div>
    </Layout>
  );
};

export default ListUser;
