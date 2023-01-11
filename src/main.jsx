import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import { Project } from "./Project";
import { HomePage } from "./HomePage";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/project/:projectId",
          element: <Project />,
        },
      ],
    },
  ]
  // { basename: "/portfolio" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
