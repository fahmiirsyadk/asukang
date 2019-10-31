import { css } from "@emotion/core";

export const shortcuts = css`
  background-color: white;
  color: white;
  height: inherit;
  padding: 20px 10px;
  border-right: 1px solid rgb(218, 220, 224);
`;

export const shortcuts__mobile = css`
  ${shortcuts};
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  border-top: 1px solid #eee;

  div[role="tab"] {
    margin-right: 5px;
  }
`;
