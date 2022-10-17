import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { StartRoutes } from "./Components/Routes/StartRoutes";
import { Provider } from "react-redux";
import { authenticationStore } from "./Redux/AuthenticationStore";
export class App extends Component {
  render() {
    return (
      <Provider store={authenticationStore}>
        <BrowserRouter>
          <StartRoutes />
        </BrowserRouter>
      </Provider>
    );
  }
}
