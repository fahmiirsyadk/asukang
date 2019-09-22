/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { aside, profileHeader, profileHeaderDetail } from "./style";
import { buttonPrimaryFull } from "components/styles";
import Activities from "components/activities";
import profile from "assets/images/profile.jpg";
import useData from "functions/useData";

const Profile = () => {
  const { getActivities } = useData();
  return (
    <aside css={aside}>
      <div style={{ position: "relative", width: "19.9%" }}>
        <div css={profileHeader}>
          <div css={{ textAlign: "center", width: "100%" }}>
            <img src={profile} alt="profile-img" />
            <div css={profileHeaderDetail}>
              <h4>Fahmi Irsyad Khairi</h4>
              <p>vertified account</p>
            </div>
            <button css={buttonPrimaryFull}>Edit Profile</button>
          </div>
        </div>
      </div>
      <Activities data={getActivities} />
    </aside>
  );
};

export default Profile;
