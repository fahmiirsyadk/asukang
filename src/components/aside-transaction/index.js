import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import AsideOverlay from "components/aside-overlay";
import RadioSelect from "./radio";
import {
  input,
  buttonPrimaryFull,
  buttonPrimaryGFull,
  radioGroup,
  spanSearchBox
} from "components/styles";
import { getStorage } from "functions/local-storage";
import rupiahFormat from "functions/numeric";
import {
  sendDataTransaction,
  sendDataActivities,
  filteredName
} from "functions/transactions";
import { transactionFlow } from "machines";
import { useDataValue } from "context/data.context";
import { wrapperBtn } from "./style";

const AsideTransaction = props => {
  const [name, setName] = useState("");
  const [nominal, setNominal] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState("hutang");
  const [current, send] = useMachine(transactionFlow);
  const [, dispatch] = useDataValue();
  const getData = getStorage("data");
  const getActivities = getStorage("activities");
  const filtered = filteredName(name);

  const onChangeNominal = e => {
    e.target.validity.valid && e.target.value >= 0
      ? setNominal(Number(e.target.value))
      : setNominal("");
  };

  const handleOptionChange = e => {
    setSelectedOpt(e.target.value);
  };

  const onConfirmation = () => {
    if (name.length !== 0 && nominal.length !== 0) {
      if (filtered.length > 0 && getData.filter(el => el.name !== name)) {
        send("OVERWRITE");
      } else if (name === "UNSAFE--HARD-RESET") {
        sendDataTransaction([]);
        sendDataActivities([]);
      } else {
        send("CONFIRMATION");
      }
    }
  };

  const preSubmitData = e => {
    setName("");
    setNominal(0);
    submitData(e);
    send("PROCESS");
  };

  const submitData = e => {
    e.preventDefault();
    const date = new Date();
    const dataForm = {
      name: name,
      nominal: Number(nominal),
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      status: selectedOpt
    };
    const dataFinal = [
      ...getData,
      {
        ...dataForm,
        nominal:
          selectedOpt === "hutang" ? Number(nominal) : -Math.abs(nominal),
        status: selectedOpt
      }
    ];
    dispatch({
      type: "getDataState",
      newData: dataFinal
    });
    sendDataTransaction(dataFinal);
    sendDataActivities([
      ...getActivities,
      {
        ...dataForm,
        nominal:
          selectedOpt === "hutang" ? Number(nominal) : -Math.abs(nominal),
        status: Number(nominal) === 0 ? "Lunas" : selectedOpt
      }
    ]);
  };

  return (
    <div style={{ padding: 20, position: "relative", height: "100%" }}>
      <h2 style={{ marginBottom: 20 }}>Transaksi</h2>
      <div css={{ position: "relative" }}>
        <span css={spanSearchBox}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          value={name}
          css={[input, { paddingLeft: "2em" }]}
          onChange={e => setName(e.target.value)}
          placeholder="Masukkan nama tujuan"
          autoFocus
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <RadioSelect
          radioGroup={radioGroup}
          handleOptionChange={handleOptionChange}
          selectedOpt={selectedOpt}
        />
      </div>
      <div>
        <input
          css={input}
          pattern="[0-9]*"
          inputMode="numeric"
          onChange={onChangeNominal}
          value={nominal}
          placeholder="Masukkan nominal uang"
          onKeyUp={e => (e.keyCode === 13 ? onConfirmation() : null)}
        />
      </div>
      <div css={wrapperBtn}>
        <button css={buttonPrimaryFull} onClick={() => onConfirmation()}>
          <span>{rupiahFormat("Rp.", nominal !== "" ? nominal : 0)}</span>{" "}
          Proses >
        </button>
        <button css={buttonPrimaryGFull} onClick={() => props.send("HOME")}>
          Batalkan
        </button>
      </div>
      {current.matches("confirmation") ? (
        <AsideOverlay
          content={[
            "Apakah anda yakin ?",
            "Klik kembali untuk mengganti atau membatalkan transaksi",
            "Yakin, konfirmasi"
          ]}
          submit={e => preSubmitData(e)}
          cancelFirst={false}
          cancel={() => send("BACK")}
        />
      ) : current.matches("overwrite") ? (
        <AsideOverlay
          content={[
            "Apakah anda yakin ?",
            "Nama yang anda inputkan telah terdaftar, apakah mereka orang yang sama ?",
            "Lanjutkan, mereka orang yang berbeda"
          ]}
          cancelFirst={true}
          submit={e => preSubmitData(e)}
          cancel={() => send("BACK")}
        />
      ) : null}
    </div>
  );
};
export default AsideTransaction;
