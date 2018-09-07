import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      myPosts: true,
      posts: []
    };
    this.searchField = this.searchField.bind(this);
    this.myPosts = this.myPosts.bind(this);
  }

  searchField(e) {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  }

  myPosts(e) {
    console.log("myPosts Clicked");
    this.setState({ myPosts: e.target.checked });
  }

  render() {
    return (
      <div>
        Dashboard
        <input placeholder="Search" onChange={this.searchField} />
        <button>Search</button>
        <button>Reset</button>
        <input type="checkbox" onChange={this.myPosts} />
      </div>
    );
  }
}
