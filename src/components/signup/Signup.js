import React, { useState } from "react";
import Slider from "../slider/Slider";
import logo from ".././images/text.png";
import "./signup.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [lnameErr, setLnameErr] = useState(false);
  const [check, setCheck] = useState(false);
  const [fnameErr, setFnameErr] = useState(false);
  const [userResp, setUserResp] = useState();
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const redux = useSelector(selectUser);
  // const reduxLogin = redux.loggedIn;

  const state = {
    FirstName: fname,
    LastName: lname,
    UserName: email,
    Password: pass,
    Source: "DEVICE",
    Device: "WEB",
  };
  const responseFacebook = (response) => {
    // e.preventDefault();
    console.log(response);
    // setUser(response);
    const [first, last] = response.name.split(" ");
    console.log(first);

    const stateFb = {
      FirstName: first,
      LastName: last,
      UserName: first,
      Password: first,
      Source: "FACEBOOK",
      Device: "WEB",
    };
    if (response.name) {
      axios.post("/api/register", stateFb).then((response) => {
        console.log("ss0", response);
        if (response.data.StatusCode === 201) {
          setUserResp(response.data);
          setInvalid(true);
          NotificationManager.error(response.data.Message, "Info!", 4000);
        } else if (response.data.StatusCode === 200) {
          // dispatch(
          //   login({
          //     username: response.name,
          //     loggedIn: true,
          //     loggedIn2: null,
          //   })
          // );
          setTimeout(() => {
            navigate("/profile");
          }, 1);
          NotificationManager.success("Account Created", "Info!", 3000);
        }
      });
    }
  };
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const [first, last] = response.profileObj.name.split(" ");
    console.log(first);

    const stateGo = {
      FirstName: first,
      LastName: last,
      UserName: first,
      Password: first,
      Source: "GOOGLE",
      Device: "WEB",
    };
    if (response.profileObj.name) {
      axios.post("/api/register", stateGo).then((response) => {
        console.log("ss0", response);
        if (response.data.StatusCode === 201) {
          setUserResp(response.data);
          setInvalid(true);
          NotificationManager.error(response.data.Message, "Info!", 4000);
        } else if (response.data.StatusCode === 200) {
          // dispatch(
          //   login({
          //     username: response.name,
          //     loggedIn: true,
          //     loggedIn2: null,
          //   })
          // );
          setTimeout(() => {
            navigate("/profile");
          }, 1);
          NotificationManager.success("Account Created", "Info!", 3000);
        }
      });
    }
    // dispatch(
    //   login({
    //     username: response.profileObj.name,
    //     loggedIn: true,
    //     loggedIn2: null,
    //   })
    // );
    setTimeout(() => {
      navigate("/profile");
    }, 1);
  };
  // var checkBox = document.getElementById("checkBox");
  const validation = (e) => {
    e.preventDefault();
    const checkBoxs = document.getElementById("checkBoxss");
    console.log("i am used");
    // if (email === "") {
    //   setEmailErr(true);
    //   setPassErr(false);
    //   setInvalid(false);
    //   setFnameErr(false);
    //   setLnameErr(false);
    // }
    // if (pass === "") {
    //   setEmailErr(false);
    //   setPassErr(true);
    //   setInvalid(false);
    //   setFnameErr(false);
    //   setLnameErr(false);
    // }
    // if (lname === "") {
    //   setEmailErr(false);
    //   setPassErr(false);
    //   setInvalid(false);
    //   setFnameErr(false);
    //   setLnameErr(true);
    // }
    // if (fname === "") {
    //   setEmailErr(false);
    //   setPassErr(false);
    //   setInvalid(false);
    //   setFnameErr(true);
    //   setLnameErr(false);
    // }

    if (fname === "") {
      setEmailErr(false);
      setPassErr(false);
      setInvalid(false);
      setFnameErr(true);
      setLnameErr(false);
    } else if (lname === "") {
      setLnameErr(true);
      setEmailErr(false);
      setPassErr(false);
      setInvalid(false);
      setFnameErr(false);
      setLnameErr(true);
    } else if (email === "") {
      setEmailErr(true);
      setPassErr(false);
      setInvalid(false);
      setFnameErr(false);
      setLnameErr(false);
    } else if (pass === "") {
      setEmailErr(false);
      setPassErr(true);
      setInvalid(false);
      setFnameErr(false);
      setLnameErr(false);
    } else if (checkBoxs.checked === false) {
      setEmailErr(false);
      setPassErr(false);
      setInvalid(false);
      setFnameErr(false);
      setLnameErr(false);
      setCheck(true);
    } else if (checkBoxs.checked === true) {
      setEmailErr(false);
      setPassErr(false);
      setInvalid(false);
      setFnameErr(false);
      setLnameErr(false);
      setCheck(false);
    }
    if (fname && lname && email && pass && checkBoxs.checked === true) {
      setLoad(true);
      axios.post("/api/register", state).then((response) => {
        console.log("ss0", response);
        if (response.data.StatusCode === 201) {
          setUserResp(response.data);
          setLoad(false);
          setInvalid(true);

          // NotificationManager.error(response.data.Message, "Info!", 4000);
        } else if (response.data.StatusCode === 200) {
          // dispatch(
          //   login({
          //     username: email,
          //     loggedIn: true,
          //   })
          // );

          navigate("/profile");
          setLoad(false);
          NotificationManager.success("Account Created", "Info!", 3000);
        }
      });
    }
    // else {
    //   alert("success");
    //   setEmail("");
    //   setFname("");
    //   setLname("");
    //   setPass("");

    // }
  };
  // 4 5
  return (
    <>
      <div className="modal-body">
        <div className="log-pop">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="Loading" />
            </div>
            <div className="socialMedia">
              <FacebookLogin
                appId="1107377113387560"
                // autoLoad

                callback={responseFacebook}
                render={(renderProps) => (
                  <button onClick={renderProps.onClick} className="fb rounded">
                    Facebook
                  </button>
                )}
              />
              <GoogleLogin
                clientId="441299848899-2m2l3cvhqdqidc0h98itp7pu4pi8jrqu.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="goog rounded"
                  >
                    Google
                  </button>
                )}
              />
              {/* <button className="twit rounded">Twiter</button> */}
              {/* <button className="goog">Google</button> */}
            </div>
            <div className="login" id="signup ">
              <p>Or</p>
              <div className="log" style={{ fontSize: "14px" }}>
                <form onSubmit={validation}>
                  <div className="input form-group">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      value={fname}
                      onChange={(e) => {
                        setFname(e.target.value);
                        setFnameErr(false);
                      }}
                    />
                    {fnameErr && (
                      <span
                        style={{
                          color: "red",
                          float: "left",
                          marginBottom: "5px",
                        }}
                      >
                        Please Enter Last name
                      </span>
                    )}
                  </div>
                  <div className="input form-group">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      value={lname}
                      onChange={(e) => {
                        setLname(e.target.value);
                        setLnameErr(false);
                      }}
                    />
                    {lnameErr && (
                      <span
                        style={{
                          color: "red",
                          float: "left",
                          marginBottom: "5px",
                        }}
                      >
                        Please Enter Last name
                      </span>
                    )}
                  </div>
                  <div className="input form-group">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailErr(false);
                        setInvalid(false);
                      }}
                    />
                    {emailErr && (
                      <span
                        style={{
                          color: "red",
                          float: "left",
                          marginBottom: "5px",
                        }}
                      >
                        Please Enter Last name
                      </span>
                    )}
                  </div>
                  <div className="input form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      value={pass}
                      onChange={(e) => {
                        setPass(e.target.value);
                        setPassErr(false);
                      }}
                    />
                    {passErr && (
                      <span
                        style={{
                          color: "red",
                          float: "left",
                          marginBottom: "5px",
                        }}
                      >
                        Please Enter Last name
                      </span>
                    )}
                    {invalid && (
                      <span
                        style={{
                          color: "red",
                          float: "left",
                          marginBottom: "5px",
                        }}
                      >
                        {userResp.Message}
                      </span>
                    )}
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name=""
                      id="checkBoxss"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck(false);
                        }
                      }}
                    />
                    <span
                      style={{
                        color: "rgb(126, 119, 119)",
                        marginLeft: "10px",
                      }}
                    >
                      I agree all the terms and condition
                    </span>
                  </div>
                  {check && (
                    <span
                      style={{
                        color: "red",
                        float: "left",
                        marginBottom: "5px",
                      }}
                    >
                      Please agree the terms and conditions.
                    </span>
                  )}{" "}
                  <button type="submit" className="btn">
                    {load && (
                      <div
                        className="spinner-border"
                        role="status"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                      >
                        {/* <span class="sr-only">Loading...</span> */}
                      </div>
                    )}
                    Sign up
                  </button>
                </form>
              </div>
              <div className="register">
                Have an account?
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Login
                </span>
              </div>
            </div>
          </div>
          {/* <div>
                  <button className="btn btn-danger">Yes</button>
                  <button className="btn btn-primary" onClick={close}>
                    No
                  </button>
                </div> */}

          <div className="sliders">
            <div className="slide">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
