import React, { Component } from "react";

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <input placeholder="username" />
        <input placeholder="password" />
      </div>
    );
  }
}
