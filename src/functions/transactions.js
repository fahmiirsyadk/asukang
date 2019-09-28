import { getStorage, setStorage } from "./local-storage";

export const checkLocalStorage = dataname => {
  if (!getStorage(dataname)) {
    setStorage(dataname, []);
  }
};

export const filteredName = name =>
  getStorage("data").filter(data =>
    data.name.toLowerCase().includes(name.toLowerCase())
  );

export const sendDataTransaction = data => setStorage("data", data);
export const sendDataActivities = data => setStorage("activities", data);
