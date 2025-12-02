import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./MainLayout.less";
const { Header, Content } = Layout;
const headerStyle = {
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#ffffff",
};
const contentStyle = {
    color: "#fff",
    backgroundColor: "#ffffff",
};
const MainLayout = () => {
    return (_jsx("div", { className: "main-layout", children: _jsxs(Layout, { children: [_jsx(Header, { style: headerStyle, children: "Header" }), _jsx(Content, { style: contentStyle, children: _jsx(Outlet, {}) })] }) }));
};
export default MainLayout;
