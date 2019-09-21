const _s = localStorage;
const _parse = data => JSON.parse(data);
const _stringify = data => JSON.stringify(data);

export const setStorage = (label = "", data) =>
  _s.setItem(label, _stringify(data));
export const getStorage = (data = "") => _parse(_s.getItem(data));
