const rupiahFormat = num =>
  String("Rp.") + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

export default rupiahFormat;
