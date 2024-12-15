import { createSlice } from "@reduxjs/toolkit";
import { fetchLiveFeed } from "../actions/FeedAction";

const initialState = {
  data: [],
  status: "idle",
  error: "",
};

const feedSlice = createSlice({
  name: "livefeed",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchLiveFeed.pending, (state, action) => {
      state.status = "Loading";
      state.data = [];
    });
    builder.addCase(fetchLiveFeed.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "successful";
    });
    builder.addCase(fetchLiveFeed.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export default feedSlice.reducer;
