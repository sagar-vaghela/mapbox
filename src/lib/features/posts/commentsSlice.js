import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostComments = createAsyncThunk(
  "posts/fetchPostComments",
  async (id) => {
    try {
      const response = await fetch(
        // `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        `http://localhost:8000/comment/getCommentsByPostId/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch posts";
      });
  },
});

export default commentsSlice.reducer;
