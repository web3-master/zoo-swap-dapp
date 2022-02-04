import {
  Button,
  Card,
  Col,
  Collapse,
  Form,
  InputNumber,
  Row,
  Select,
  Statistic,
} from "antd";
import {
  InfoCircleOutlined,
  CreditCardOutlined,
  BankOutlined,
} from "@ant-design/icons";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { useEffect, useState } from "react";
const { Option } = Select;

const Pool = () => {
  const onPoolChanged = (pool) => {};

  return (
    <Row justify="center" style={{ margin: 80 }}>
      <Col lg={8} md={12} sm={16}>
        <Card title="Pool" style={{ borderRadius: 16 }}>
          <Collapse expandIconPosition="right" defaultActiveKey={[1, 2]}>
            <CollapsePanel
              header={
                <span>
                  <InfoCircleOutlined style={{ marginRight: 10 }} />
                  Total Liquidity : 10000
                </span>
              }
              key={1}
            >
              <Row>
                <Col flex={1}>
                  <Statistic title="Total eth" value={100} />
                </Col>
                <Col flex={1}>
                  <Statistic title="Total zoo" value={200} />
                </Col>
              </Row>
            </CollapsePanel>
            <CollapsePanel
              header={
                <span>
                  <InfoCircleOutlined style={{ marginRight: 10 }} />
                  My Liquidity : 100
                </span>
              }
              key={2}
            >
              <Row>
                <Col flex={1}>
                  <Statistic title="My eth" value={10} />
                </Col>
                <Col flex={1}>
                  <Statistic title="My zoo" value={20} />
                </Col>
              </Row>
            </CollapsePanel>
          </Collapse>

          <Row gutter={16}>
            <Col flex={1}>
              <Button
                style={{
                  width: "100%",
                  marginTop: 20,
                  backgroundColor: "green",
                  borderColor: "green",
                }}
                type="primary"
                htmlType="submit"
                icon={<CreditCardOutlined />}
              >
                Deposit
              </Button>
            </Col>
            <Col flex={1}>
              <Button
                style={{
                  width: "100%",
                  marginTop: 20,
                }}
                type="primary"
                htmlType="submit"
                icon={<BankOutlined />}
              >
                Withdraw
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Pool;
