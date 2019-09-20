import React, { useState } from "react";
import { dataActivities, dataHutang } from "data/dump";

const storageData = () => localStorage.getItem("data");
const storageActivities = () => localStorage.getItem("activities");

const dataRaw = {
  dataActivities: dataActivities,
  dataHutang: dataHutang,
  getData: () => {
    return storageData() ? JSON.parse(storageData()) : [];
  }
};

const DataContext = React.createContext({
  ...dataRaw
});

const DataProvider = props => {
  const [state, setState] = useState(dataRaw);
  return (
    <DataContext.Provider value={[state, setState]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
