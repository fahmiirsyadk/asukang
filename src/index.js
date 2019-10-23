import React from "react";
import { hydrate, render } from "react-dom";
import App from "components/app";
import * as serviceWorker from "serviceWorker";

const rootElement = document.getElementById("root");
let jsxElements = <App />;

if (rootElement.hasChildNodes()) {
  hydrate(jsxElements, rootElement);
} else {
  render(jsxElements, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
