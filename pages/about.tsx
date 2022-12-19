import { NavBar } from "antd-mobile";
import Router from "next/router";
import { DemoBlock } from "../component/demoBlock";
const back = () => {
  Router.back();
};

export default () => {
  return (
    <>
      <DemoBlock padding="10px">
        <NavBar back="返回" onBack={back}>
          关于
        </NavBar>
      </DemoBlock>
      About
    </>
  );
};
