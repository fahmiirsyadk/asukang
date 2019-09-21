import React, { useState } from "react";

const setStorageData = () => localStorage.setItem("data", JSON.stringify([]));
const setStorageActivities = () =>
  localStorage.setItem("activities", JSON.stringify([]));
const getStorageData = () => JSON.parse(localStorage.getItem("data"));
const getStorageActivities = () =>
  JSON.parse(localStorage.getItem("activities"));

const dataRaw = {
  getData: () => {
    if (!getStorageData()) {
      setStorageData();
    }
    return getStorageData();
  },
  getActivities: () => {
    if (!getStorageActivities()) {
      setStorageActivities();
    }
    return getStorageActivities();
  },
  dataActivities: [],
  dataUser: []
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