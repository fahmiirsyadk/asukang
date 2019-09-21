import React, { useState } from "react";
import { setStorage, getStorage } from "functions/local-storage";

const setStorageData = () => setStorage("data", []);
const setStorageActivities = () => setStorage("activities", []);
const getStorageData = () => getStorage("data");
const getStorageActivities = () => getStorage("activities");

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
