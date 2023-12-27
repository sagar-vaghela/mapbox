import PostCard from "@/components/PostCard";
import Link from "next/link";
import React from "react";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Posts = async () => {
  const posts = await getPosts();
  return (
    <>
      <div className="self-start relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-yellow-300 rounded-md"></div>
        <Link
          href="/"
          className="block relative text-black font-bold bg-gray-300 bg-opacity-50 hover:bg-opacity-5 transition-all duration-200 rounded-md px-6 py-3"
        >
          Back
        </Link>
      </div>
      <div className="posts grid grid-cols-3 gap-4">
        {posts.slice(0, 40).map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
