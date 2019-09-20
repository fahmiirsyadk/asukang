import { useContext } from "react";
import { DataContext } from "context/dataContext";

const useData = () => {
  const [state, setState] = useContext(DataContext);
  const getData = () => state.getData();
  const toggle = props => {
    setState(state => ({
      ...state,
      dataActivities: [
        ...state.dataActivities,
        {
          title: "Hutang",
          descriptions: `anda berhutang kepada ${props.name} sebesar Rp.${props.hutang}`
        }
      ]
    }));
  };
  return {
    toggle,
    getData
  };
};

export default useData;
