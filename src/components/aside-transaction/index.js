import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import RadioSelect from "./radio";
import {
  input,
  buttonPrimaryFull,
  buttonPrimaryGFull,
  radioGroup
} from "components/styles";
import { getStorage } from "functions/local-storage";
import rupiahFormat from "functions/numeric";
import {
  sendDataTransaction,
  sendDataActivities,
  filteredName
} from "functions/transactions";
import { transactionFlow } from "machines/machines";
import { useDataValue } from "context/data.context";
import ListName from "components/list-name";
import {
  wrapperList,
  wrapperBtn,
  overlay,
  overlayContent,
  spanSearchBox
} from "./style";
import imgEmpty from "assets/images/empty.png";

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

  const selectedName = name => {
    setName(name);
  };

  const handleOptionChange = e => {
    setSelectedOpt(e.target.value);
  };

  const onNext = () => {
    if (name.length !== 0 && nominal.length !== 0) {
      send("NEXT");
    }
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

    if (filtered.length > 0) {
      const newNominal = state => {
        return state === "hutang"
          ? filtered[0].nominal + dataForm.nominal
          : filtered[0].nominal - dataForm.nominal;
      };
      const statusData = newNominal(selectedOpt) < 0 ? "pihutang" : "hutang";
      const dataMutated = getData.filter(el => el.name !== filtered[0].name);
      const dataFinal = [
        ...dataMutated,
        { ...dataForm, nominal: newNominal(selectedOpt), status: statusData }
      ];
      dispatch({
        type: "getDataState",
        newData: dataFinal
      });
      sendDataTransaction(dataFinal);
    } else {
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
    }
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
    <div style={{ padding: 20, position: "relative" }}>
      <h2 style={{ marginBottom: 20 }}>Transaksi</h2>
      <div>
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
        <div css={wrapperList}>
          {filtered.length < 1 ? (
            <React.Fragment>
              <div id="empty">
                <img
                  css={{ width: 50 }}
                  src={imgEmpty}
                  alt="ilustrasi_data_kosong"
                />
              </div>
              <p id="empty-desc">Tidak ada list, silahkan tambahkan orang</p>
            </React.Fragment>
          ) : null}
          <ListName filteredName={filtered} action={selectedName} />
        </div>
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
          type="text"
          css={input}
          pattern="[0-9]*"
          onChange={onChangeNominal}
          value={nominal}
          placeholder="Masukkan nominal uang"
        />
      </div>
      <div css={wrapperBtn}>
        <button css={buttonPrimaryFull} onClick={() => onNext()}>
          <span>{rupiahFormat("Rp.", nominal !== "" ? nominal : 0)}</span>{" "}
          Proses >
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
