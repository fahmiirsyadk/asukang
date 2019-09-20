/** @jsx jsx */
import React from "react";
import { useService } from "@xstate/react";
import { jsx, css } from "@emotion/core";
import bg from "assets/images/bg.jpg";
import { hero, overlay, heroContent } from "./style";
import { button } from "components/styles";
import useData from "functions/useData";

const Hero = ({ state }) => {
  const [current, send] = useService(state);
  const { totalNominal } = useData();

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
              <h2>Rp.{totalNominal}</h2>
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
