import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import "./index.css";
import JobDetails from "./JobDetails";
import Appliedjobs from "./Appliedjobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/applied-jobs",
        element: <Appliedjobs/>,
        loader : () => fetch("../jobs.json"),
      },
      {
        path: "/jobs/:id",
        loader: ({params}) => {return ({jobid: params.id})},
        element: <JobDetails/>,
      },
      {
        path: "/*",
        element: <div>404</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
