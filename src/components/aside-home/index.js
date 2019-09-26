/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import profile from "assets/images/profile.jpg";
import { profileHeader, profileHeaderDetail } from "./style";
import { buttonPrimaryFull } from "components/styles";

const AsideHome = ({ send }) => {
  return (
    <div css={profileHeader}>
      <div css={{ textAlign: "center", width: "100%" }}>
        <img src={profile} alt="profile-img" />
        <div css={profileHeaderDetail}>
          <h4>Asukang App</h4>
          <p>Welcome back, Guest.</p>
        </div>
        <button css={buttonPrimaryFull} onClick={() => send("TRANSACTION")}>
          + New Transaction
        </button>
      </div>
    </div>
  );
};

export default AsideHome;
