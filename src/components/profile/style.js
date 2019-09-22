import { css } from "@emotion/core";

export const aside = css`
  height: 100vh;
  border: 1px solid #eee;
`;

export const nav = css`
  background-color: white;
  border-bottom: 1px solid #eee;
  padding: 0 15px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const profileHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2em;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const profileHeaderDetail = css`
  color: #1b2d40;
  margin: 1em 0;
  p {
    margin: 0.4em 0;
    font-size: 14px;
    color: #8291a5;
  }
`;