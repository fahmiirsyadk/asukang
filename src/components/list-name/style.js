import { css } from "@emotion/core";

export const listWrapper = css`
  padding: 10px 0;
  div {
    margin-bottom: 5px;
    cursor: pointer;
    padding: 8px 1.7em;
    border-radius: 3px;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ecf1ff;
    }
  }
`;
