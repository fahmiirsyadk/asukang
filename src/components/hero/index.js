import React, { useContext } from "react";
import { useService } from "@xstate/react";
import { overlay, heroContent } from "./style";
import { button } from "components/styles";
import { DataContext } from "context/data.context";

const Hero = ({ state }) => {
  const [current, send] = useService(state);
  const [{ total }] = useContext(DataContext);

  return (
    <header>
      <div css={overlay}>
        <div css={{ width: "100%", textAlign: "center" }}>
          <span>Selamat malam, fahmi</span>
          <div css={heroContent}>
            <div>
              <span>Hutang</span>
              <h2>Rp.{total > 0 ? total : 0}</h2>
            </div>
            <div>
              <span>Piutang</span>
              <h2>Rp.{total < 0 ? Math.abs(total) : 0}</h2>
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
