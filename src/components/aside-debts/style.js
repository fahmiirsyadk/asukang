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
