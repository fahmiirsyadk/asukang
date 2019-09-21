import { useContext } from "react";
import { DataContext } from "context/dataContext";
import { setStorage } from "./local-storage";

const useData = () => {
  const [state, setState] = useContext(DataContext);
  const getData = () => state.getData();
  const getActivities = () => state.getActivities();

  const storeData = data => {
    setState(state => ({
      ...state,
      dataUser: [...state.dataUser, data]
    }));
    setStorage("data", [...getData(), data]);
  };

  const storeActivities = props => {
    const data = {
      title: "Hutang",
      descriptions: `anda berhutang kepada ${props.name} sebesar Rp.${props.hutang}`
    };

    setState(state => ({
      ...state,
      dataActivities: [...state.dataActivities, data]
    }));

    setStorage("activities", [...getActivities(), data]);
  };

  const totalNominal = getData().reduce((val, element) => {
    return Number(val) + Number(element.hutang);
  }, 0);

  return {
    storeActivities,
    storeData,
    getData,
    getActivities,
    totalNominal
  };
};

export default useData;
