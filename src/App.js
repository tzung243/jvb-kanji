import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { StartRoutes } from "./Components/Routes/StartRoutes";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <StartRoutes />
      </BrowserRouter>
    );
  }
}
