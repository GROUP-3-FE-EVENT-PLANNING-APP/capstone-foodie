import React from "react";

const CardUser = (props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-10">
      <div className="flex flex-col items-center pb-7 pt-7">
        <img
          className="mb-3 w-28 h-28 rounded-full shadow-lg"
          src="https://th.bing.com/th/id/OIP.H-QyqWm_-eqQYkievLAJcQAAAA?w=138&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          08133455666
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#D9613C] rounded-lg hover:bg-[#ce542f] focus:ring-4 focus:outline-none focus:ring-[#b85a3d] dark:bg-[#b75132] dark:hover:bg-[#D9613C] dark:focus:ring-[#ce542f]"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
