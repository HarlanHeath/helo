import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.userField = this.userField.bind(this);
    this.passField = this.passField.bind(this);
    this.createUser = this.createUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  userField(e) {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  }

  passField(e) {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  }

  createUser() {
    let { username, password } = this.state;
    axios
      .post("/register", { username, password })
      .then(window.location.assign("/#/dashboard"));
  }

  loginUser() {
    let { username, password } = this.state;
    axios
      .post("/login", { username, password })
      .then(window.location.assign("/#/dashboard"));
  }

  render() {
    return (
      <div>
        <input placeholder="username" onChange={this.userField} />
        <input placeholder="password" onChange={this.passField} />
        <button onClick={this.createUser}> Register </button>
        <button onClick={this.loginUser}> Login </button>
      </div>
    );
  }
}
