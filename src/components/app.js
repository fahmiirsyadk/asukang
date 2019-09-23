/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx, Global, css } from "@emotion/core";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { DataProvider } from "context/dataContext";
// import Navbar from "./navbar";
// import Hero from "./hero";
import Aside from "./aside";

const ModalTransaction = React.lazy(() => import("./modal-transaction"));

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
  min-width: 255px;
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

  return (
    <DataProvider>
      <Global styles={global} />
      {current.value === "active" ? (
        <Suspense fallback={null}>
          <ModalTransaction state={service} />
        </Suspense>
      ) : null}
      <main css={mainS}>
        <div css={[outerAside, { borderRight: "1px solid #eee" }]}>
          <Aside />
        </div>
        <div css={colomn(3)}>
          {/** <Navbar />*/}
          {/** <Hero state={service} /> */}
        </div>
      </main>
    </DataProvider>
  );
};

export default App;
