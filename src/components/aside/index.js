/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { aside, profileHeader, profileHeaderDetail } from "./style";
import { buttonPrimaryFull } from "components/styles";
import profile from "assets/images/profile.jpg";
import ShortcutsBox from "components/shortcuts-box";

const Profile = () => {
  return (
    <aside css={aside}>
      <ShortcutsBox />
      <div>
        <div css={profileHeader}>
          <div css={{ textAlign: "center", width: "100%" }}>
            <img src={profile} alt="profile-img" />
            <div css={profileHeaderDetail}>
              <h4>Asukang App</h4>
              <p>Welcome back, Guest.</p>
            </div>
            <button css={buttonPrimaryFull}>Edit Profile</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Profile;

// <>
// <aside css={aside}>
//   <ShortcutsBox />
//   <div style={{ position: "relative", width: "19.9%" }}>

//   </div>
// </aside>
// </>
