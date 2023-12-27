"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PostCard = ({ post }) => {
  const router = useRouter();

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg cursor-pointer"
      // onClick={() => router.push(`posts/${post.id}`)}
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
