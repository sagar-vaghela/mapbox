import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import singlePostReducer from "./features/posts/singlePostSlice";
import commentsReducer from "./features/posts/commentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      singlePost: singlePostReducer,
      postComments: commentsReducer,
    },
  });
};
