"use client";
import PostPage from "@/components/PostPage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "@/lib/features/posts/singlePostSlice";

const Post = ({ params }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.singlePost.data);
  const loading = useSelector((state) => state.singlePost.loading);

  useEffect(() => {
    dispatch(fetchSinglePost(params.id));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
          <PostPage postId={params.id} post={post} />
      )}
    </>
  );
};

export default Post;
