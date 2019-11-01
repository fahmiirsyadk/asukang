import { css } from "@emotion/core";

export const overlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const overlayContent = css`
  padding: 20px;
  text-align: center;
  p {
    font-size: 14px;
    margin: 10px 0;
    color: #8291a5;
  }
  button {
    margin-bottom: 10px;
  }
`;
