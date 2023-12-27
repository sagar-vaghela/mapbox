"use client";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "@/lib/features/posts/postsSlice";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);
  // const posts = await getData();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("posts", posts);

  return (
    <div className="px-16 py-4 flex flex-col gap-4 min-h-[calc(100vh-128px)]">
      <Link href="/posts" className="block bg-gray-300 px-6 py-3 self-end">
        See All Posts
      </Link>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {posts.slice(0, 10).map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
