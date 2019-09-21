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
  background: rgba(0, 0, 0, 0.7);
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

export const button = css`
  min-width: 26px;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0fcb4d;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 600;
  border: none;
  &:hover,
  &:focus {
    background-color: #18f15f;
  }
`;

export const buttonFull = css`
  ${button};
  padding: 10px 0;
  width: 100%;
`;

export const buttonPrimary = css`
  background-color: #e8effd;
  color: blue;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  ${borderR3};
`;

export const buttonPrimaryFull = css`
  ${buttonPrimary};
  padding: 10px 0;
  width: 100%;
  &:focus,
  &:hover {
    background-color: #cdddfb;
  }
`;

// notification box
const notificationBox = css`
  ${borderR3};
  padding: 3px;
  background-color: #333;
  font-weight: 600;
`;
export const notificationBoxRed = css`
  ${notificationBox};
  background-color: #fbd1e5;
  color: #ea5e9a;
`;
