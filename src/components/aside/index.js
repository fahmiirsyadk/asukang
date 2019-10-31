import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import iconHome from "assets/images/home.png";
import iconWishlist from "assets/images/wishlist.png";

import { useService } from "@xstate/react";
import { aside } from "./style";
import Shortcuts from "components/shortcuts";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";
import NotFound from "components/not-found";
const AsideTransaction = lazy(() => import("components/aside-transaction"));

const dataShortcuts = [
  {
    label: "Home",
    icon: iconHome
  },
  {
    label: "Wishlists",
    icon: iconWishlist
  }
];

const Profile = ({ state }) => {
  const [{ matches }, send] = useService(state);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <aside css={aside}>
      {isDesktopOrLaptop && (
        <Shortcuts
          state={state}
          data={dataShortcuts}
          mobile={!isTabletOrMobile}
        />
      )}

      <div id="aside-content">
        {matches("home") ? (
          <AsideHome send={send} />
        ) : matches("transaction") ? (
          <Suspense delayMs={1000} fallback={<AsideLoading />}>
            <AsideTransaction send={send} />
          </Suspense>
        ) : matches("wishlists") ? (
          <NotFound />
        ) : null}
      </div>
    </aside>
  );
};

export default Profile;
