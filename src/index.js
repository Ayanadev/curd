import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContext from "./context/ProductContext";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <App />
      <MainRoutes />
    </ProductContext>
  </BrowserRouter>
);
