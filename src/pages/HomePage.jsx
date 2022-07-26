import React from "react";
import { CardHomePage } from "../components/CardHomePage";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loading } from "../components/Loading";

import axios from "axios";
import "../styles/App.css";

const HomePage = () => {
  const [resto, setResto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const search = searchParams.get("search");

  useEffect(() => {
    fetchResto();
  }, []);

  const fetchResto = () => {
    axios
      .get(`https://group3.altaproject.online/restaurants`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setResto(results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handleSearch = () => {
    axios
      .get(
        `https://group3.altaproject.online/search-restaurant?search=${search}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // handle success
        const results = response.data.data;
        setResto(results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <div className="hero-image flex justify-center  items-center w-full">
          <div className="flex justify-center  items-center flex-col">
            <div className="  flex justify-center items-center mx-auto text-lg md:text-3xl lg:text-5xl text-white font-semibold mb-5">
              Discover the best food & drinks in Nusantara
            </div>

            <div class="flex justify-center items-center flex-column">
              <div className="mb-3 xl:w-96">
                <div className="input-group relative flex  items-stretch w-full mb-4">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    onChange={(e) =>
                      setSearchParams({ search: e.target.value })
                    }
                  />
                  <button
                    className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                    onClick={() => [handleSearch(), setSearchParams("")]}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
          {resto.map((item) => (
            <CardHomePage
              key={item.id}
              restoname={item.resto_name}
              location={item.location}
              category={item.category}
              rating={item.rating}
              image={item.resto_images.map((tr) => tr.resto_image_url)}
              onClickItem={() => navigate(`detail/${item.id}`)}
            />
          ))}
        </div>
      </Layout>
    );
  }
};

export default HomePage;
