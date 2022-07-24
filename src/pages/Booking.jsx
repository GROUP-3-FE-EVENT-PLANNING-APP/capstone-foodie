import React from "react";
import Layout from "../components/Layout";

const Booking = () => {
  return (
    <Layout>
      <div className="h-full">
        <form className="text-center">
          <div className="mb-6 mt-5">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Kapasitas meja
            </label>
            <input
              type="number"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tanggal
            </label>
            <input
              type="date"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
            />
          </div>

          <div className="mb-6">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Waktu
            </label>
            <input
              type="time"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center m-5"
          >
            Book
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Booking;
