import React, { useState, Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import iconHome from "assets/images/home.png";
import iconWishlist from "assets/images/wishlist.png";

import { useService } from "@xstate/react";
import { buttonPrimaryFull, input, labelInput } from "components/styles";
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

const Profile = ({ menu, account }) => {
  const [{ matches }, send] = useService(menu);
  const [, sendAccount] = useService(account);
  const [uniq, setUniq] = useState(getStorage("id"));
  const [name, setName] = useState("");
  const [, dispatch] = useDataValue();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const setUUID = () => {
    const id = uuid();
    if (name.length > 0) {
      setStorage("id", id);
      setStorage("name", name);
      setUniq(getStorage("id"));
      dispatch({
        type: "getName",
        newData: name
      });
      sendAccount("REGISTER");
    }
  };

  return (
    <aside css={aside}>
      <Shortcuts state={menu} data={dataShortcuts} mobile={!isTabletOrMobile} />
      <div id="aside-content">
        {uniq === null ? (
          <AsideOverlay>
            <div css={{ textAlign: "left !important" }}>
              <h1>Selamat datang di Asukang App</h1>
              <p>Catat utang dan piutang dengan mudah.</p>
              <label htmlFor="initial_name" css={labelInput}>
                Nama lengkap:{" "}
              </label>
              <input
                id="initial_name"
                css={input}
                inputMode="text"
                placeholder="Eg: Fahmi irsyad khairi"
                onChange={e => setName(e.target.value)}
              />
              <br />
              <div>
                <button css={buttonPrimaryFull} onClick={setUUID}>
                  Mulai Sekarang
                </button>
              </div>
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
