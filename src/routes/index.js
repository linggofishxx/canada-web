import { jsx as _jsx } from "react/jsx-runtime";
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
            element: _jsx(MainLayout, {}),
            children: [
                {
                    index: true,
                    element: _jsx(HomePage, {}),
                },
                {
                    path: "Examination/:unitId?",
                    element: _jsx(Examination, {}),
                },
            ],
        },
        // 重定向示例
        {
            path: "/home",
            element: _jsx(Navigate, { to: "/" }),
        },
    ]);
    return element;
};
export default Routes;
