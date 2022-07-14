import React from "react";

const CommentForms = (props) => {
  return (
    <div className="comment-form flex mx-auto lg:pl-5">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-lg font-medium">Comments</h2>
          <div className="w-full px-3 mb-2 mt-2">
            <textarea
              onChange={props.onChange}
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
            ></textarea>
          </div>
          <div className="w-full flex items-start px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </div>
            <div className="-mr-1">
              <input
                onClick={props.submitComment}
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Comment"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForms;
