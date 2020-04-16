import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DateProvider from "./Components/_Providers/DateProvider";

import "../sass/app.scss";

import Index from "./Components/Index";

ReactDOM.render(
  <BrowserRouter>
    <DateProvider>
      <Index />
    </DateProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
