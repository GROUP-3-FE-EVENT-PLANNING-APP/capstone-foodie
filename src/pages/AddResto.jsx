import React from "react";
import Layout from "../components/Layout";
import ImageUpload from "../components/ImageUpload";
import AddMap from "../components/AddMap";

const AddResto = () => {
  return (
    <Layout>
      <div className="flex justify-center p-10">
        <form className="p-10 mt-8 w-full bg-white ">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white">
              <div className="mb-5 mt-5 flex flex-col">
                <ImageUpload />
              </div>
              <div className="mb-5 mt-5">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Name Resto
                  </label>
                  <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                    <input
                      id="input-resto"
                      type="text"
                      name="name-resto"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    No Telephone
                  </label>
                  <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                    <input
                      type="text"
                      name="phone"
                      id="input-phone"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="No Telephone"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Fasilitas
                  </label>
                  <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                    <input
                      type="text"
                      name="fasilitas"
                      id="input-fasilitas"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                      placeholder="Fasilitas"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                    <select
                      type="text"
                      name="category"
                      id="input-category"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                      placeholder="Fasilitas"
                    >
                      <option value="">Halal</option>
                      <option value="">Non Halal</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Kapasitas Meja
                  </label>
                  <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                    <input
                      type="text"
                      name="kapasitas"
                      id="input-kapasitas"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                      placeholder="Kapasitas meja"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 mt-5">
                <p>Location</p>
                <AddMap />
              </div>

              <div className="mb-5 mt-5">
                <div>
                  <p>Upload Menu</p>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="inline-block max-h-80 max-w-7xl overflow-hidden bg-gray-100">
                    <img src="" alt="" width="210" height="210" />
                  </span>
                  <input
                    type="file"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mb-5 mt-5">
                <div>
                  <p>Upload Berkas</p>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="inline-block max-h-80 max-w-7xl overflow-hidden bg-gray-100">
                    <img src="" alt="" width="210" height="210" />
                  </span>
                  <input
                    type="file"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddResto;
