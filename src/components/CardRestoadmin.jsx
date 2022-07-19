import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CardRestoadmin = ({ title, location, rating, status, onClick, category, onClickItem }) => {
  return (
    <div className="flex justify-center mx-10 mb-5">
      <div className="container grow flex flex-col bg-white max-w-sm mx-auto rounded-md  text-black border-1 shadow-lg mb-3 mt-3">
        <div className="cursor-pointer h-full flex flex-col justify-between ">
          <img className="max-w-full  h-auto" width="500" height="750" src="https://th.bing.com/th/id/OIP.VdB7tzRUB_rI9Al-tlPYKwHaE8?w=224&h=180&c=7&r=0&o=5&pid=1.7" alt="Rumah Makan Padang" />
          <div className="px-3 py-2">
            <div className="flex justify-center box-border h-8 w-full my-2 border-2 border-green-400">
              <span className="text-sm font-medium py-1 px-2 text-green-500 align-middle">{category}</span>
            </div>
            <p className="mt-2 text-bold">{title}</p>
            <div className="md:text-lg md:font-semibold  ">
              <p className="">{location}</p>
              <p class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-gray-800 my-2">
                {rating} <AiFillStar />
              </p>
            </div>
          </div>
          <div className="flex justify-center h-8 w-full my-2 bg-[#D9613C]">
            <span className="text-sm font-medium py-1 px-2 text-white align-middle">{status}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mr-3 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]"
            onClick={onClickItem}
          >
            Detail
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mr-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#D9613C] hover:bg-[#ce542f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b85a3d]"
            onClick={onClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRestoadmin;
