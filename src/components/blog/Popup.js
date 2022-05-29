import React from 'react';
import './popup.css';

function Popup({ info, setShow }) {
  return (
    <div>
      <div className="backDrop" onClick={() => setShow(false)}></div>
      <div className="mainBlog-popup">
        <div className="blogPopup">
          <img
            src="https://bdnmb.ca/wp-content/uploads/2020/06/pexels-photo-106399.jpeg"
            alt="Property"
          />
          <div className="info">
            <div className="top">
              <p className="btn btn-primary"> Purpose</p>
              <p className="btn btn-primary"> Purpose</p>
              <p className="btn btn-primary"> Purpose</p>
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
            <div className="exit">
              <button
                className="btn btn-primary close"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
