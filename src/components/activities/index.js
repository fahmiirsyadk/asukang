/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { activities, activityItem } from "./style";
import { flexSpace, notificationBoxRed } from "components/styles";

const Activities = ({ data }) => (
  <div css={activities}>
    <span>Activities</span>
    {data().map(({ type, target, nominal, date }, i) => (
      <div css={activityItem} key={i}>
        <div css={flexSpace}>
          <span css={notificationBoxRed}>{type}</span>
          <span css={{ fontSize: "14px", color: "#8291a5" }}>{date}</span>
        </div>
        <p>
          Anda telah ber{type.toLowerCase()} kepada <strong>{target}</strong>{" "}
          sejumlah{" "}
          <b>
            Rp.
            {nominal}
          </b>
          .
        </p>
      </div>
    ))}
  </div>
);

export default Activities;
