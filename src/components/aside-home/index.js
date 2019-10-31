import React from "react";
import imgNew from "assets/images/new.png";
import { profileHeader, profileHeaderDetail } from "./style";
import { buttonPrimaryFull } from "components/styles";

const AsideHome = ({ send }) => {
  return (
    <div css={profileHeader}>
      <div css={{ textAlign: "center", width: "100%" }}>
        <div css={profileHeaderDetail}>
          <img src={imgNew} alt="ilustrasi_gambar" />
          <h4>Asukang App</h4>
          <p>Catat utang dan piutang dengan mudah dan aman.</p>
        </div>
        <button css={buttonPrimaryFull} onClick={() => send("TRANSACTION")}>
          + New Transaction
        </button>
      </div>
    </div>
  );
};

export default AsideHome;
