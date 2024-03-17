import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./assets/component/createPost.jsx";
import PostList from "./assets/component/PostList.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <CreatePost />,
//     children: [{ path: "/", element: <PostList /> }],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider></RouterProvider> */}
    <App />
  </React.StrictMode>
);
