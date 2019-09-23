/** @jsx jsx */
import React, { useState, Suspense, lazy } from "react";
import { jsx } from "@emotion/core";
import { aside } from "./style";
import ShortcutsBox from "components/shortcuts-box";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";
const AsideTransaction = lazy(() => import("components/aside-transaction"));

const Profile = () => {
  const [state, setState] = useState(1);
  return (
    <aside css={aside}>
      <ShortcutsBox />
      <div id="aside-content">
        <button onClick={() => setState(2)}>set two</button>
        {state === 1 ? (
          <AsideHome />
        ) : state === 2 ? (
          <Suspense fallback={<AsideLoading />}>
            <AsideTransaction />
          </Suspense>
        ) : (
          <AsideHome />
        )}
      </div>
    </aside>
  );
};

export default Profile;
