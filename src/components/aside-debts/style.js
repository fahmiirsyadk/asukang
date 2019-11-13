import { css } from "@emotion/core";

export const wrapperList = css`
  height: 40vh;
  #empty {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1em;
  }
  img {
    width: 150px;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
    user-drag: none;
    height: 150px;
    object-fit: cover;
  }
  #empty-desc {
    color: #616d7d;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
`;

export const transactionList = css`
  list-style: none;
`;

export const transactionTitle = css`
  h4 {
    margin-bottom: 0.5em;
  }
  padding-bottom: 2em;
`;

export const subTitle = css`
  margin: 5px 0;
  display: inline-block;
  color: #626b71;
  font-size: 14px;
  font-weight: 500;
`;

export const transactionItem = css`
  margin: 10px 0;
  h5 {
    margin-bottom: 1em;
  }
`;
