import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../ducks/reducer";

function Nav(props) {
  console.log(props);
  return (
    <div>
      <Link to="/Dashboard">Home</Link>
      <Link to="/post/:postid">New post</Link>
      <Link to="/">Logout</Link>
      <h1>{props.username}</h1>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { userLogin }
)(Nav);
