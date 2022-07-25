import React from 'react';
import CardUser from '../components/CardUser';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { Loading } from '../components/Loading';

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
    return <Loading />;
  } else {
    return (
      <Layout>
        <div className="h-full w-full pb-10">
          <h1 className="text-2xl font-bold md:ml-12 pt-5 mb-3">List User</h1>
          <div>
            <div className="grid grid-cols-3 mr-8 gap-4">
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
