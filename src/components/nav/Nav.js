import React, { useState } from "react";
import "./nav.css";
import logo from ".././images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import Login from "../login/Login";
import Signup from "../signup/Signup";
function Nav() {
  const [show, setShow] = useState(false);
  const redux = useSelector(selectUser);
  const dispatch = useDispatch();
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
  const menu = document.getElementsByClassName("navlinks");

  const drop = () => {
    setShow(!show);
  };
  return (
    <div className="mainNav">
      <div id="navlogo">
        <img src={logo} alt="" srcSet="" />
      </div>
      <div className="navlinks">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/pr" className="link">
          Pages
        </Link>
        <Link to="*" className="link">
          Candidates
        </Link>
        <Link to="*" className="link">
          Employers
        </Link>
        <Link to="*" className="link">
          Blog
        </Link>
        <Link to="*" className="link">
          Contact
        </Link>

        {!redux.username && (
          <>
            <div className="navlogin">
              <i className="bi bi-box-arrow-in-right"></i>
              <a
                className="btn"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                Login
              </a>
            </div>
          </>
        )}
        {redux.username && (
          <div className="navlogin">
            <i className="bi bi-box-arrow-in-left"></i>
            <span className="btn" onClick={logout}>
              Logout
            </span>
          </div>
        )}

        <a
          className="btn btn-primary"
          //   style={{ color: "blue", cursor: "pointer" }}
          href="#exampleModalToggle2"
          data-bs-toggle="modal"
        >
          Signup
        </a>
      </div>

      {!reduxLogin && (
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div className="modal-dialog modal-fullscreen dialouge" id="back">
            <div className="modal-content hidden">
              <div className="close">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <Login />
            </div>
          </div>
        </div>
      )}
      {!reduxLogin && (
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
        >
          <div className="modal-dialog modal-fullscreen dialouge2">
            <div className="modal-content">
              <div className="close">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Sign up
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div> */}
              <Signup />
            </div>
          </div>
        </div>
      )}

      <div className="menu">
        <div className="dropdown">
          <button className="dropbtn">
            <i className="bi bi-list"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
