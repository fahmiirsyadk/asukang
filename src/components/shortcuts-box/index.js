/** @jsx jsx */
import React, { useState } from "react";
import { useService } from "@xstate/react";
import { jsx, css } from "@emotion/core";
import { shortcutsBox } from "./style";

const shorcutItem = css`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;
  color: black;
  margin: 5px 0;
`;

const ShorcutItem = ({ action, activeTab, label, onClick }) => {
  return (
    <div
      css={shorcutItem}
      onClick={() => {
        onClick(label);
        action();
      }}
    >
      <p>
        {label} - {activeTab === label ? "y" : "n"}
      </p>
    </div>
  );
};

const ShortcutsBox = ({ state, children }) => {
  const [current, send] = useService(state);
  const [active, setActive] = useState(children[0].props.label);

  const onClickShortcutItem = tab => {
    setActive(tab);
  };

  return (
    <div css={shortcutsBox}>
      <div>
        {children.map(child => {
          const { label } = child.props;
          return (
            <ShorcutItem
              activeTab={active}
              key={label}
              label={label}
              onClick={onClickShortcutItem}
              action={() => send(String(label).toUpperCase())}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShortcutsBox;
