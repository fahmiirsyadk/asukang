import React, { useState, Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import iconHome from "assets/images/home.png";
import iconWishlist from "assets/images/wishlist.png";

import { useService } from "@xstate/react";
import { buttonPrimary } from "components/styles";
import { aside } from "./style";
import uuid from "functions/uuid";
import { getStorage, setStorage } from "functions/local-storage";
import { useDataValue } from "context/data.context";
import Shortcuts from "components/shortcuts";
import AsideOverlay from "components/aside-overlay";
import AsideLoading from "components/aside-loading";
import AsideHome from "components/aside-home";
import NotFound from "components/not-found";
const AsideTransaction = lazy(() => import("components/aside-transaction"));
const AsideDebts = lazy(() => import("components/aside-debts"));

const dataShortcuts = [
  {
    label: "Home",
    icon: iconHome
  },
  {
    label: "Wishlists",
    icon: iconWishlist
  },
  {
    label: "debts",
    icon: iconWishlist
  }
];

const Profile = ({ state }) => {
  const [{ matches }, send] = useService(state);
  const [uniq, setUniq] = useState(getStorage("id"));
  const [name, setName] = useState("");
  const [, dispatch] = useDataValue();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const setUUID = () => {
    const id = uuid(name);
    if (name.length > 0) {
      setStorage("id", id);
      setStorage("name", name);
      setUniq(getStorage("id"));
      dispatch({
        type: "getName",
        newData: name
      });
    }
  };

  return (
    <aside css={aside}>
      <Shortcuts
        state={state}
        data={dataShortcuts}
        mobile={!isTabletOrMobile}
      />
      <div id="aside-content">
        {uniq === null ? (
          <AsideOverlay>
            <h1>HELLO</h1>
            <input inputMode="text" onChange={e => setName(e.target.value)} />
            <div>
              <button css={buttonPrimary} onClick={setUUID}>
                MULAI >
              </button>
            </div>
          </AsideOverlay>
        ) : null}
        {matches("home") ? (
          <AsideHome send={send} />
        ) : matches("transaction") ? (
          <Suspense fallback={<AsideLoading />}>
            <AsideTransaction send={send} />
          </Suspense>
        ) : matches("wishlists") ? (
          <NotFound />
        ) : matches("debts") ? (
          <Suspense fallback={<AsideLoading />}>
            <AsideDebts send={send} />
          </Suspense>
        ) : null}
      </div>
    </aside>
  );
};

export default Profile;
