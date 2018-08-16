import React, { Component } from "react";
import routes from "./routes";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { withRouter } from "react-router-dom";
// import Auth from "./Components/Auth/Auth";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Form from "./Components/Form/Form";
// import Post from "./Components/Post/Post";

class App extends Component {
  render() {
    // console.log("VIEW: ", this.props);
    this.props.location.pathname !== "/" && console.log("WE AIN'T HOME");
    return (
      <div className="App">
        {this.props.location.pathname !== "/" && <Nav />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
