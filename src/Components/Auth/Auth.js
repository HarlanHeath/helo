import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  createUser() {
    axios
      .post("/register", { username, password })
      .then(response => this.setState());
  }

  loginUser() {
    axios.post("/login", { username, password });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          placeholder="username"
          value={this.state.username}
          onChange={this.inputField}
        />
        <input
          placeholder="password"
          value={this.state.password}
          onChange={this.inputField}
        />
        <button onClick={this.loginUser}> Login </button>
        <button onClick={this.createUser}> Register </button>
      </div>
    );
  }
}
