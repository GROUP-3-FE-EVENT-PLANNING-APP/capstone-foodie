import React from "react";

const AddImage = (props) => {
  return (
    <div>
      <form className="flex" onSubmit={props.onSubmit}>
        <div className="mt-1 flex flex-col ml-5 items-start">
          <span className="inline-block max-h-80 max-w-7xl overflow-hidden bg-gray-100">
            <img src={props.image} alt="" width="210" height="210" />
          </span>
          <input
            disabled={props.isUploaded}
            type="file"
            className="bg-white md:w-52 py-2 px-3 mt-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onChange={props.onChange}
          />
          <button
            disabled={props.isUploaded}
            type="submit"
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5587E8] hover:bg-[#2869eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5784de]${
              props.isUploaded && " opacity-50 cursor-not-allowed"
            }`}
          >
            add image
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddImage;
