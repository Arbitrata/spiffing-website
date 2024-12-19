import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  EntryRoot,
  ErrorPage,
  LandingPage,
  AboutUsPage,
  PhotoGallery,
  OurServicesPage,
  ContactUsPage,
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
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "our-services",
        element: <OurServicesPage />,
      },
      {
        path: "photo-gallery",
        element: <PhotoGallery />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
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
