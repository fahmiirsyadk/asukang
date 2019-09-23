/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const shortcutsBox = css`
  height: inherit;
  padding: 20px 10px;
  background-color: red;
`;

const ShortcutsBox = () => {
  return <div css={shortcutsBox}>hello</div>;
};

export default ShortcutsBox;
