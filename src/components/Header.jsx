import React from 'react';
import { CgFormatSlash } from 'react-icons/cg';
// import User from './User';
import { Link } from 'react-router-dom';

const Header = () => {
  let loggedin;
  let loggedout;
  if (typeof window !== 'undefined') {
    //console.log("You are on the browser");
    loggedin = localStorage.getItem('token');
    loggedout = !loggedin;

    // 👉️ can use localStorage here
  } else {
    //console.log("You are on the server");
    // 👉️ can't use localStorage
  }

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 border-b-2 bg-blue-700">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img src="" alt="logo" className="h-8" />
      </div>

      <div className="w-full flex-grow flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold text-xl tracking-tight">
            KAPANGIH
          </Link>
        </div>

        <div hidden={loggedin}>
          <div className="flex">
            <div className="px-2">
              <Link to="/login" className="block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0">
                LOGIN
              </Link>
            </div>

            <CgFormatSlash className="inline-block text-white" />
            <div className="px-2">
              <Link to="/register" className="inline-block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
        <div hidden={loggedout}>{/* <User></User> */}</div>
      </div>
    </nav>
  );
};

export default Header;
