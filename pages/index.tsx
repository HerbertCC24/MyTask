import { Button, Dialog, Form, Input, Space } from "antd-mobile";
// import { json } from "stream/consumers";
import { ping, qryLogin, restfulLogin, json } from "../utils/request";
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
        footer={
          <div className="btns">
            <div className="btn">
              <Button block color="primary" fill="solid" onClick={onSubmit}>
                登录
              </Button>
            </div>
            <div className="btn">
              <Button block color="primary" fill="outline" onClick={request}>
                注册
              </Button>
            </div>
          </div>
        }
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
          .btns {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .btn {
            margin: 0 4px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};
