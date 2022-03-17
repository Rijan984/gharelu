import React, { useEffect, useState } from "react";
import "./loading.css";
import logo from ".././images/text.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
function Loading() {
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();
  const redux = useSelector(selectUser);
  const reduxLogin = redux.loggedIn;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //     console.log("hey");
  //     navigate(!reduxLogin ? "/login" : "/profile");
  //   }, 2000);
  // }, [navigate, reduxLogin]);

  return (
    <div className="logo">
      <img src={logo} alt="Loading" />
    </div>
  );
}

export default Loading;
