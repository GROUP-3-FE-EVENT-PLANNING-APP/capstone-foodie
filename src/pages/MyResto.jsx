import React from "react";
import Layout from "../components/Layout";
import CardMyresto from "../components/CardMyresto";
import { Link } from "react-router-dom";

const MyResto = () => {
  return (
    <Layout>
      <div className="h-screen">
        <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">My Resto</h1>
        <div className="flex flex-col justify-center">
          <CardMyresto />
        </div>
        <div className="text-center">
          <p className="text-center text-2xl">Kamu tidak memiliki resto</p>
          <button
            type="submit"
            className="text-center py-2 px-4 mr-3 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
          >
            <Link to="/addresto">Buat Resto</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MyResto;
