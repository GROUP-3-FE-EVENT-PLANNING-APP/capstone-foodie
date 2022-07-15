import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const MyProfile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getmyProfile();
  }, []);

  const getmyProfile = () => {
    axios({
      method: 'get',
      url: `https://group3.altaproject.online/myprofile`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setProfile(results);
      })
      .catch(function (error) {
        // handle error
        swal({
          title: 'Good job!',
          text: 'EROOR',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="flex justify-center py-3 text-center mx-auto">
        <div className="bg-gray-50 px-4 py-5 rounded-lg shadow-lg text-center w-48">
          <div className="mb-4">
            <img
              className="w-auto mx-auto rounded-full object-cover object-center"
              src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
              alt="Avatar Upload"
            />
          </div>
          <label className="cursor-pointer mt-6">
            <span className="mt-2  leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full">Upload Avatar</span>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>

      <form className="text-center">
        <div className="mb-6">
          <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your name
          </label>
          <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 " />
        </div>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 " />
        </div>
        <div className="mb-6">
          <label for="notelp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No telp
          </label>
          <input type="text" id="notelp" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 " />
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your password
          </label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 " />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center m-5">
          Edit
        </button>

        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center ">
          Delete
        </button>
      </form>
    </Layout>
  );
};

export default MyProfile;
