import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/global.scss";
type RootElement = HTMLElement;
const root: RootElement = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
