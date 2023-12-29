'use client';
import PostCard from '@/components/PostCard';
import { fetchCommentsCount } from '@/lib/features/posts/commentsCountSlice';
import { fetchSingleUser } from '@/lib/features/posts/singleUserSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const User = ({ params }) => {
  const dispatch = useDispatch();
  const singleUser = useSelector((state) => state.singleUser.data);
  const loading = useSelector((state) => state.singleUser.loading);
  const comments = useSelector((state) => state.commentsCount.data);

  useEffect(() => {
    dispatch(fetchSingleUser(params.userId));
    dispatch(fetchCommentsCount());
  }, [dispatch]);

  return (
    <div className="min-h-[calc(100vh-144px)] max-w-6xl mx-auto px-16 flex flex-col gap-6">
      <div className="self-start relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-yellow-300 rounded-md"></div>
        <p className="flex items-center gap-0.5 relative text-black font-bold rounded-md px-6 py-2 pr-5">
          List of Posts
        </p>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {singleUser?.map((userPosts) => {
            return (
              <PostCard
                userPosts={userPosts}
                userId={params.userId}
                comments={comments}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default User;
