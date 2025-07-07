import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

const router = createBrowserRouter([
  // 라우터 구성
  {
    Component: App, // root layout route
    children: [
      {
        // 레이아웃 적용
        path: "/",
        Component: Layout,
        children: [
          {
            path: "",
            Component: Home,
          },
        ],
      },
      {
        // 레이아웃 미적용
        path: "/",
        children: [
          {
            path: "auth",
            Component: Auth,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
