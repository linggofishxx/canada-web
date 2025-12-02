import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

// 懒加载页面
const HomePage = lazy(() => import("../pages/homePage/HomePage"));

const Examination = lazy(() => import("../pages/examination/Examination"));

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "Examination/:unitId?",
          element: <Examination />,
        },
      ],
    },
    // 重定向示例
    {
      path: "/home",
      element: <Navigate to="/" />,
    },
  ]);

  return element;
};

export default Routes;
