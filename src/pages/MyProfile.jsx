import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState();
  const [objSubmit, setObjSubmit] = useState("");
  const [avatar_url, setAvatar] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getmyProfile();
  }, []);

  const getmyProfile = () => {
    axios({
      method: "get",
      url: `https://group3.altaproject.online/myprofile
      `,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setProfile(results);
        console.log(results);
      })
      .catch(function (error) {
        // handle error
        swal({
          title: "Good job!",
          text: "EROOR",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRemove = (id) => {
    axios
      .delete(`https://group3.altaproject.online/users `, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setRemove(results);
        swal({
          title: "Good job!",
          text: "SUCCESS DELETE ACCOUNT",
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
        navigate("/login", { replace: true });
      });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    if (e !== undefined) {
      e.preventDefault();
    }
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };
    axios({
      method: "put",
      url: `https://group3.altaproject.online/users`,
      data: formData,

      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        getmyProfile();
        swal("Good job!", "Success ", "success");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
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
        <div className="justify-center p-20">
          <form
            className="text-center border border-gray-400"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex justify-center py-3 text-center mx-auto">
              <div className="bg-gray-50 px-4 py-5 rounded-lg  text-center w-48">
                <div className="mb-4">
                  <img
                    className="w-auto mx-auto rounded-full object-cover object-center"
                    src={profile.avatar_url}
                    alt="Avatar Upload"
                  />
                </div>
                <label className="cursor-pointer mt-6">
                  <input
                    type="file"
                    onChange={(e) => {
                      setAvatar(URL.createObjectURL(e.target.files[0]));
                      handleChange(e.target.files[0], "avatar_url");
                      //console.log(e.target.files[0]);
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label
                for="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => handleChange(e.target.value, "name")}
              />
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => handleChange(e.target.value, "email")}
              />
            </div>
            <div className="mb-6">
              <label
                for="notelp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No telp
              </label>
              <input
                type="text"
                id="notelp"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => handleChange(e.target.value, "notelp")}
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full sm:w-1/2 p-2.5 "
                onChange={(e) => handleChange(e.target.value, "password")}
              />
            </div>

            <button
              type="submit"
              className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mt-5"
            >
              Edit
            </button>
          </form>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="text-center text-white bg-[#D9613C] hover:bg-[#ce542f]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center  "
              onClick={() => handleRemove(profile.id)}
            >
              Delete My Profile
            </button>
          </div>
        </div>
      </Layout>
    );
  }
};

export default MyProfile;
