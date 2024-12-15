import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com/posts?_limit=30";

export const fetchLiveFeed = createAsyncThunk(
  "Live_feed/loading",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASEURL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
