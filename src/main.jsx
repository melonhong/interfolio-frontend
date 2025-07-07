import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      // 메인 앱 라우트 (레이아웃 적용)
      {
        path: "",
        Component: Layout,
        children: [
          { index: true, Component: Home },
          { path: "portfolios", Component: Home },
          { path: "interview", Component: Home },
          { path: "mypage", Component: Home },
        ],
      },
      // 인증 관련 라우트 (레이아웃 미적용)
      {
        path: "auth",
        children: [
          { path: "login", Component: Login },
          { path: "logout", Component: Login },
        ],
      },
      // 기타 독립 페이지들 (레이아웃 미적용)
      { path: "landing", Component: Home },
      { path: "privacy", Component: Home },
      { path: "terms", Component: Home },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
