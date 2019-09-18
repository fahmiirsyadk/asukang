/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { nav, navItem, status } from "./style";

const Navbar = () => {
  return (
    <nav css={nav}>
      <div css={navItem}>
        <span css={status}>Offline</span>
      </div>
      <div css={navItem}>
        <h3>Asukang.app</h3>
      </div>
      <div css={navItem}>
        <div>Setting</div>
      </div>
    </nav>
  );
};

export default Navbar;
