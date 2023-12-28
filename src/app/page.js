"use client";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/features/posts/postsSlice";
import ArrowRight from "@/assets/icons/ArrowRight";
import { useRouter } from "next/navigation";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    posts.length === 0 && dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div className="self-end relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-yellow-300 rounded-md"></div>
        <Link
          href="/posts"
          className="flex items-center gap-0.5 relative text-black font-bold bg-gray-300 bg-opacity-50 hover:bg-opacity-5 transition-all duration-200 rounded-md px-6 py-3 pr-5"
        >
          See All Posts
          <ArrowRight size={28} />
        </Link>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 5).map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
