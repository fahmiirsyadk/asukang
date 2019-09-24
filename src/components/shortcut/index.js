/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { shortcut } from "./style";

const Shortcut = ({ action, activeTab, label, onClick }) => (
  <div
    css={shortcut(activeTab === label)}
    aria-label={label}
    aria-disabled="false"
    aria-selected={activeTab === label ? "true" : "false"}
    role="tab"
    onClick={() => {
      onClick(label);
      action();
    }}
  >
    <p>{label}</p>
  </div>
);

export default Shortcut;
