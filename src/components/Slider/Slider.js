import React, { Component } from "react";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./slider.css";
import { motion } from "framer-motion";
class Slider extends Component {
  render() {
    return (
      <div className="container" fluid>
        <div className={"sliderContainer"}>
          <section id="slider">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label for="s1" id="slide1"></label>
            <label for="s2" id="slide2"></label>
            <label for="s3" id="slide3"></label>
            <label for="s4" id="slide4"></label>
            <label for="s5" id="slide5"></label>
          </section>
        </div>
        <div className={"bottom"}></div>
      </div>
    );
  }
}

export default Slider;
