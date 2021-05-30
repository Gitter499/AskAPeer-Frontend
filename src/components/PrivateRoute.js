import React, { Component } from "react";
import axios from "axios";

import config from "../util/config";
import { Redirect, Route } from "react-router-dom";

const headers = new Headers();
export default function PrivateRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        headers.get("auth-token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
