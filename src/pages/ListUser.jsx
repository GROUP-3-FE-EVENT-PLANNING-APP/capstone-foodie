import React from 'react';
import CardUser from '../components/CardUser';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const ListUser = () => {
  const [namauser, setNamaUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: 'get',
      url: `https://group3.altaproject.online/admins/users
      `,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setNamaUser(results);
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

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="h-full w-full">
          <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">List User</h1>
          <div className="grid lg:grid-cols-3">
            <div className="flex flex-col justify-center">
              {namauser.map((item, index) => (
                <CardUser nama={item.name} email={item.email} handphone={item.handphone} image={item.avatar_url} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default ListUser;
