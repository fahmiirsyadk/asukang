import React, { Suspense, lazy } from "react";

import { useService } from "@xstate/react";
import { aside } from "./style";
import Shortcuts from "components/shortcuts";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";
const AsideTransaction = lazy(() => import("components/aside-transaction"));

const dataShortcuts = [
  {
    label: "Home"
  },
  {
    label: "Wishlists"
  }
];

const Profile = ({ state }) => {
  const [{ matches }, send] = useService(state);

  return (
    <aside css={aside}>
      <Shortcuts state={state} data={dataShortcuts} />
      <div id="aside-content">
        {matches("home") ? (
          <AsideHome send={send} />
        ) : matches("transaction") ? (
          <Suspense delayMs={1000} fallback={<AsideLoading />}>
            <AsideTransaction send={send} />
          </Suspense>
        ) : matches("wishlists") ? (
          <p>Not found</p>
        ) : null}
      </div>
    </aside>
  );
};

export default Profile;
