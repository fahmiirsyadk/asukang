import React, { useState } from "react";
import { dataActivities, dataHutang } from "data/dump";

const dataRaw = {
  dataActivities: dataActivities,
  dataHutang: dataHutang,
  setData: () => {}
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
