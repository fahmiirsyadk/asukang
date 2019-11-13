import React, { useContext } from "react";
import imgNew from "assets/images/new.png";
import { profileHeader, profileHeaderDetail } from "./style";
import { DataContext } from "context/data.context";
import {
  buttonPrimaryFull,
  buttonPrimaryGFull,
  wrapperBtn
} from "components/styles";

const AsideHome = ({ send }) => {
  const [{ id }] = useContext(DataContext);

  return (
    <div css={profileHeader}>
      <div css={{ textAlign: "center", width: "100%" }}>
        <div css={profileHeaderDetail}>
          <img src={imgNew} alt="ilustrasi_gambar" />
          <h4>Asukang App</h4>
          <p>Welcome, {id}.</p>
        </div>
        <div css={wrapperBtn}>
          <button css={buttonPrimaryFull} onClick={() => send("TRANSACTION")}>
            Buat pembayaran
          </button>
          <button css={buttonPrimaryGFull}>Terima pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default AsideHome;
