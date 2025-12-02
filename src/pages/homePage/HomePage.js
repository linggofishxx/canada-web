import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Divider } from "antd";
import { queryUnitsByType } from "../../request";
import "./HomePage.less";
export default function HomePage() {
    const navigate = useNavigate();
    const [readUnits, setReadUnits] = useState([]);
    const [listenUnits, setListenUnits] = useState([]);
    const handleClick = (unit) => {
        navigate(`/examination/${unit.id}`);
    };
    useEffect(() => {
        init1();
        init2();
    }, []);
    const init1 = async () => {
        const res = await queryUnitsByType("read");
        setReadUnits(res?.data ?? []);
    };
    const init2 = async () => {
        const res = await queryUnitsByType("listen");
        setListenUnits(res?.data ?? []);
    };
    return (_jsxs("div", { className: "home-page", children: [_jsx(Alert, { message: "Attention :", description: "Le partage d'un acc\u00E8s d'abonnement peut entra\u00EEner la fermeture du compte sans pr\u00E9avis.", type: "error", closable: true }), _jsx(Divider, { style: { borderColor: "#2e93f2" }, children: _jsx("span", { className: "title", children: "compr\u00E9hension \u00E9crite PRO" }) }), _jsx("div", { className: "test-paper-content", children: readUnits.map((item, index) => (_jsxs("div", { className: "paper-button", onClick: () => handleClick(item), children: ["compr\u00E9hension \u00E9crite test ", index + 1] }))) }), _jsx(Divider, { style: { borderColor: "#2e93f2", marginTop: 40 }, children: _jsx("span", { className: "title", children: "compr\u00E9hension orale PRO" }) }), _jsx("div", { className: "test-paper-content", children: listenUnits.map((item, index) => (_jsxs("div", { className: "paper-button pro-background", onClick: () => handleClick(item), children: ["compr\u00E9hension \u00E9crite test ", index + 1] }))) })] }));
}
