/** @jsx jsx */
import React from "react";
import { useService } from "@xstate/react";
import { jsx, css } from "@emotion/core";
import bg from "./../../assets/images/bg.jpg";
import { hero, overlay, heroContent } from "./style";

const button = css`
  min-width: 26px;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0fcb4d;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 600;
  border: none;
  &:hover,
  &:focus {
    background-color: #18f15f;
  }
`;

const Hero = ({ state }) => {
  const [current, send] = useService(state);

  return (
    <header
      css={css`
        ${hero};
        background-image: url(${bg});
        background-position: 50% center;
        background-size: cover;
      `}
    >
      <div css={overlay}>
        <div css={{ width: "100%", textAlign: "center" }}>
          <span>Selamat malam, fahmi</span>
          <div css={heroContent}>
            <div>
              <span>Hutang</span>
              <h2>Rp.30,000</h2>
            </div>
            <div>
              <span>Piutang</span>
              <h2>Rp.0</h2>
            </div>
          </div>
          <button css={button} onClick={() => send("ACTIVE")}>
            Tambah Transaksi
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
