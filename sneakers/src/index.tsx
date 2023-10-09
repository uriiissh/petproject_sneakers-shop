import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Routes/root";
import { Header } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    
  </React.StrictMode>
);
