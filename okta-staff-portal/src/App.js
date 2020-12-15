import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Staff from "./components/Staff";
import Home from "./components/Home";
import Login from "./components/Login";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

function onAuthRequired({ history }) {
  history.push("/login");
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-1840207.okta.com/oauth2/default"
          client_id="0oa2cuydxxrFBJImn5d6"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-409495.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}
