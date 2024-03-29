import { css } from "@emotion/core";

export const profileHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  background-color: white;
  padding: 2em;
  width: inherit;
  min-width: 255px;
  img {
    width: 100px;
    user-drag: none;
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
    color: #616d7d;
  }
`;
