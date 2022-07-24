import React from "react";
import { AiFillStar } from "react-icons/ai";

const CardRestoadmin = ({
  title,
  image,
  location,
  rating,
  status,
  onClick,
  category,
  onClickItem,
}) => {
  return (
    <div className="flex justify-center mx-10 mb-5">
      <div className="container grow flex flex-col bg-white max-w-sm mx-auto rounded-md  text-black border-1 shadow-lg mb-3 mt-3">
        <div
          className="cursor-pointer h-full flex flex-col justify-between"
          onClick={onClickItem}
        >
          <img
            className="max-w-full  h-full"
            width="500"
            height="350"
            src={
              image
                ? image
                : "https://via.placeholder.com/500x350?text=No+Image"
            }
            alt="Rumah Makan Padang"
          />
          {console.log(image)}
          <div className="px-3 py-2">
            {category == "halal" ? (
              <div className="flex justify-center box-border h-8 w-full my-2 border-2 border-green-400">
                <span className="text-sm font-medium py-1 px-2 text-green-500 align-middle">
                  {category}
                </span>
              </div>
            ) : (
              <div className="flex justify-center box-border h-8 w-full my-2 border-2 border-red-400">
                <span className="text-sm font-medium py-1 px-2 text-red-500 align-middle">
                  {category}
                </span>
              </div>
            )}
            <p className="mt-2 text-bold">{title}</p>
            <div className="md:text-lg md:font-semibold  ">
              <p className="">{location}</p>
              <p class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-gray-800 my-2">
                {rating.toFixed(1)} <AiFillStar />
              </p>
            </div>
          </div>
          {status == "verified" ? (
            <div className="flex justify-center h-8 w-full bg-green-500">
              <span className="text-sm font-medium py-1 px-2 text-white align-middle">
                {status}
              </span>
            </div>
          ) : (
            <div className="flex justify-center h-8 w-full bg-[#D9613C]">
              <span className="text-sm font-medium py-1 px-2 text-white align-middle">
                {status}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardRestoadmin;
