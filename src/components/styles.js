import { css } from "@emotion/core";

const borderR3 = css`
  border-radius: 3px;
`;

export const overlay = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
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
  ${borderR3};
`;

// input
export const input = css`
  ${borderR3};
  display: block;
  width: 100%;
  line-height: 1.25;
  padding: 7px 8px;
  font-size: 14px;
  color: #2e2f30;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  &:focus {
    color: #2e2f30;
    border-color: #5d91ff;
    outline: none;
  }
`;
