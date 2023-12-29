import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSinglePost = createAsyncThunk(
  'posts/fetchSinglePost',
  async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/getpost/${id}`);
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

const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSinglePost.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch posts';
      });
  },
});

export default singlePostSlice.reducer;
