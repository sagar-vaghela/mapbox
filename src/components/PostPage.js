import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { fetchPostComments } from "@/lib/features/posts/commentsSlice";

const PostPage = ({ postId,post }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({});
  const handleCommentSubmit = (comment) => {
    console.log("Comment submitted:", comment);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/blogPost/getpost/${postId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if(response.ok){
        dispatch(fetchPostComments(postId));
        setPostData(data);
      }
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [postId]);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-800 bg-opacity-40 p-1 rounded-lg">
        <div className="bg-gray-700 p-6 h-full flex flex-col items-start gap-2 rounded-md bg-opacity-60 backdrop-blur-[15px]">
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/015/573/452/original/sunset-landscape-with-bird-silhouettes-free-vector.jpg"
            }
            alt={postData && postData?.name}
            className="w-full object-cover rounded aspect-video mb-4"
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
          <h3 className="text-2xl text-bold">{ postData && postData?.title}</h3>
          <p>{postData && postData?.sub_title}</p>
          <br />
          <p>{postData && postData?.description}</p>
          {/* <p>{postData && postData?.publishdate}</p> */}
          <br />
          <p>Name :{postData && postData?.name}</p>
        </div>
      </div>
      <h2 className="text-xl px-1">Comments</h2>
      <Comments postId={postId} />
      <CommentForm onCommentSubmit={handleCommentSubmit} postId={postId} fetchData={fetchData}/>
    </div>
  );
};

export default PostPage;
