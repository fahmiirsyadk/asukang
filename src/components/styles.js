import { css } from "@emotion/core";

const primaryColor = "#1074e7";
const darkenPrimaryColor = "#0366d6";

// layout
export const flex = css`
  display: flex;
  align-items: center;
`;

export const flexSpace = css`
  ${flex};
  justify-content: space-between;
`;

export const borderR3 = css`
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

export const labelInput = css`
  margin: 5px 0;
  display: inline-block;
  color: #3c454c;
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

export const textarea = css`
  ${input};
  resize: none;
`;

export const button = css`
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  transition: 0.2s;
  font-weight: 600;
  cursor: pointer;
  ${borderR3};
`;

export const buttonPrimary = css`
  ${button};
  background-color: ${primaryColor};
  color: white;
  &:focus,
  &:hover {
    background-color: ${darkenPrimaryColor};
  }
`;

export const buttonPrimaryG = css`
  ${buttonPrimary};
  background-color: white;
  color: ${primaryColor};
  border: 2px solid ${primaryColor};
  &:focus,
  &:hover {
    background-color: white;
    border: 2px solid ${darkenPrimaryColor};
  }
`;

export const buttonPrimaryFull = css`
  ${buttonPrimary};
  padding: 10px 0;
  width: 100%;
`;

export const buttonPrimaryGFull = css`
  ${buttonPrimaryG};
  padding: 10px 0;
  width: 100%;
`;

// notification box
const notificationBox = css`
  ${borderR3};
  padding: 3px 5px;
  background-color: #333;
  font-weight: 600;
  font-size: 14px;
`;
export const notificationBoxRed = css`
  ${notificationBox};
  background-color: #fbd1e5;
  color: #ea5e9a;
`;

export const notificationBoxGreen = css`
  ${notificationBox};
  background-color: #bffaff;
  color: #166e75;
`;

// radio button
export const radioGroup = css`
  input {
    width: 32px;
    height: 32px;
    order: 1;
    z-index: 1;
    position: absolute;
    right: 30px;
    top: 50%;
    cursor: pointer;
    visibility: hidden;
  }
  label {
    border: 2px solid transparent;
    width: 100%;
    display: block;
    text-align: left;
    padding: 10px 0;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: color 200ms ease-in;
    overflow: hidden;

    &:before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      opacity: 0;
      z-index: -1;
    }

    &:after {
      width: 15px;
      height: 15px;
      content: "";
      border: 2px solid #d1d7dc;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 2px 3px;
      border-radius: 50%;
      z-index: 1;
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
    }
  }

  input:checked ~ label {
    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }

    &:after {
      background-color: #49d3b4;
      border-color: #49d3b4;
    }
  }
`;

export const spanSearchBox = css`
  position: absolute;
  z-index: 1;
  display: block;
  width: 0.8rem;
  margin-left: 0.5em;
  height: 0.8rem;
  line-height: 2.2rem;
  text-align: center;
  pointer-events: none;
  color: #999;
`;
