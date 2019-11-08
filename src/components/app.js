import React from "react";
import { Global, css } from "@emotion/core";
import { useMediaQuery } from "react-responsive";
import { useMachine } from "@xstate/react";
import { DataProvider } from "context/data.context";
import { getStorage } from "functions/local-storage";
import { checkLocalStorage } from "functions/transactions";
import { switchShortcuts, isNewAccount } from "machines";
import { overlay } from "./styles";
import imageHome from "assets/images/home-cover.jpg";
import Dashboard from "components/dashboard";
import Aside from "components/aside";

const global = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #1b2d40;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    label {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const mainS = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const colomn = flex => css`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${flex};
  position: relative;
`;

const outerAside = css`
  ${colomn(1.2)};
  position: relative;
  min-width: 327px;
`;

const overlayW = (state, bg) => css`
  ${overlay};
  display: ${state ? "flex" : "none"};
  user-select: none;
  z-index: 0;
  position: absolute;
  background-size: ${bg ? "cover" : "none"};
  background-image: ${bg ? `url("${imageHome}")` : "none"};
`;

const App = () => {
  const [currentMenu, , serviceMenu] = useMachine(switchShortcuts);
  const [currentAccount, , serviceAccount] = useMachine(isNewAccount);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  // side-effect
  checkLocalStorage("data");
  checkLocalStorage("activities");

  const totalNominal = arr =>
    arr.reduce((val, element) => {
      return Number(val) + Number(element.nominal);
    }, 0);

  const initialState = {
    data: [],
    activities: [],
    id: getStorage("name"),
    total: totalNominal(getStorage("data"))
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "getDataState":
        return {
          ...state,
          data: action.newData,
          total: totalNominal(action.newData)
        };
      case "getName":
        return {
          ...state,
          id: action.newData
        };
      default:
        return state;
    }
  };

  return (
    <DataProvider initialState={initialState} reducer={reducer}>
      <Global styles={global} />
      <main css={mainS}>
        <div
          css={[
            outerAside,
            {
              borderRight: "1px solid rgb(218, 220, 224)",
              backgroundColor: "white",
              zIndex: 2
            }
          ]}
        >
          <Aside menu={serviceMenu} account={serviceAccount} />
        </div>
        {!isTabletOrMobile && (
          <div css={[colomn(2.5)]}>
            <div
              css={overlayW(
                !currentMenu.matches("home") ||
                  (currentAccount.matches("new") && initialState.id === null),
                currentMenu.matches("home") &&
                  (currentAccount.matches("new") && initialState.id === null)
              )}
            ></div>
            <Dashboard />
          </div>
        )}
      </main>
    </DataProvider>
  );
};

export default App;
