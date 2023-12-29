import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/posts/usersSlice";
import postsReducer from "./features/posts/postsSlice";
import singleUserReducer from "./features/posts/singleUserSlice";
import singlePostReducer from "./features/posts/singlePostSlice";
import commentsReducer from "./features/posts/commentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      singleUser: singleUserReducer,

      posts: postsReducer,
      singlePost: singlePostReducer,
      postComments: commentsReducer
    }
  });
};
