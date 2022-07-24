import React from 'react';
import { CgFormatSlash } from 'react-icons/cg';
import User from './User';
import Admin from './Admin';
import { Link } from 'react-router-dom';
import Logonav from '../assets/images/foodie.png';
import { ThemeContext } from '../utils/context';
import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = (props) => {
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

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 border-b-2 bg-blue-600">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img src={Logonav} alt="logo" className="h-10" />
      </div>

      <div className="w-full flex-grow flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold text-xl tracking-tight">
            Wisata Foodie
          </Link>
        </div>

        <div hidden={loggedin}>
          <div className="flex">
            <div className="px-2">
              <Link to="/login" className="block text-sm px-4 py-2 leading-none  rounded text-gray-200 hover:text-white mt-4 lg:mt-0">
                LOGIN
              </Link>
            </div>

            <div className="px-2">
              <Link to="/register" className="inline-block text-sm px-4 py-2 leading-none  rounded text-gray-200 hover:text-white mt-4 lg:mt-0">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
        <div className="flex" hidden={loggedout}>
          {theme === 'dark' ? <FaSun className="w-8 h-8 text-white" onClick={() => handleThemeChange('light')} /> : <FaMoon className="w-8 h-8 text-white" onClick={() => handleThemeChange('dark')} />}
          <User></User>
          <Admin></Admin>
        </div>
      </div>
    </nav>
  );
};

export default Header;
