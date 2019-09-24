import { css } from "@emotion/core";

export const shortcut = status => css`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;
  color: black;
  margin: 5px 0;
  user-select: none;
  border: ${status ? "1px solid blue" : "1px solid transparent"};
`;
