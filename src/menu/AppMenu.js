import { Menu } from "antd";
import { Link } from "react-router-dom";
import { SwapOutlined, BankOutlined } from "@ant-design/icons";

const AppMenu = () => {
  return (
    <Menu
      mode="horizontal"
      style={{
        backgroundColor: "transparent",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Menu.Item key="swap" icon={<SwapOutlined />}>
        Swap
        <Link to="/swap" />
      </Menu.Item>
      <Menu.Item key="pool" icon={<BankOutlined />}>
        Pool
        <Link to="/pool" />
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
