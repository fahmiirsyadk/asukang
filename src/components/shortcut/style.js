import { css } from "@emotion/core";

export const shortcut = status => css`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${status ? "#eee" : "white"};
  cursor: pointer;
  color: black;
  margin: 5px 0 15px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
