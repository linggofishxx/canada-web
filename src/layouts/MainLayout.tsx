import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./MainLayout.less";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#ffffff",
};

const contentStyle: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "#ffffff",
};

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
