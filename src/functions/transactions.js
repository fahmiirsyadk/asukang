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

export const sendDataTransaction = datas => {
  const newDatas = datas.filter(data => data.nominal !== 0);
  console.log(newDatas);
  setStorage("data", newDatas);
};

export const sendDataActivities = data => setStorage("activities", data);
