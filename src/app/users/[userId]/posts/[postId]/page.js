"use client";
import PostCard from "@/components/PostCard";
import PostPage from "@/components/PostPage";
import { fetchPosts } from "@/lib/features/posts/postsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ params }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);


  useEffect(() => {
    dispatch(fetchPosts(params.postId));
  }, [dispatch]);

  // useEffect(() => {
  //   if (!params.userpostId) {
  //     router.push("/");
  //   }
  // }, [params.userpostId]);


  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {singleUser?.map((userPosts) => {
            return <PostCard userPosts={userPosts} />;
          })} */}
          <PostPage userPosts={posts} />
        </div>
      )}
    </>
  );
};

export default Post;
