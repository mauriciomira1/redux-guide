import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: 'rootReducer',
  initialState: {
    currentUser: null,
    products: [],
    productsTotalPrice: 0,
  },
  reducers: {
    userReducer,
    cartReducer,
  }
})

export default rootReducer;