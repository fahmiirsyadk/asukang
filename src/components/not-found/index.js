import React from "react";
import { css } from "@emotion/core";
import imgNotFound from "assets/images/error.png";

const outerWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2em;
`;

const wrapper = css`
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

const notFound = () => (
  <div css={outerWrapper}>
    <div css={wrapper}>
      <div id="empty">
        <img
          css={{ width: 50 }}
          src={imgNotFound}
          alt="ilustrasi_data_kosong"
        />
      </div>
      <p id="empty-desc">Oops, komponen tidak ditemukan</p>
    </div>
  </div>
);

export default notFound;
