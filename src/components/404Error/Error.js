import React from "react";
import { useNavigate } from "react-router-dom";
import errImg from "../images/404Err.png";
import "./error.css";
function Error() {
  const navigate = useNavigate();

  return (
    <div className="err">
      <div className="pageErr">
        <img src={errImg} alt={errImg} />
        <h3>Oops! This Page Could Not Be Found</h3>
        <p>
          SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN
          REMOVED, NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
        </p>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Go to Home Page
        </button>
      </div>
    </div>
  );
}

export default Error;
