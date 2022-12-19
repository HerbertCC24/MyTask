import { Button } from "antd-mobile";
import React from "react";
import { LocaleContext } from "../pages";

export const BottomButton = (props) => {
  const locale = React.useContext(LocaleContext);
  return (
    <>
      <div className="btns">
        <div className="btn">
          <Button block color="primary" fill="solid" onClick={props.onSubmit}>
            {locale.login}
          </Button>
        </div>
        <div className="btn">
          <Button block color="primary" fill="outline" onClick={props.request}>
            {locale.signIn}
          </Button>
        </div>
      </div>
      <style jsx>
        {`
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
    </>
  );
};
