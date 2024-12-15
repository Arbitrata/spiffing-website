import { configureStore } from "@reduxjs/toolkit";
import FeedReducer from "./reducers/FeedSlice";

const store = configureStore({
  reducer: {
    livefeed: FeedReducer,
  },
});

export default store;
