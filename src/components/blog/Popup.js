import React from 'react';
import './popup.css';

function Popup({ info, setShow }) {
  return (
    <div className="mainBlog-popup">
      <div className="blogPopup">
        <img src="" alt="Property" />
        <div className="info">
          <div className="top">
            <span className="btn btnprimary"> Purpose</span>
            <span className="btn btnprimary"> Purpose</span>
            <span className="btn btnprimary"> Purpose</span>
          </div>
          <div className="description">
            <p>{info.title}</p>
            <span>{info.address}</span>
            <span>State</span>
            <span>District</span>
            <p> Rating and comment</p>
            <span>Price</span>
            <span className="btn btn-primary">Negotiable</span>
            <div>emojis</div>
            <p>description</p>
            <p>Tota Area: </p>
            <p>Tota Area: </p>
            <p>Tota Area: </p>
            <p>Tota Area: </p>
            <p>Tota Area: </p>
          </div>
          <button className="btn btn-primary" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
