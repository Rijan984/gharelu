import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, selectUser } from "../../features/userSlice";
import "./profile.css";
import jobs from "../../data";
import Nav from "../nav/Nav";
import Search from "../property/searchProperty/Search";

function Profile() {
  const dispatch = useDispatch();
  const redux = useSelector(selectUser);
  const reduxLogin = redux.loggedIn;
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();

    dispatch(
      login({
        username: null,
        loggedIn: null,
      })
    );
    navigate("/");
  };
  if (redux.loggedIn2) {
    window.addEventListener("load", () => {
      alert("You are logged out..");
      dispatch(
        login({
          username: redux.username,
          loggedIn: null,
          loggedIn2: null,
        })
      );
      setTimeout(() => {
        navigate("/");
      });
    });
  }

  return (
    <>
      {/* <Nav /> */}
      {/* <div className="profile">
        <button onClick={logout} className="logout btn btn-danger">
          Logout
        </button>
        <button className="btn btn-primary">
          <Link to="/jobs" style={{ color: "white" }}>
            Jobs
          </Link>
        </button>
        <p style={{ marginLeft: "20px" }}>
          <Link to="/property">Search Property</Link>
        </p>
      </div> */}
      <Search />
      {/* <List /> */}
    </>
  );
}

export default Profile;
