// store.js
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/user.slice.js";
import blogReducer from "../slices/blog.slice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
  },
});

export default store;
