import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <Link to="/Dashboard">Home</Link>
      <Link to="/post/:postid">New post</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}
