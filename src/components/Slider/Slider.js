import React, { Component } from "react";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./slider.css";
import { motion } from "framer-motion";
class Slider extends Component {
  render() {
    return (
      <div className="container" fluid>
        {/* <div className={"download"}>
          <div className="titleContainerEz">
            <p id="ez">Ez</p>
            <p id="health">Health</p>
          </div>
          <a
            data-scroll
            href="https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/android%2Fezhealth-v.1.0.0.apk?alt=media&token=450f0d1e-7ba2-4ae3-ac5e-b944b515cf9b"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="product__info__btnDownload "
              style={{ marginTop: "0px" }}
            >
              <i class="fa fa-arrow-down"> GET IT NOW</i>
            </motion.button>
          </a>
        </div> */}
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
