import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
