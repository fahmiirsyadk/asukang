/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Machine } from "xstate";
import { useMachine, useService } from "@xstate/react";
import { overlay, modal } from "./style";

const transactionStep = Machine({
  id: "transactionStep",
  initial: "one",
  states: {
    one: {
      on: {
        TWO: "two"
      }
    },
    two: {
      on: {
        SUCCESS: "success"
      }
    },
    success: {
      type: "final"
    }
  }
});

const modalChange = (state, send, sendModal) => {
  switch (state) {
    case "one":
      return (
        <div>
          one
          <button onClick={() => send("TWO")}>go two</button>
        </div>
      );
    case "two":
      return (
        <div>
          two
          <button onClick={() => send("SUCCESS")}>go three</button>
        </div>
      );
    case "success":
      return (
        <div>
          done !!!
          <button
            onClick={() => {
              sendModal("INACTIVE");
            }}
          >
            Close
          </button>
        </div>
      );
    default:
      return null;
  }
};

const ModalTransition = ({ state }) => {
  const [{ value }, send] = useMachine(transactionStep);
  const [currentModal, sendModal] = useService(state);

  return (
    <div css={overlay}>
      <div css={modal}>{modalChange(value, send, sendModal)}</div>
    </div>
  );
};

export default ModalTransition;
