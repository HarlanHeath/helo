import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../ducks/reducer";
import axios from "axios";

class Auth extends Component {
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
        <input
          placeholder="password"
          type="password"
          onChange={this.passField}
        />
        <button onClick={this.createUser}> Register </button>
        <button onClick={this.loginUser}> Login </button>
      </div>
    );
  }
}

// const mapStateToProps = state => state;

export default connect(
  null,
  { userLogin }
)(Auth);
