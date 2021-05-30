import React from "react";
import "./App.css";

import Login from "./routes/login";

import PrivateRoute from "./components/PrivateRoute";

import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

import { ColorModeProvider } from "@chakra-ui/react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <PrivateRoute path="/dash" component={Dash} />
            <PrivateRoute path="/feed" component={Feed} /> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
