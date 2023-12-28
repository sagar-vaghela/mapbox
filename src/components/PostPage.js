import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const PostPage = ({ postId, post }) => {
  const handleCommentSubmit = (comment) => {
    console.log("Comment submitted:", comment);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-800 bg-opacity-40 p-1 rounded-lg">
        <div className="bg-gray-700 p-6 h-full flex flex-col items-start gap-2 rounded-md bg-opacity-60 backdrop-blur-[15px]">
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/015/573/452/original/sunset-landscape-with-bird-silhouettes-free-vector.jpg"
            }
            alt={post.title}
            className="w-full object-cover rounded aspect-video mb-4"
          />
          {/* --- image from api --- */}
          {/* {post &&
          post?.images?.map((image) => {
            return (
              <img
                src={image}
                alt={post.title}
                className="w-full h-auto mt-4"
              />
            );
          })} */}
          <h3 className="text-2xl text-bold">{post.title}</h3>
          <p>{post.body}</p>
          <br />
          <p>{post.body}</p>
          <p>{post.body}</p>
          <br />
          <p>{post.body}</p>
        </div>
      </div>
      <h2 className="text-xl px-1">Comments</h2>
      <Comments postId={postId} />
      <CommentForm onCommentSubmit={handleCommentSubmit} postId={postId} />
    </div>
  );
};

export default PostPage;
