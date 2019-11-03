import React from "react";
import { overlay, overlayContent } from "./style";

const AsideOverlay = ({ children }) => {
  return (
    <div css={overlay}>
      <div css={overlayContent}>{children}</div>
    </div>
  );
};

export default AsideOverlay;
