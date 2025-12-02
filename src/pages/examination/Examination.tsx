import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radio, Image } from "antd";
import { queryUnitQuestions } from "../../request";
import "./Examination.less";

export default function Examination() {
  const { unitId } = useParams();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    queryQuestions(Number(unitId));
  }, [unitId]);

  const { image_url, mp3_url, answer_items } = questions?.[currentIndex] ?? {};
  console.log("mp3_url", mp3_url);

  console.log("image_url", image_url);

  const options = answer_items
    ? JSON.parse(answer_items).map((item: any) => ({
        ...item,
        className: "radio-option",
      }))
    : [];

  const queryQuestions = async (unitId: number) => {
    const res = await queryUnitQuestions(unitId);
    setQuestions(res?.data ?? []);
  };

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };
  return (
    <div className="examination">
      <div className="examination-wrapper">
        <div className="question-num-block">
          <div className="question-panel">
            {questions.map((item, index) => (
              <div
                onClick={() => setCurrentIndex(index)}
                key={item.key}
                className="question-button"
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="legend">
            <span>
              <span className="legend-indicator actuel-indicator"></span> actuel
            </span>
            <span>
              <span className="legend-indicator revision-indicator"></span>{" "}
              révision
            </span>
            <span>
              <span className="legend-indicator repondue-indicator"></span>{" "}
              répondue
            </span>
          </div>
        </div>
        {image_url && (
          <Image
            className="question-image"
            src={`http://localhost:3000${image_url}`}
            alt=""
          />
        )}
        {mp3_url && (
          <audio
            className="question-image"
            controls
            src={`http://localhost:3000${encodeURI(mp3_url)}`}
            style={{ width: "100%" }}
          />
        )}
        <Radio.Group
          className="question-answers"
          style={style}
          value="A"
          options={options}
        ></Radio.Group>
      </div>
    </div>
  );
}
