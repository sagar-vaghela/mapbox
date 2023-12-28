import React from "react";
import PostCard from "./PostCard";

const HomePage = ({ loading, posts }) => {
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 10).map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
