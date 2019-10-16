import { css } from "@emotion/core";

export const listWrapper = css`
  padding: 10px 0;
  div {
    h4 {
      width: 77%;
      font-weight: 500;
      font-size: 0.9em;
      margin-bottom: 0.8em;
    }
    p {
      font-weight: bold;
    }
    margin-bottom: 5px;
    cursor: pointer;
    padding: 8px 0.5em;
    border-radius: 3px;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ecf1ff;
    }
  }
`;

export const badge = css`
  position: absolute;
  right: 0.5em;
  font-size: 12px;
`;
