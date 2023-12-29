import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/posts/usersSlice';
import singleUserReducer from './features/posts/singleUserSlice';
import singlePostReducer from './features/posts/singlePostSlice';
import commentsReducer from './features/posts/commentsSlice';
import commentsCountReducer from './features/posts/commentsCountSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersReducer,
      singleUser: singleUserReducer,
      singlePost: singlePostReducer,
      postComments: commentsReducer,
      commentsCount: commentsCountReducer,
    },
  });
};
