import { useContext } from "react";
import { DataContext } from "context/dataContext";

const useData = () => {
  const [state, setState] = useContext(DataContext);
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
    toggle
  };
};

export default useData;
