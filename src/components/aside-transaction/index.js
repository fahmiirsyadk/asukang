/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { useMachine } from "@xstate/react";
import {
  input,
  buttonPrimaryFull,
  buttonPrimaryGFull,
  radioGroup
} from "components/styles";
import { getStorage } from "functions/local-storage";
import {
  sendDataTransaction,
  sendDataActivities,
  filteredName
} from "functions/transactions";
import { transactionFlow } from "machines/machines";
import { useDataValue } from "context/data.context";
import ListName from "components/list-name";
import { wrapperList, wrapperBtn, overlay, overlayContent } from "./style";

const AsideTransaction = props => {
  const [name, setName] = useState("");
  const [nominal, setNominal] = useState(0);
  const [current, send] = useMachine(transactionFlow);
  const [, dispatch] = useDataValue();
  const getData = getStorage("data");
  const filtered = filteredName(name);

  const onChangeNominal = e => {
    e.target.validity.valid && e.target.value >= 0
      ? setNominal(e.target.value)
      : setNominal("");
  };

  const submitData = e => {
    e.preventDefault();
    const date = new Date();
    const dataForm = {
      name: name,
      hutang: Number(nominal),
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    };

    if (filtered.length > 0) {
      const newNominal = filtered[0].hutang + dataForm.hutang;
      const dataMutated = getData.filter(el => el.name !== filtered[0].name);
      const final = [...dataMutated, { ...dataForm, hutang: newNominal }];
      dispatch({
        type: "getDataState",
        newData: final
      });
      sendDataTransaction(final);
    } else {
      dispatch({
        type: "getDataState",
        newData: [...getData, dataForm]
      });
      sendDataTransaction([...getData, dataForm]);
    }
    sendDataActivities("activities", dataForm);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 20 }}>Transaksi</h2>
      <div>
        <input
          type="text"
          value={name}
          css={input}
          onChange={e => setName(e.target.value)}
          placeholder="Masukkan nama tujuan"
          autoFocus
        />
        <div css={wrapperList}>
          <ListName filteredName={filtered} />
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div css={radioGroup}>
          <input id="radio1" name="radio" type="radio" defaultChecked="true" />
          <label htmlFor="radio1">Hutang</label>
        </div>
        <div css={radioGroup}>
          <input id="radio2" name="radio" type="radio" />
          <label htmlFor="radio2">Piutang</label>
        </div>
      </div>
      <div>
        <input
          type="text"
          css={input}
          pattern="[0-9]*"
          onChange={onChangeNominal}
          value={nominal}
          placeholder="Masukkan nominal uang"
        />
      </div>
      <div css={wrapperBtn}>
        <button css={buttonPrimaryFull} onClick={() => send("NEXT")}>
          <span>{nominal !== "" ? nominal : 0}</span> Proses >
        </button>
        <button css={buttonPrimaryGFull} onClick={() => props.send("HOME")}>
          Batalkan
        </button>
      </div>
      {current.matches("two") ? (
        <div css={overlay}>
          <div css={overlayContent}>
            <h3>Apakah anda yakin ?</h3>
            <p>klik kembali untuk mengganti atau membatalkan transaksi</p>
            <button
              css={buttonPrimaryFull}
              onClick={e => {
                setName("");
                setNominal(0);
                submitData(e);
                send("NEXT");
              }}
            >
              Yakin, konfirmasi
            </button>
            <button css={buttonPrimaryGFull} onClick={() => send("NEXT")}>
              Kembali
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default AsideTransaction;
