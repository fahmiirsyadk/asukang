const rupiahFormat = (sign, num) =>
  String(sign) + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export default rupiahFormat;
