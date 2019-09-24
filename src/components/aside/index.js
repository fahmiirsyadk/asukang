/** @jsx jsx */
import React, { Suspense, lazy } from "react";
import { jsx } from "@emotion/core";
import { useService } from "@xstate/react";
import { aside } from "./style";
import Shortcuts from "components/shortcuts";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";
const AsideTransaction = lazy(() => import("components/aside-transaction"));

const Profile = ({ state }) => {
  const [{ matches }, send] = useService(state);

  return (
    <aside css={aside}>
      <Shortcuts state={state}>
        <div label="Home">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Transaction">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Wishlists">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Shortcuts>
      <div id="aside-content">
        {matches("home") ? (
          <AsideHome />
        ) : matches("transaction") ? (
          <Suspense fallback={<AsideLoading />}>
            <AsideTransaction />
          </Suspense>
        ) : matches("wishlists") ? (
          <p>Not found</p>
        ) : null}
      </div>
    </aside>
  );
};

export default Profile;
