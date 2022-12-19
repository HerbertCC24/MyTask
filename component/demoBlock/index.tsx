import React, { FC } from "react";

interface Props {
  title?: string;
  padding?: string;
  background?: string;
  children?: React.ReactNode;
}

export const DemoBlock: FC<Props> = (props) => {
  return (
    <>
      <div className="demoBlock">
        {props.title && <div className="title">{props.title}</div>}
        <div
          className="main"
          style={{
            padding: props.padding,
            background: props.background,
          }}
        >
          {props.children}
        </div>
      </div>
      <style jsx>
        {`
          .demoBlock {
            margin-bottom: 12px;
          }

          .title {
            padding: 12px 12px 8px;
            color: #697b8c;
            font-size: 14px;
          }

          .main {
            border-right: none;
            border-left: none;
          }
        `}
      </style>
    </>
  );
};

DemoBlock.defaultProps = {
  padding: "12px 12px",
  background: "var(--adm-color-background)",
};
