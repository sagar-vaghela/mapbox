import PostPage from "@/components/PostPage";

const Post = ({ params }) => {
  console.log(params.id);

  return (
    <div className="min-h-">
      Post {params.id}
      <PostPage />
    </div>
  );
};

export default Post;
