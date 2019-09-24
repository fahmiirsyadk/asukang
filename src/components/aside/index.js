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
      <ShortcutsBox>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </ShortcutsBox>
      <div id="aside-content"></div>
    </aside>
  );
};

export default Profile;

// {matches("one") ? (
//   <AsideHome />
// ) : matches("two") ? (
//   <Suspense fallback={<AsideLoading />}>
//     <AsideTransaction />
//   </Suspense>
// ) : (
//   <AsideHome />
// )}
