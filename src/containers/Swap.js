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
import { useForm } from "antd/lib/form/Form";
import { CarryOutOutlined, SwapOutlined } from "@ant-design/icons";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { useEffect, useState } from "react";
const { Option } = Select;

const Swap = () => {
  const [form] = useForm();
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [fromToken, setFromToken] = useState();
  const [toToken, setToToken] = useState();
  const [fee, setFee] = useState();
  const [slippage, setSlippage] = useState();
  const [out, setOut] = useState();
  const [rate, setRate] = useState(0);

  useEffect(() => {
    if (
      fromValue != undefined &&
      toValue != undefined &&
      fromToken != undefined &&
      toToken != undefined
    ) {
      setFee(0.3 * fromValue);
      setSlippage(0.8);
      setOut(toValue - 0.8);
    }
  }, [fromValue, toValue, fromToken, toToken]);

  useEffect(() => {
    if (fromToken != undefined && toToken != undefined) {
      if (toToken == "zoo") {
        setRate(0.5);
      } else {
        setRate(2);
      }
    }
  }, [toToken]);

  const getRateExpression = () => {
    return (
      <span>
        <CarryOutOutlined style={{ marginRight: 10 }} />
        {rate > 0 && fromToken != undefined && toToken != undefined
          ? `1 ${toToken} = ${rate} ${fromToken}`
          : ""}
      </span>
    );
  };

  const onSwap = () => {};

  const resetFromToValues = () => {
    form.setFieldsValue({
      fromValue: 0,
      toValue: 0,
    });
    setFromValue(0);
    setToValue(0);
  };

  const onFromValueChanged = (value) => {
    setFromValue(value);
  };

  const onToValueChanged = (value) => {
    setToValue(value);
  };

  const onFromTokenChanged = (token) => {
    if (token == "eth") {
      form.setFieldsValue({ toToken: "zoo" });
      setToToken("zoo");
    } else {
      form.setFieldsValue({ toToken: "eth" });
      setToToken("eth");
    }
    resetFromToValues();
    setFromToken(token);
  };

  const onToTokenChanged = (token) => {
    if (token == "eth") {
      form.setFieldsValue({ fromToken: "zoo" });
      setFromToken("zoo");
    } else {
      form.setFieldsValue({ fromToken: "eth" });
      setFromToken("eth");
    }
    resetFromToValues();
    setToToken(token);
  };

  const fromTokenSelector = () => {
    return (
      <Form.Item
        name="fromToken"
        noStyle
        rules={[{ required: true, message: "Please select from token!" }]}
      >
        <Select onChange={onFromTokenChanged} style={{ width: 100 }}>
          <Option value="eth">eth</Option>
          <Option value="zoo">zoo</Option>
        </Select>
      </Form.Item>
    );
  };

  const toTokenSelector = () => {
    return (
      <Form.Item
        name="toToken"
        noStyle
        rules={[{ required: true, message: "Please select to token!" }]}
      >
        <Select onChange={onToTokenChanged} style={{ width: 100 }}>
          <Option value="eth">eth</Option>
          <Option value="zoo">zoo</Option>
        </Select>
      </Form.Item>
    );
  };

  return (
    <Row justify="center" style={{ margin: 80 }}>
      <Col lg={8} md={12} sm={16}>
        <Card title="Swap" style={{ borderRadius: 16 }}>
          <Form
            form={form}
            initialValues={{ fromValue: 0, toValue: 0 }}
            labelCol={{ span: 6 }}
            onFinish={onSwap}
          >
            <Form.Item
              name="fromValue"
              rules={[{ required: true, message: "Please input from value!" }]}
            >
              <InputNumber
                addonBefore={<div style={{ width: 60 }}>From</div>}
                addonAfter={fromTokenSelector()}
                style={{ width: "100%" }}
                onChange={onFromValueChanged}
              />
            </Form.Item>

            <Form.Item
              name="toValue"
              rules={[{ required: true, message: "Please input to value!" }]}
            >
              <InputNumber
                addonBefore={<div style={{ width: 60 }}>To</div>}
                addonAfter={toTokenSelector()}
                style={{ width: "100%" }}
                onChange={onToValueChanged}
              />
            </Form.Item>

            <Collapse expandIconPosition="right" defaultActiveKey={1}>
              <CollapsePanel header={getRateExpression()} key={1}>
                <Row>
                  <Col flex={1}>
                    <Statistic
                      title="Fee(0.3%)"
                      value={
                        fee == undefined
                          ? "-"
                          : `${fee.toFixed(1)} ${fromToken}`
                      }
                    />
                  </Col>
                  <Col flex={1}>
                    <Statistic
                      title="Slippage"
                      value={
                        slippage == undefined
                          ? "-"
                          : `${slippage.toFixed(1)} ${toToken}`
                      }
                    />
                  </Col>
                  <Col flex={1}>
                    <Statistic
                      title="Real Out"
                      value={
                        out == undefined ? "-" : `${out.toFixed(1)} ${toToken}`
                      }
                    />
                  </Col>
                </Row>
              </CollapsePanel>
            </Collapse>

            <Button
              style={{ width: "100%", marginTop: 20 }}
              type="primary"
              htmlType="submit"
              icon={<SwapOutlined />}
            >
              Swap
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Swap;
