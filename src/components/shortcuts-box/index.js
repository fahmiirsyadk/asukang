/** @jsx jsx */
import React from "react";
import { useService } from "@xstate/react";
import { jsx, css } from "@emotion/core";
import { shortcutsBox } from "./style";

const dataShortcuts = [
  {
    title: "H",
    route: "ONE"
  },
  {
    title: "T",
    route: "TWO"
  }
];

const shorcutItem = css`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;
  color: black;
  margin: 5px 0;
`;

const ShorcutItem = ({ data, action }) => {
  return (
    <div css={shorcutItem} onClick={action}>
      <p>{data.title}</p>
    </div>
  );
};

const ShortcutsBox = ({ state }) => {
  const [current, send] = useService(state);
  return (
    <div css={shortcutsBox}>
      <div>
        {dataShortcuts.map((data, i) => (
          <ShorcutItem key={i} data={data} action={() => send(data.route)} />
        ))}
      </div>
    </div>
  );
};

export default ShortcutsBox;
