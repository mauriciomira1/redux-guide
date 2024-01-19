import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: count
});

export default store;