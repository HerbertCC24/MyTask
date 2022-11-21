import { Form, Input } from "antd-mobile";
import { ping, qryLogin, restfulLogin, json } from "../utils/request";
import { BottomButton } from "./components/bottomButton";
const request = async () => {
  const msg = await ping();
};
const login = async (values: any) => {
  const msg = await qryLogin(values);
  const msgRestful = await restfulLogin(values);
  await json(values);
};

export default () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    const values = form.getFieldsValue(true);
    login(values);
  };
  return (
    <div className="bg">
      <Form
        layout="horizontal"
        mode="card"
        form={form}
        footer={<BottomButton onSubmit={onSubmit} request={request} />}
      >
        <Form.Header>卡片模式及分组</Form.Header>
        <Form.Item name="username" label="用户名">
          <Input placeholder="请输入用户名" clearable />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input placeholder="请输入密码" clearable type="password" />
        </Form.Item>
      </Form>
      <style global jsx>{`
        * {
          margin: 0;
        }
        html {
          padding: 0;
          margin: 0;
        }
        body {
          margin-top: -8px;
        }
      `}</style>
      <style jsx>
        {`
          .bg {
            height: 100vh;
            background: #eee;
          }
        `}
      </style>
    </div>
  );
};
