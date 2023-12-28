"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PostCard = ({ post }) => {
  const router = useRouter();
  return (
    <div
      className="bg-gray-800 hover:bg-gradient-to-tl from-purple-300 via-pink-300 to-yellow-300 transition-all duration-300 bg-opacity-40 text-white p-1 rounded-lg cursor-pointer"
      onClick={() => router.push(`posts/${post.post_id}`)}
    >
      <div className="bg-gray-700 p-4 h-full flex flex-col items-start gap-2 rounded-md bg-opacity-60 hover:bg-opacity-85 backdrop-blur-[15px]">
        <img
          src={'https://static.vecteezy.com/system/resources/previews/015/573/452/original/sunset-landscape-with-bird-silhouettes-free-vector.jpg'}
          alt={post.title}
          className="w-full object-cover rounded aspect-[6/4]"
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
        <h2 className="text-xl w-full font-semibold pb-2">{post.title}</h2>
        <p className="text-sm">{post.sub_title}</p>
        {/* <button className="">Read more...</button> */}
      </div>
    </div>
  );
};

export default PostCard;
