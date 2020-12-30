import spinner from "../assets/spinner.gif";

import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: "200px", margin: "4px auto", display: "block" }}
        />
      </div>
    );
  }
}
