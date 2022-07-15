import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyProfile from '../pages/MyProfile';
import MyResto from '../pages/MyResto';
import MyFavorite from '../pages/MyFavorite';
import Booking from '../pages/Booking';
import AdminResto from '../pages/AdminResto';
import Detail from '../pages/Detail';

function Rot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myresto" element={<MyResto />} />
        <Route path="/myfavorite" element={<MyFavorite />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/adminresto" element={<AdminResto />} />
        <Route path="/detail/:detail_id" element={<Detail />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rot;
