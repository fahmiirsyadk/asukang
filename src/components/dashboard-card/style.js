import { css } from "@emotion/core";
import { borderR3 } from "components/styles";

export const card = (bg, color) => css`
  ${borderR3};
  padding: 15px 20px;
  background-color: ${bg};
  color: ${color};
  margin: 5px;
  min-width: 150px;
  max-width: 300px;
`;

export const cardContent = css`
  height: 100px;
`;
