/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx, Global, css } from "@emotion/core";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import Navbar from "./navbar";
import Hero from "./hero";
import Activities from "./activities";
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
    <>
      <Global styles={global} />
      {current.value === "active" ? (
        <Suspense fallback={null}>
          <ModalTransaction state={service} />
        </Suspense>
      ) : null}
      <main css={mainS}>
        <div css={colomn(1)}>
          <Activities />
        </div>
        <div css={colomn(4)}>
          <Navbar />
          <Hero state={service} />
        </div>
      </main>
    </>
  );
};

export default App;
