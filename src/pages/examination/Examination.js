import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radio, Image } from "antd";
import { queryUnitQuestions } from "../../request";
import "./Examination.less";
export default function Examination() {
    const { unitId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    useEffect(() => {
        queryQuestions(Number(unitId));
    }, [unitId]);
    const { image_url, mp3_url, answer_items } = questions?.[currentIndex] ?? {};
    console.log("mp3_url", mp3_url);
    console.log("image_url", image_url);
    const options = answer_items
        ? JSON.parse(answer_items).map((item) => ({
            ...item,
            className: "radio-option",
        }))
        : [];
    const queryQuestions = async (unitId) => {
        const res = await queryUnitQuestions(unitId);
        setQuestions(res?.data ?? []);
    };
    const style = {
        display: "flex",
        flexDirection: "column",
        gap: 8,
    };
    return (_jsx("div", { className: "examination", children: _jsxs("div", { className: "examination-wrapper", children: [_jsxs("div", { className: "question-num-block", children: [_jsx("div", { className: "question-panel", children: questions.map((item, index) => (_jsx("div", { onClick: () => setCurrentIndex(index), className: "question-button", children: index + 1 }, item.key))) }), _jsxs("div", { className: "legend", children: [_jsxs("span", { children: [_jsx("span", { className: "legend-indicator actuel-indicator" }), " actuel"] }), _jsxs("span", { children: [_jsx("span", { className: "legend-indicator revision-indicator" }), " ", "r\u00E9vision"] }), _jsxs("span", { children: [_jsx("span", { className: "legend-indicator repondue-indicator" }), " ", "r\u00E9pondue"] })] })] }), image_url && (_jsx(Image, { className: "question-image", src: `http://localhost:3000${image_url}`, alt: "" })), mp3_url && (_jsx("audio", { className: "question-image", controls: true, src: `http://localhost:3000${encodeURI(mp3_url)}`, style: { width: "100%" } })), _jsx(Radio.Group, { className: "question-answers", style: style, value: "A", options: options })] }) }));
}
