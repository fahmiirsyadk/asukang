import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import AsideTransactionConfirm from "components/aside-transaction-confirm";
import RadioSelect from "./radio";
import {
  input,
  buttonPrimaryFull,
  buttonPrimaryGFull,
  radioGroup,
  spanSearchBox,
  labelInput,
  textarea
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
  const [desc, setDesc] = useState("");
  const [nominal, setNominal] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState("utang");
  const [current, send] = useMachine(transactionFlow);
  const [, dispatch] = useDataValue();
  const getData = getStorage("data");
  const getActivities = getStorage("activities");
  const filtered = filteredName(name);

  const onChangeNominal = e => {
    const formatNominal =
      e.target.validity.valid && e.target.value >= 0 ? e.target.value : nominal;
    setNominal(Number(formatNominal));
  };

  const handleOptionChange = e => {
    setSelectedOpt(e.target.value);
  };

  const onConfirmation = () => {
    if (name.length !== 0 && nominal.length !== 0 && desc.length !== 0) {
      send("CONFIRMATION");
    }
  };

  const preSubmitData = e => {
    setName("");
    setDesc("");
    setNominal(0);
    submitData(e);
    send("PROCESS");
  };

  const submitData = e => {
    e.preventDefault();

    const newDate = new Date();
    const date = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
    const dataForm = {
      name: name,
      verified: false,
      initialDate: date,
      status: selectedOpt,
      nominal: Number(nominal),
      transactions: [
        {
          nominal: Number(nominal),
          description: desc,
          status: selectedOpt,
          date: date
        }
      ]
    };
    if (filtered.length > 0) {
      const newNominal = state => {
        return state === "utang"
          ? filtered[0].nominal + dataForm.nominal
          : filtered[0].nominal - dataForm.nominal;
      };
      const statusData = newNominal(selectedOpt) < 0 ? "piutang" : "utang";
      const filteredData = getData.filter(el => el.name === filtered[0].name);
      console.log(filteredData);
      const finalData = [
        {
          ...dataForm,
          nominal: newNominal(selectedOpt),
          status: statusData,
          transactions: [
            ...filteredData[0].transactions,
            ...dataForm.transactions
          ]
        }
      ];
      dispatch({
        type: "getDataState",
        newData: finalData
      });
      sendDataTransaction(finalData);
    } else {
      const finalData = [
        ...getData,
        {
          ...dataForm,
          nominal:
            selectedOpt === "utang" ? Number(nominal) : -Math.abs(nominal),
          status: selectedOpt
        }
      ];
      dispatch({
        type: "getDataState",
        newData: finalData
      });
      sendDataTransaction(finalData);
    }
    sendDataActivities([
      ...getActivities,
      {
        ...dataForm,
        nominal: selectedOpt === "utang" ? Number(nominal) : -Math.abs(nominal),
        status: Number(nominal) === 0 ? "Lunas" : selectedOpt
      }
    ]);
  };

  return (
    <div style={{ padding: 20, position: "relative", height: "100%" }}>
      {current.matches("add") ? (
        <React.Fragment>
          <h2 style={{ marginBottom: 20 }}>Transaksi baru</h2>
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
              id="nama_input"
              value={name}
              css={[input, { paddingLeft: "2em" }]}
              onChange={e => setName(e.target.value)}
              placeholder="Tambahkan nama tujuan"
              autoFocus
            />
          </div>
          <div style={{ margin: "1em 0 " }}>
            <label css={labelInput} htmlFor="description">
              Deskripsi:
            </label>
            <textarea
              id="description"
              name="description"
              rows="2"
              onChange={e => setDesc(e.target.value)}
              placeholder="Misal: hutang telor ke warung mbak jum"
              css={textarea}
            ></textarea>
          </div>
          <div style={{ marginBottom: 20 }}>
            <RadioSelect
              radioGroup={radioGroup}
              handleOptionChange={handleOptionChange}
              selectedOpt={selectedOpt}
            />
          </div>
          <div>
            <label css={labelInput} htmlFor="input_nominal">
              Nominal:
            </label>
            <input
              id="input_nominal"
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
              Proses{" "}
              <span
                css={{
                  padding: "5px 8px",
                  backgroundColor: "#4493ef",
                  borderRadius: "3px",
                  color: "white",
                  fontWeight: 700
                }}
              >
                {rupiahFormat(nominal !== "" ? nominal : 0)}
              </span>
            </button>
            <button css={buttonPrimaryGFull} onClick={() => props.send("HOME")}>
              Batalkan
            </button>
          </div>
        </React.Fragment>
      ) : current.matches("confirmation") ? (
        <AsideTransactionConfirm
          name={name}
          selectedOpt={selectedOpt}
          uuid={getStorage("id")}
          nominal={nominal}
          desc={desc}
          submit={e => preSubmitData(e)}
          back={() => send("BACK")}
        />
      ) : null}
    </div>
  );
};
export default AsideTransaction;
