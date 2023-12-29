'use client';
import PostPage from '@/components/PostPage';
import { fetchSinglePost } from '@/lib/features/posts/singlePostSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Post = ({ params }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.singlePost.data);
  const loading = useSelector((state) => state.singlePost.loading);

  useEffect(() => {
    dispatch(fetchSinglePost(params.postId));
  }, [dispatch]);

  return (
    <div className="min-h-[calc(100vh-144px)] max-w-6xl mx-auto px-16 flex flex-col gap-6">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <PostPage userPosts={posts} postId={params.postId} />
      )}
    </div>
  );
};

export default Post;
