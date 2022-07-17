import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import MyResto from "../pages/MyResto";
import MyFavorite from "../pages/MyFavorite";
import AdminResto from "../pages/AdminResto";
import Detail from "../pages/Detail";
import ListUser from "../pages/ListUser";
import AddResto from "../pages/AddResto";
import Booking from "../pages/Booking";
<<<<<<< HEAD
import DetailAdmin from "../pages/DetailAdmin";
=======
import EditResto from "../pages/EditResto";
>>>>>>> d5d47c2339fc627443a762be6e4f4123cc1bc7c7

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
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/addresto" element={<AddResto />} />
        <Route path="/detail/:detail_id" element={<Detail />} />
<<<<<<< HEAD
        <Route path="/admindetail" element={<DetailAdmin />} />
=======
        <Route path="/editresto" element={<EditResto />} />
>>>>>>> d5d47c2339fc627443a762be6e4f4123cc1bc7c7
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rot;
