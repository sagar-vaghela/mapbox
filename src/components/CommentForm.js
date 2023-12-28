import React from "react";
import { useForm } from "react-hook-form";

const CommentForm = ({ onCommentSubmit, postId }) => {
  const { handleSubmit, control, register, reset } = useForm();

  const onSubmit = (data) => {
    onCommentSubmit({
      ...data,
      time: new Date().toLocaleString(),
      postId: postId,
    });
    reset();
  };

  return (
    <div className="bg-gradient-to-tl from-purple-300 via-pink-300 to-yellow-300 p-1 rounded-lg">
      <div className="bg-gray-700 p-6 h-full flex flex-col items-start gap-2 rounded-md bg-opacity-70 backdrop-blur-[15px]">
        <h3 className="text-2xl mb-4">Leave a comment</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md">
          <div className="mb-4">
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              placeholder="Your name here..."
              className="mt-1 p-2 px-4 bg-gray-700 border border-gray-600 rounded-md w-full placeholder:text-gray-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              {...register("comment")}
              id="comment"
              name="comment"
              rows="4"
              placeholder="Your comment here..."
              className="mt-1 p-2 px-4 bg-gray-700 border border-gray-600 rounded-md w-full placeholder:text-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
