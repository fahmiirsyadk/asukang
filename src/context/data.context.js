import { createContext } from "react";

const DataContext = createContext({
  totalNominal: 0,
  getData: () => [],
  getActivities: () => []
});

export default DataContext;
