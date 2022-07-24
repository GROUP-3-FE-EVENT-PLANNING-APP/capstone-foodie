import React from "react";

const CommentList = (props) => {
  return (
    <div>
      <div className=" mx-auto px-10 pb-10 item-start">
        <div className="space-y-4">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <img
                className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src={props.avatar}
                alt=""
              />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>{props.name}</strong>
              <p className="text-sm"></p>
              <div className="mt-4 flex items-center text-sm">
                {props.comment}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
