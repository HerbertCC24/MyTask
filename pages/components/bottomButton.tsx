import { Button } from "antd-mobile";

export const BottomButton = (props) => {
  return (
    <>
      <div className="btns">
        <div className="btn">
          <Button block color="primary" fill="solid" onClick={props.onSubmit}>
            登录
          </Button>
        </div>
        <div className="btn">
          <Button block color="primary" fill="outline" onClick={props.request}>
            注册
          </Button>
        </div>
      </div>
    </>
  );
};
