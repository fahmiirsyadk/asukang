import { useContext } from "react";
import { DataContext } from "context/dataContext";

const useData = () => {
  const [state, setState] = useContext(DataContext);
  const getData = () => state.getData();
  const getActivities = () => state.getActivities();

  const toggle = props => {
    const data = {
      title: "Hutang",
      descriptions: `anda berhutang kepada ${props.name} sebesar Rp.${props.hutang}`
    };

    setState(state => ({
      ...state,
      dataActivities: [...state.dataActivities, data]
    }));

    getActivities();
    localStorage.setItem(
      "activities",
      JSON.stringify([...getActivities(), data])
    );
  };
  return {
    toggle,
    getData,
    getActivities
  };
};

export default useData;
