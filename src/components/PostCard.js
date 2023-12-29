import React from 'react';
import { useRouter } from 'next/navigation';

const PostCard = ({ userPosts, userId, comments }) => {
  const router = useRouter();

  const filteredComments = comments.find(
    (comment) => comment.post_id === userPosts.post_id
  );

  return (
    <div
      key={userPosts.post_id}
      className="bg-gray-800 hover:bg-gradient-to-tl from-purple-300 via-pink-300 to-yellow-300 transition-all duration-300 bg-opacity-40 text-white p-1 rounded-lg cursor-pointer group"
      onClick={() => router.push(`/users/${userId}/posts/${userPosts.post_id}`)}
    >
      <div className="bg-gray-700 h-full p-3 flex flex-col gap-4 items-start rounded-md bg-opacity-60 group-hover:bg-opacity-85 backdrop-blur-[15px]">
        <img
          src={userPosts?.images}
          alt={userPosts.title}
          className="w-full object-cover rounded aspect-[6/4]"
        />
        <div className="">
          <p className="text-sm pb-2 text-[#ccc]">
            {filteredComments?.comment_count} comments
          </p>
          <h2 className="text-lg w-full font-semibold pb-2">
            {userPosts.title}
          </h2>
          <p className="text-sm">{userPosts.sub_title}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
