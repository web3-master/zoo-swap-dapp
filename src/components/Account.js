import { Button } from "antd";
import { WalletOutlined } from "@ant-design/icons";

const Account = () => {
  const onConnect = () => {};

  return (
    <Button icon={<WalletOutlined />} onClick={onConnect}>
      Connect
    </Button>
  );
};

export default Account;
