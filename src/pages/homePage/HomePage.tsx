import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Divider } from "antd";
import { queryUnitsByType } from "../../request";
import "./HomePage.less";

export default function HomePage() {
  const navigate = useNavigate();
  const [readUnits, setReadUnits] = useState<any>([]);
  const [listenUnits, setListenUnits] = useState<any>([]);

  const handleClick = (unit: any) => {
    navigate(`/examination/${unit.id}`);
  };

  useEffect(() => {
    init1();
    init2();
  }, []);

  const init1 = async () => {
    const res = await queryUnitsByType("read");
    setReadUnits((res?.data as any[]) ?? []);
  };

  const init2 = async () => {
    const res = await queryUnitsByType("listen");
    setListenUnits((res?.data as any[]) ?? []);
  };

  return (
    <div className="home-page">
      <Alert
        message="Attention :"
        description="Le partage d'un accès d'abonnement peut entraîner la fermeture du compte sans préavis."
        type="error"
        closable
      />

      <Divider style={{ borderColor: "#2e93f2" }}>
        <span className="title">compréhension écrite PRO</span>
      </Divider>
      <div className="test-paper-content">
        {readUnits.map((item: any, index: number) => (
          <div className="paper-button" onClick={() => handleClick(item)}>
            compréhension écrite test {index + 1}
          </div>
        ))}
      </div>

      <Divider style={{ borderColor: "#2e93f2", marginTop: 40 }}>
        <span className="title">compréhension orale PRO</span>
      </Divider>
      <div className="test-paper-content">
        {listenUnits.map((item: any, index: number) => (
          <div
            className="paper-button pro-background"
            onClick={() => handleClick(item)}
          >
            compréhension écrite test {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
