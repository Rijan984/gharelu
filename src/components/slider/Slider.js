import React from "react";
import logo from ".././images/text.png";
import "./slider.css";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  return (
    <>
      <div className="sliderImg">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img src={logo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={logo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={logo} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={logo} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
