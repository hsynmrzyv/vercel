"use client";

import React, { useEffect } from "react";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import { setBlogs } from "./slices/blog.slice";

// Components
import BlogList from "./components/BlogList";

const App = () => {
  const dispatch = useDispatch();

  const getBlogs = async () => {
    const response = await fetch("https://pf201blog-api.onrender.com/api/blog", {
      credentials: "include",
    });
    const data = await response.json();

    dispatch(setBlogs(data));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight">From the blog</h2>
        <p className="text-gray-600 leading-loose text-lg mt-2">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <BlogList />
    </div>
  );
};

export default App;
