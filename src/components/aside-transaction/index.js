import React, { useState } from "react";
import useData from "functions/useData";
import ListName from "components/list-name";

const AsideTransaction = () => {
  const [name, setName] = useState("");
  const [nominal, setNominal] = useState(0);
  const { storeData, storeActivities, getData } = useData();

  const filteredName = getData().filter(data =>
    data.name.toLowerCase().includes(name.toLowerCase())
  );

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
    storeData(dataForm);
    storeActivities(dataForm);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Masukkan nama tujuan"
          autoFocus
        />
        <ListName filteredName={filteredName} />
      </div>
      <div>
        <h3>{nominal !== "" ? nominal : 0}</h3>
        <input
          type="text"
          pattern="[0-9]*"
          onChange={onChangeNominal}
          value={nominal}
          autoFocus
        />
      </div>
      <div>
        done !!!
        <button onClick={e => submitData(e)}>Close</button>
      </div>
    </div>
  );
};
export default AsideTransaction;
