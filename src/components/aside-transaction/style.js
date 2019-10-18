import { css } from "@emotion/core";

export const overlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
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

export const wrapperList = css`
  height: 40vh;
`;

export const spanSearchBox = css`
  position: absolute;
  z-index: 2;
  display: block;
  width: 0.8rem;
  margin-left: 0.5em;
  height: 0.8rem;
  line-height: 2.2rem;
  text-align: center;
  pointer-events: none;
  color: #999;
`;

export const wrapperBtn = css`
  padding-top: 10px;
  button {
    margin: 0px 0 10px 0;
  }
`;
