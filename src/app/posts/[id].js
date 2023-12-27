import { usePathname } from "next/navigation";
import React from "react";

const Post = () => {
  const page = usePathname();
  console.log("page", page);

  return <div>Post</div>;
};

export default Post;
