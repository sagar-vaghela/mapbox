"use client";
import PostCard from "@/components/PostCard";
import { fetchSingleUser } from "@/lib/features/posts/singleUserSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = ({ params }) => {
  const dispatch = useDispatch();
  const singleUser = useSelector((state) => state.singleUser.data);
  const loading = useSelector((state) => state.singleUser.loading);

  useEffect(() => {
    dispatch(fetchSingleUser(params.userId));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {singleUser?.map((userPosts) => {
            return <PostCard userPosts={userPosts} userId={params.userId} />;
          })}
        </div>
      )}
    </>
  );
};

export default User;
