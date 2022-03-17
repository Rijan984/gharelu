import React from "react";
import "./footer.css";
function FooterProp() {
  return (
    <div className="mainFoot">
      <div className="socialShare">
        <div>
          <h4>Social share</h4>
        </div>
        <div className="socialLink">
          <button style={{ backgroundColor: " #28589c", color: "white" }}>
            <i class="bi bi-facebook"></i> Facebook
          </button>
          <button style={{ backgroundColor: "#bb001b", color: "white" }}>
            <i class="bi bi-google"></i> Google
          </button>
          <button style={{ backgroundColor: "#0077b5", color: "white" }}>
            <i class="bi bi-linkedin"></i> Linkedin
          </button>
          <button style={{ backgroundColor: "#00acee", color: "white" }}>
            <i class="bi bi-twitter"></i> Twitter
          </button>
        </div>
      </div>
      <div className="footerProp">
        <div className="footText">
          <h3>Download Our Best Apps</h3>
          <p>Text Here</p>
        </div>
        <div className="appLink">
          <button>
            <i class="bi bi-play"></i>Play store
          </button>
          <button>
            <i class="bi bi-apple"></i>App store
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterProp;
