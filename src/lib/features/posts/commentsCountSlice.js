import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommentsCount = createAsyncThunk(
  'posts/fetchCommentsCount',
  async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/comment/getPostsWithCommentCount`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch posts');
    }
  }
);

const commentsCountSlice = createSlice({
  name: 'count',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommentsCount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommentsCount.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch posts';
      });
  },
});

export default commentsCountSlice.reducer;
