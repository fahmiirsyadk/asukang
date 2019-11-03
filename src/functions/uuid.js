const uuid = name => {
  const navigator_info = window.navigator;
  const screen_info = window.screen;
  const nameMutated = "_" + name.toLowerCase().replace(/ /g, "_");
  let uid = navigator_info.mimeTypes.length;
  uid += navigator_info.userAgent.replace(/\D+/g, "");
  uid += navigator_info.plugins.length;
  uid += screen_info.height || "";
  uid += screen_info.width || "";
  uid += screen_info.pixelDepth || "";
  return uid + nameMutated;
};

export default uuid;
