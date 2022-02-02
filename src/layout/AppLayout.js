import { Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import Account from "../components/Account";
import Pool from "../containers/Pool";
import Swap from "../containers/Swap";
import logo from "../images/zoo.png";
import AppMenu from "../menu/AppMenu";

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Row>
          <Col span={8}>
            <Row gutter={20}>
              <Col>
                <img src={logo} width={40} height={40} />
              </Col>
              <Col>
                <h1>
                  <font color="white">Zoo Swap</font>
                </h1>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <AppMenu />
          </Col>
          <Col
            span={8}
            style={{
              margiRight: 10,
            }}
          >
            <Row justify="end" align="center">
              <Col>
                <Account />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Swap />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
          <Route path="/pool" element={<Pool />}></Route>
        </Routes>
      </Content>
      <Footer style={{ position: "sticky", bottom: 0 }}>
        © 2022 All rights reserved by Daniel Armstrong.
      </Footer>
    </Layout>
  );
};

export default AppLayout;
