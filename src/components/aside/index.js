/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { aside } from "./style";
import ShortcutsBox from "components/shortcuts-box";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";

const Profile = () => {
  return (
    <aside css={aside}>
      <ShortcutsBox />
      <div id="aside-content">
        <AsideHome />
      </div>
    </aside>
  );
};

export default Profile;
