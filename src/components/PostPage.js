import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments } from '@/lib/features/posts/commentsSlice';
import CommentForm from './CommentForm';
import Comments from './Comments';

const PostPage = ({ userPosts, postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.postComments.data);

  useEffect(() => {
    dispatch(fetchPostComments(postId));
  }, [postId]);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-800 bg-opacity-40 p-1 rounded-lg">
        <div className="bg-gray-700 p-6 h-full flex flex-col gap-5 rounded-md bg-opacity-60 backdrop-blur-[15px]">
          <img
            src={userPosts?.images}
            alt={userPosts && userPosts?.name}
            className="w-full object-cover rounded aspect-video"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl pb-1 font-semibold">
              {userPosts && userPosts?.title}
            </h3>
            <p>{userPosts && userPosts?.description}</p>
          </div>
        </div>
      </div>
      {comments.length !== 0 && (
        <>
          <h2 className="text-xl px-1">Comments</h2>
          <Comments comments={comments} />
        </>
      )}
      <CommentForm postId={postId} />
    </div>
  );
};

export default PostPage;
