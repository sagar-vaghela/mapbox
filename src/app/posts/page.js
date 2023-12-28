"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "@/components/PostCard";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import { fetchPosts } from "@/lib/features/posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    posts.length === 0 && dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div className="self-start relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-yellow-300 rounded-md"></div>
        <Link
          href="/"
          className="flex items-center gap-0.5 relative text-black font-bold bg-gray-300 bg-opacity-50 hover:bg-opacity-5 transition-all duration-200 rounded-md px-6 py-3 pl-3"
        >
          <ArrowLeft size={28} />
          Back
        </Link>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="posts grid grid-cols-3 gap-4">
          {posts.slice(0, 40).map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
