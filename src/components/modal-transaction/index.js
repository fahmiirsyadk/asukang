/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { useMachine, useService } from "@xstate/react";
import useData from "functions/useData";
import { transactionStep } from "machines/machines";
import { overlay, modal, input, buttonFull } from "components/styles";
import { dataHutang } from "data/dump";
import ListName from "./list";

const ModalTransition = ({ state }) => {
  const [current, send] = useMachine(transactionStep);
  const [currentModal, sendModal] = useService(state);
  const [name, setName] = useState("");
  const [nominal, setNominal] = useState(0);
  const { toggle } = useData();

  const filteredName = dataHutang.filter(data =>
    data.name.toLowerCase().includes(name.toLowerCase())
  );

  const onChangeNominal = e => {
    e.target.validity.valid && e.target.value >= 0
      ? setNominal(e.target.value)
      : setNominal("");
  };

  const submitData = e => {
    e.preventDefault();
    const dataForm = { name: name, hutang: Number(nominal) };
    const data = localStorage.getItem("data");

    if (data) {
      const parsedData = JSON.parse(data);
      localStorage.setItem("data", JSON.stringify([...parsedData, dataForm]));
      toggle(dataForm);
    } else {
      localStorage.setItem("data", JSON.stringify([dataForm]));
    }
  };

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
            <ListName filteredName={filteredName} />
            <button css={buttonFull} onClick={() => send("TWO")}>
              go two
            </button>
          </div>
        ) : current.matches("two") ? (
          <div>
            <h3>{nominal !== "" ? nominal : 0}</h3>
            <input
              type="text"
              pattern="[0-9]*"
              onChange={onChangeNominal}
              value={nominal}
              autoFocus
            />
            <button css={buttonFull} onClick={() => send("SUCCESS")}>
              go three
            </button>
          </div>
        ) : current.matches("success") ? (
          <div>
            done !!!
            <button
              css={buttonFull}
              onClick={e => {
                submitData(e);
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
