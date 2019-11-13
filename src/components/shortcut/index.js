import React from "react";

import { shortcut } from "./style";

const Shortcut = ({ action, activeTab, label, onClick, icon }) => (
  <div
    css={shortcut(activeTab === label)}
    aria-label={label}
    aria-disabled="false"
    aria-selected={activeTab === label ? "true" : "false"}
    onClick={() => {
      onClick(label);
      action();
    }}
  >
    <img src={icon} alt={label} />
  </div>
);

export default Shortcut;
