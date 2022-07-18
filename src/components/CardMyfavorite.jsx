import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CardMyfavorite = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mb-5">
      <div className="h-52 lg:h-auto lg:w-72 flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-y-2 border-l-2 border-gray-400">
        <img src="https://th.bing.com/th/id/OIP.z6n17lTkJhTZxPComWPS2AHaFj?w=320&h=250&c=7&r=0&o=5&pid=1.7" alt="img" />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h2 className="text-gray-900 font-bold text-xl mb-2 ">Monsieur Spoon</h2>
          <p className="text-gray-700 text-base">Bali</p>
          <p class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-gray-800 my-2">
            4.0 <AiFillStar />
          </p>
          <div className="flex justify-center box-border h-8 w-36 my-2 border-2 border-green-400">
            <span className="text-sm font-medium py-1 px-2 text-green-500 align-middle">Halal</span>
          </div>

          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mx-7 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#D9613C] hover:bg-[#ce542f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b85a3d]"
            onClick={props.onClick}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMyfavorite;
