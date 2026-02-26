import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueueProvider } from "./context/QueueContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueueProvider>
    <App />
  </QueueProvider>
);