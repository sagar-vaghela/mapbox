"use client";
import PostPage from "@/components/PostPage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostComments } from "@/lib/features/posts/commentsSlice";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.postComments.data);
  // const loading = useSelector((state) => state.postComments.loading);

  useEffect(() => {
    comments.length === 0 && dispatch(fetchPostComments(postId));
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      {comments.map((comment, index) => (
        <div className="bg-gray-800 bg-opacity-40 p-1 rounded-lg">
          <div className="bg-gray-700 px-6 py-4 rounded-md bg-opacity-60 backdrop-blur-[15px]">
            <p>{comment.body}</p>
            <h3 className="text-cl">- {comment.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
