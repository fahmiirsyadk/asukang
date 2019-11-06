import { css } from "@emotion/core";

export const review = css`
  padding-top: 3em;
  h1,
  h4,
  h5 {
    margin: 14px 0;
  }
  h1 {
    font-size: 2em;
  }
  h6 {
    color: #616d7d;
  }
`;

export const reviewDesc = css`
  padding: 10px;
  border-radius: 3px;
  background-color: #f1f1f1;
  font-weight: 600;
  margin: 14px 0;
  display: flex;
  min-width: auto;
  max-width: max-content;
  word-break: break-word;
  align-items: center;
  justify-content: left;
  img {
    width: 16px;
  }
  p {
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const reviewBtn = css`
  padding-top: 2em;
  button {
    margin: 0px 0 10px 0;
  }
`;
