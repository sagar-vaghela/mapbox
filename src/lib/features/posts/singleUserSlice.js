import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleUser = createAsyncThunk(
  "posts/fetchSingleUser",
  async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/getPostByUid/${id}`);
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

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSingleUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch posts";
      });
  }
});

export default singleUserSlice.reducer;
