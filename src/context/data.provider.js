import React, { useState, useEffect } from "react";
import DataContext from "context/data.context";
import { getStorage, setStorage } from "functions/local-storage";

const setStorageData = () => setStorage("data", []);
const setStorageActivities = () => setStorage("activities", []);
const getStorageData = getStorage("data");
const getStorageActivities = getStorage("activities");

const DataProvider = ({ children }) => {
  const getData = () => {
    setStateX({ ...state, storageData: getStorageData });
  };
  const getActivities = () => {
    setStateX({ ...state, storageActivities: getStorageActivities });
  };

  const loadingState = {
    storageData: [],
    storageActivities: [],
    getData,
    getActivities
  };

  const [state, setStateX] = useState(loadingState);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;
