import React from "react";
import { AiFillStar } from "react-icons/ai";

function CardHomePage(props) {
  const ishalal = props.category == "halal";
  return (
    <>
      <>
        <div className="container grow p-7 flex flex-col bg-white max-w-sm mx-auto text-black">
          <div
            className="cursor-pointer h-full flex flex-col justify-between"
            onClick={props.onClickItem}
          >
            <img
              className="object-cover max-w-full transition duration-0 hover:duration-150 hover:scale-125 h-auto rounded-md"
              width="500"
              height="750"
              src={props.image}
              alt={props.image}
            />
            <div className="">
              <h2 className="mt-2 font-bold">{props.restoname}</h2>
              <div>
                <p className="my-2">{props.location}</p>
                <div className="flex flex-row">
                  <div class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-gray-800 my-2">
                    {props.rating.toFixed(1)}
                    <AiFillStar />
                  </div>
                  <div className="ml-2 my-3 text-gray-600">RATED</div>
                </div>
              </div>
            </div>
          </div>
          <div hidden={!ishalal}>
            <div className="flex justify-center h-8 w-full my-2 bg-[#6ED93C] rounded-md">
              <span className="text-sm font-medium py-1 px-2 text-white align-middle">
                {props.category}
              </span>
            </div>
          </div>
          <div hidden={ishalal}>
            <div className="flex justify-center h-8 w-full my-2 bg-red-500 rounded-md">
              <span className="text-sm font-medium py-1 px-2 text-white align-middle">
                {props.category}
              </span>
            </div>{" "}
          </div>
        </div>
      </>
    </>
  );
}

function CardLoading(props) {
  return (
    <>
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    </>
  );
}

export { CardHomePage, CardLoading };
