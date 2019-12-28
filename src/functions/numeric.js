const rupiahFormat = num =>
  new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol"
  }).format(num);

export default rupiahFormat;
