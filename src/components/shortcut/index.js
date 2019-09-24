/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { shortcut } from "./style";

const Shortcut = ({ action, activeTab, label, onClick }) => (
  <div
    css={shortcut}
    onClick={() => {
      onClick(label);
      action();
    }}
  >
    <p>
      {label} - {activeTab === label ? "y" : "n"}
    </p>
  </div>
);

export default Shortcut;
