import { css } from "@emotion/core";

export const overlay = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modal = css`
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 12px 0 rgba(0, 0, 0, 0.02) !important;
  background-color: #fff;
  padding: 8px;
  z-index: 3;
  width: 500px;
  height: auto;
`;
