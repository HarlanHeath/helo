import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  console.log(props);
  return (
    <div>
      <Link to="/Dashboard">Home</Link>
      <Link to="/post/:postid">New post</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);
