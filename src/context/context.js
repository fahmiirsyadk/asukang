import { createContext } from "react";

const RootContext = createContext([
  {
    title: "Pembayaran",
    descriptions: "telah membayar 20,000"
  },
  {
    title: "Pembayaran",
    descriptions: "telah membayar 100,000"
  },
  {
    title: "Lunas",
    descriptions: "telah lunas membayar hutang terhadap fahmi"
  }
]);

export default RootContext;
