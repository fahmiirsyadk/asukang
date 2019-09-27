/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx, Global, css } from "@emotion/core";
import { useMachine } from "@xstate/react";
import { DataProvider } from "context/data.context";
import { setStorage, getStorage } from "functions/local-storage";
import { switchShortcuts } from "machines/machines";
import Hero from "components/hero";
import Aside from "components/aside";

const global = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
`;

const outerAside = css`
  ${colomn(1)};
  position: relative;
  min-width: 327px;
`;

const App = () => {
  const [currentSrc, sendSrc, serviceSrc] = useMachine(switchShortcuts);

  if (!getStorage("data")) {
    setStorage("data", []);
  } else if (!getStorage("activities")) {
    setStorage("activities", []);
  }

  const totalNominal = arr =>
    arr.reduce((val, element) => {
      return Number(val) + Number(element.hutang);
    }, 0);

  const initialState = {
    data: [],
    activities: [],
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
      default:
        return state;
    }
  };

  return (
    <DataProvider initialState={initialState} reducer={reducer}>
      <Global styles={global} />
      <main css={mainS}>
        <div css={[outerAside, { borderRight: "1px solid #eee" }]}>
          <Aside state={serviceSrc} />
        </div>
        <div css={colomn(3)}>
          <Hero state={serviceSrc} />
        </div>
      </main>
    </DataProvider>
  );
};

export default App;
