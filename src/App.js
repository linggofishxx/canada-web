import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Router, {}) }) }));
}
export default App;
