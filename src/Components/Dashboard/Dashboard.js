import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      myPosts: true
    };
  }
  render() {
    return (
      <div>
        Dashboard
        <input placeholder="Search" />
        <button>Search</button>
        <button>Reset</button>
      </div>
    );
  }
}
