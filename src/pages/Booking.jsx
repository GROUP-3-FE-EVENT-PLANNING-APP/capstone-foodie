import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';

const Booking = () => {
  const [table_quota, setTable_quota] = useState();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  const params = useParams();

  const { detail_id } = params;

  const fetchBooking = () => {
    setLoading(true);
    axios({
      method: 'post',
      url: `https://group3.altaproject.online/restaurants/booking/${detail_id}`,
      data: {
        table_quota: +table_quota,
        date: date,
        time: time,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('linkPayment', res.data.data.redirect_url);
        swal({
          title: 'Good job!',
          text: 'SUCCESS BOOKING',
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 500) {
          swal({
            title: 'Failed to add!',
            text: 'Resto is already full',
          });
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <div className="h-screen">
          <div className="text-center pt-16">
            <div className="mb-6 mt-5">
              <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Kapasitas meja
              </label>
              <input
                type="number"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => setTable_quota(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Tanggal
              </label>
              <input
                type="date"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Waktu
              </label>
              <input
                type="time"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center m-5" onClick={(e) => fetchBooking(e)}>
              Book
            </button>

            <a href={localStorage.getItem('linkPayment')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center m-5">
              Pay
            </a>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Booking;
