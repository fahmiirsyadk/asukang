import { css } from "@emotion/core";

export const nav = css`
  width: 100%;
  padding: 0 15px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const status = css`
  border: 2px solid #b7b7b7;
  padding: 3px 5px;
  color: #545454;
  font-weight: 600;
  font-size: 0.9em;
  border-radius: 3px;
`;

const navItemW = css``;

export const navItem = css`
  ${navItemW}
`;
