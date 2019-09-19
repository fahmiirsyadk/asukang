/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { useMachine, useService } from "@xstate/react";
import { transactionStep } from "machines/machines";
import { overlay, modal, input, buttonFull } from "components/styles";
import { dataHutang } from "data/dump";

const ModalTransition = ({ state }) => {
  const [current, send] = useMachine(transactionStep);
  const [currentModal, sendModal] = useService(state);
  const [name, setName] = useState("");

  const filteredName = dataHutang.filter(data =>
    data.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div css={overlay}>
      <div css={modal}>
        {current.matches("one") ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Masukkan nama tujuan"
              css={input}
              autoFocus
            />
            <div>
              {filteredName.map(data => (
                <div key={data.id}>
                  <h4>{data.name}</h4>
                  <p>{data.hutang}</p>
                </div>
              ))}
            </div>
            <button css={buttonFull} onClick={() => send("TWO")}>
              go two
            </button>
          </div>
        ) : current.matches("two") ? (
          <div>
            two
            <button css={buttonFull} onClick={() => send("SUCCESS")}>
              go three
            </button>
          </div>
        ) : current.matches("success") ? (
          <div>
            done !!!
            <button
              css={buttonFull}
              onClick={() => {
                sendModal("INACTIVE");
              }}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ModalTransition;