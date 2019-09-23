/** @jsx jsx */
import React, { Suspense, lazy } from "react";
import { jsx } from "@emotion/core";
import { useService } from "@xstate/react";
import { aside } from "./style";
import ShortcutsBox from "components/shortcuts-box";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";
const AsideTransaction = lazy(() => import("components/aside-transaction"));

const Profile = ({ state }) => {
  const [{ matches }, send] = useService(state);

  return (
    <aside css={aside}>
      <ShortcutsBox state={state} />
      <div id="aside-content">
        {matches("one") ? (
          <AsideHome />
        ) : matches("two") ? (
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
