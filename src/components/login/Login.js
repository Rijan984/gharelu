import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import logo from ".././images/text.png";
import Slider from "../slider/Slider";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "../signup/Signup";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import axios from "axios";
import { NotificationManager } from "react-notifications";

const checkBox = document.getElementById("checkBox");
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [checked, setChecked] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [dis, setDis] = useState();
  const [src, setSrc] = useState();
  const [userResp, setUserResp] = useState();
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const redux = useSelector(selectUser);
  const reduxLogin = redux.loggedIn;

  const state = {
    UserName: email,
    Password: pass,
    NotificationToken: "string",
    Source: "DEVICE",
  };

  const responseFacebook = (response) => {
    // e.preventDefault();
    console.log(response);
    const [first, last] = response.name.split(" ");
    console.log(first);
    const stateFb = {
      UserName: first,
      Password: first,
      Source: "FACEBOOK",
      Device: "WEB",
    };

    // console.log(response.name);
    // setUser(response);
    axios.post("/api/login", stateFb).then((response) => {
      console.log(response.data);
      if (response.data.LoginOutputs) {
        setInvalid(false);
        setEmailErr(false);
        setPassErr(false);
        setEmail("");
        setPass("");
        dispatch(
          login({
            username: response.name,
            loggedIn: true,
            loggedIn2: null,
          })
        );
        setTimeout(() => {
          navigate("/profile");
        }, 1);
        NotificationManager.success("Successfully Logged in", "Info!", 2000);
      } else {
        console.log("userNotFound");
      }
    });
  };
  const responseGoogle = (response) => {
    // console.log(response.profileObj.name);
    const [first, last] = response.profileObj.name.split(" ");
    console.log(first);
    const stateGo = {
      UserName: first,
      Password: first,
      Source: "GOOGLE",
      Device: "WEB",
    };
    axios.post("/api/login", stateGo).then((response) => {
      console.log(response.data);
      if (response.data.StatusCode === 200) {
        setInvalid(false);
        setEmailErr(false);
        setPassErr(false);
        setEmail("");
        setPass("");
        dispatch(
          login({
            username: first,
            loggedIn: true,
            loggedIn2: null,
          })
        );
        setTimeout(() => {
          navigate("/profile");
        }, 1);
        NotificationManager.success("Successfully Logged in", "Info!", 3000);
      } else {
        console.log("userNotFound");
      }
    });
    // console.log(response.profileObj);
    // dispatch(
    //   login({
    //     username: response.profileObj.name,
    //     loggedIn: true,
    //     loggedIn2: null,
    //   })
    // );
    // setTimeout(() => {
    //   navigate("/profile");
    // }, 1);
  };
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  const validation = (e) => {
    e.preventDefault();
    const checkBoxs = document.getElementById("checkBox");
    if (email === "" && pass === "") {
      setEmailErr(true);
      setPassErr(true);
      setInvalid(false);
    } else if (email === "") {
      setEmailErr(true);
      setPassErr(false);
      setInvalid(false);
    } else if (pass === "") {
      setEmailErr(false);
      setPassErr(true);
      setInvalid(false);
    } else if (email !== "" && pass !== "" && checkBoxs.checked !== false) {
      setLoad(true);
      axios.post("/api/login", state).then((response) => {
        console.log(response.data);
        console.log(checkBoxs.checked);

        if (response.data.LoginOutputs && checkBoxs.checked === true) {
          setInvalid(false);
          setEmailErr(false);
          setPassErr(false);
          setEmail("");
          setPass("");
          dispatch(
            login({
              username: email,
              loggedIn: checkBoxs.checked,
              loggedIn2: null,
            })
          );
          setLoad(false);
          navigate("/profile");
          NotificationManager.success("Successfully Logged in", "Info!", 3000);
        } else if (
          response.data.StatusCode === 201 ||
          response.data.StatusCode === 203
        ) {
          setUserResp(response.data.Message);
          setInvalid(true);
          setLoad(false);
        }
      });
      // console.log(user.lenght);
      // alert(checkBox.checked);
      // users.map(({ username, password }) => {
      //   if (
      //     email === username &&
      //     pass === password &&
      //     checkBox.checked === true
      //   ) {
      //     setInvalid(false);
      //     setEmailErr(false);
      //     setPassErr(false);
      //     setEmail("");
      //     setPass("");
      //     dispatch(
      //       login({
      //         username: username,
      //         loggedIn: checkBox.checked,
      //         loggedIn2: null,
      //       })
      //     );
      //     console.log(reduxLogin);

      //     navigate("/profile");
      //   } else if (email === username && pass === password) {
      //     setInvalid(false);
      //     setEmailErr(false);
      //     setPassErr(false);
      //     setEmail("");
      //     setPass("");
      //     dispatch(
      //       login({
      //         username: null,
      //         loggedIn: true,
      //         loggedIn2: true,
      //       })
      //     );
      //     navigate("/profile");
      //   }
      // });
    } else {
      setLoad(true);
      axios.post("/api/login", state).then((response) => {
        console.log(response.data);
        console.log(checkBoxs.checked);
        if (response.data.LoginOutputs && checkBoxs.checked === false) {
          setInvalid(false);
          setEmailErr(false);
          setPassErr(false);
          setEmail("");
          setPass("");
          dispatch(
            login({
              username: email,
              loggedIn: true,
              loggedIn2: true,
            })
          );
          setLoad(false);

          navigate("/api/profile");
          NotificationManager.success("Success message", "Title here");
        } else if (response.data.StatusCode === 201) {
          setUserResp(response.data.Message);
          setLoad(false);
          setInvalid(true);
        } else if (response.data.StatusCode === 203) {
          setUserResp(response.data.Message);
          setLoad(false);
          setInvalid(true);
        }
      });
    }

    // console.log(email);
  };
  // WEZBUEtHdWZReUhHRFFCUTg0Tlg6MTpjaQ;
  // r5v8wdjjJ9IDQlZXNJ - UcJECAKGn4Saf5i3OdyJpaZiBILqswr;

  return (
    <>
      <div className="modal-body" id="tt">
        <div className="log-pop ">
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
            </div>
            <div className="login">
              <p>Or Login With Email</p>
              <div className="log">
                <form onSubmit={validation}>
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
                        Please Enter Your Email
                      </span>
                    )}
                  </div>
                  <div className="input form-gropu">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      value={pass}
                      onChange={(e) => {
                        setPass(e.target.value);
                        setPassErr(false);
                        setInvalid(false);
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
                        Please Enter Your Password
                      </span>
                    )}
                  </div>
                  {invalid && (
                    <span
                      style={{
                        color: "red",
                        float: "left",
                        marginBottom: "5px",
                      }}
                    >
                      {userResp}
                    </span>
                  )}
                  <div className="check">
                    <input type="checkbox" id="checkBox" />
                    <span>Keep me Logged in</span>
                    <span className="forgetPass">Forget password?</span>
                  </div>
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
                    Log in
                  </button>
                </form>
              </div>
              <div className="register">
                Don't have an account?
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  onClick={() => {
                    setEmailErr(false);
                    setPassErr(false);
                  }}
                >
                  Register
                </span>
              </div>
            </div>
          </div>

          <div className="slider">
            <Slider user={user} />
          </div>
        </div>
      </div>

      {/* <a
        className="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Login
      </a> */}

      {/*<button onClick={open}>Login</button>
       <Modal>
        <div className="modal">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="socialMedia">
              <button className="fb">Facebook</button>
              <button className="twit">Twiter</button>
              <button className="goog">Google</button>
            </div>
            <div className="login">
              <p>Or Login With Email</p>
              <div className="log">
                <form>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </form>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-danger">Yes</button>
            <button className="btn btn-primary" onClick={close}>
              No
            </button>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default Login;
