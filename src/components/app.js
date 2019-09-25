/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx, Global, css } from "@emotion/core";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { DataProvider } from "context/dataContext";
import { switchShortcuts } from "machines/machines";
import Aside from "./aside";

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

const toggleModal = Machine({
  id: "modal",
  initial: "inactive",
  states: {
    active: {
      on: {
        INACTIVE: "inactive"
      }
    },
    inactive: {
      on: {
        ACTIVE: "active"
      }
    }
  }
});

const App = () => {
  const [current, send, service] = useMachine(toggleModal);
  const [currentSrc, sendSrc, serviceSrc] = useMachine(switchShortcuts);

  return (
    <DataProvider>
      <Global styles={global} />
      <main css={mainS}>
        <div css={[outerAside, { borderRight: "1px solid #eee" }]}>
          <Aside state={serviceSrc} />
        </div>
        <div css={colomn(3)}></div>
      </main>
    </DataProvider>
  );
};

export default App;
