import { useContext } from "react";
import { DataContext } from "context/dataContext";

const useData = () => {
  const [state, setState] = useContext(DataContext);
  const toggle = () => {
    setState(state => ({
      ...state,
      dataActivities: [
        ...state.dataActivities,
        { title: "Aku context boss", descriptions: "halo" }
      ]
    }));
  };
  return {
    toggle
  };
};

export default useData;
