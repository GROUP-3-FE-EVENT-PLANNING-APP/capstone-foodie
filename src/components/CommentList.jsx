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
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>{props.name}Sarah</strong>
              <p className="text-sm"></p>
              <div className="mt-4 flex items-center">
                {props.comment}Bebeknya Enak!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
