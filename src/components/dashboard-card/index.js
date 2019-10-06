/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { card, cardContent } from "./style";

const DashboardCard = ({ bg, color, title, children }) => (
  <div css={card(bg, color)}>
    <h3>{title}</h3>
    <div css={cardContent}>{children}</div>
  </div>
);

export default DashboardCard;
