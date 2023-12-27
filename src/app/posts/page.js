import PostCard from "@/components/PostCard";
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
    <div className="px-16 py-4">
      <div className="posts grid grid-cols-3 gap-4">
        {posts.slice(0, 40).map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
