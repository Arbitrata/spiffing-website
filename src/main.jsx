import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  EntryRoot,
  ErrorPage,
  LandingPage,
  CoursesPage,
  LawPractices,
  DataManagement,
  ElectronicsDroneTech,
  Catalog,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "law-practices",
        element: <LawPractices />,
      },
      {
        path: "data-management",
        element: <DataManagement />,
      },
      {
        path: "Electronics&drone-technology",
        element: <ElectronicsDroneTech />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
