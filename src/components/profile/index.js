/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { aside, nav, activityItem } from "./style";
import {
  buttonPrimaryFull,
  notificationBoxRed,
  flexSpace
} from "components/styles";
import profile from "assets/images/profile.jpg";
import useData from "functions/useData";

const profileHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2em;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const profileHeaderDetail = css`
  color: #1b2d40;
  margin: 1em 0;
  p {
    margin: 0.4em 0;
    font-size: 14px;
    color: #8291a5;
  }
`;

const activities = css`
  padding: 1em;
  color: #1b2d40;
  span {
    font-weight: 600;
  }
`;

const Profile = () => {
  const { getActivities } = useData();
  return (
    <aside css={aside}>
      <div>
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
        <div css={activities}>
          <span>activities</span>
          {getActivities().map(({ type, target, nominal, date }, i) => (
            <div css={activityItem} key={i}>
              <div css={flexSpace}>
                <span css={notificationBoxRed}>{type}</span>
                <span css={{ fontSize: "14px", color: "#8291a5" }}>{date}</span>
              </div>
              <p>
                Anda telah ber{type.toLowerCase()} kepada{" "}
                <strong>{target}</strong> sejumlah{" "}
                <b>
                  Rp.
                  {nominal}
                </b>
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

// from A

export default Profile;
