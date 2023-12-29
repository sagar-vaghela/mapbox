import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div className="flex flex-col">
      {comments?.map((comment) => (
        <div
          key={comment.comments_id}
          className="bg-gray-800 bg-opacity-40 p-1 rounded-lg"
        >
          <div className="bg-gray-700 px-6 py-4 rounded-md bg-opacity-60 backdrop-blur-[15px]">
            <p>{comment.comment}</p>
            <h3 className="text-cl">- {comment.uname}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
