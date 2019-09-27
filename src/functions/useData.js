import { useContext } from "react";
import { DataContext } from "context/dataContext";
import { setStorage } from "./local-storage";

const useData = () => {
  const [state, setState] = useContext(DataContext);
  const getData = () => state.getData();
  const getActivities = () => state.getActivities();

  const storeData = data => {
    const prevData = [...getData()];
    const sameName = prevData.filter(filtered =>
      filtered.name.toLowerCase().includes(data.name.toLowerCase())
    );

    if (sameName.length > 0) {
      const newNominal = sameName[0].hutang + data.hutang;
      const dataMutated = getData().filter(el => {
        return el.name !== sameName[0].name;
      });

      setStorage("data", [...dataMutated, { ...data, hutang: newNominal }]);
    } else {
      setStorage("data", [...getData(), data]);
    }
  };

  const storeActivities = props => {
    const data = {
      type: "Hutang",
      target: String(props.name),
      nominal: Number(props.hutang),
      date: String(props.date)
    };

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
