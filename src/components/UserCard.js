"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UserCard = ({ user }) => {
  const router = useRouter();
  return (
    <div
      className="bg-gray-800 hover:bg-gradient-to-tl from-purple-300 via-pink-300 to-yellow-300 transition-all duration-300 bg-opacity-40 text-white p-1 rounded-lg cursor-pointer group"
      onClick={() => router.push(`/users/${user.id}/posts`)}
    >
      <div className="bg-gray-700 p-4 h-full flex items-center gap-3 rounded-md bg-opacity-60 group-hover:bg-opacity-85 backdrop-blur-[15px]">
        <img
          src={
            "https://static.vecteezy.com/system/resources/previews/003/623/626/non_2x/sunset-lake-landscape-illustration-free-vector.jpg"
          }
          alt={user.uname}
          className="h-10 w-10 rounded-full"
        />
        {/* {post &&
          post?.images?.map((image) => {
            return (
              <img
                src={image}
                alt={post.title}
                className="h-10 w-10 rounded-full"
              />
            );
          })} */}
        <h2 className="text-xl w-full font-semibold">{user.uname}</h2>
      </div>
    </div>
  );
};

export default UserCard;
