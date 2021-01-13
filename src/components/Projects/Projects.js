import React from "react";
import SliderEzHealth from "components/Slider/SliderEzHealth.js";
import VideoPlayer from "components/VideoPlayer/VideoPlayer.js";
import "assets/css/components/projectsStyle.css";
import "assets/css/effects/hover-features.css";
import "assets/css/effects/diamond-shape-grid.css";
import playStoreBlack from "assets/img/store/ps-b.png";
import playStoreWhite from "assets/img/store/ps-w.png";
import appleStoreBlack from "assets/img/store/as-b.png";
import appleStoreWhite from "assets/img/store/as-w.png";

export default function Projects() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";
  return (
    <div id="myprojects">
      <div className="span-container yellow">
        <span
          style={{ color: textColor }}
          className={themes === "dark" ? "cta-dark" : "cta yellow-cta"}
        >
          <span style={{ color: textColor }} className="spandark">
            Easy Health
          </span>
        </span>
      </div>
      {/* Ez Health */}
      <div className="project-container">
        <div className="project-info">
          <img
            src={require("assets/img/apps/ezhealth/ezhealth.png")}
            className="project-logo"
            alt="project-logo"
          />
          <span style={{ color: textColor }} className="project-name">
            Ez Health: Health & Fitness Solutions
          </span>
          <span style={{ color: textColor }} className="project-decr">
            Healthy is something that is on everyone’s mind at some point. We
            put a bit of a focus on eating, fitness and plan your healthy life
            cycle with this one. We have more colorful style features for you.
          </span>
          <div id="s-km-web" style={{ marginTop: 10 }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.ezratech.ezhealth"
              className="projects-km-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={themes === "dark" ? playStoreWhite : playStoreBlack}
                className="project-playstore-img"
                alt="store-logo"
              />
            </a>
            <div className="projects-km-text" rel="noopener noreferrer">
              <img
                src={themes === "dark" ? appleStoreWhite : appleStoreBlack}
                className="project-playstore-img"
                style={{ opacity: 0.5 }}
                alt="store-logo"
              />
            </div>
          </div>
        </div>
        <SliderEzHealth />
      </div>
      <div className={"features-body"}>
        {/* Food Choices */}
        <div className="features-container">
          <div className="featuresImage foodsImg"></div>
          <div className="featuresName">Food Choices</div>
        </div>
        {/* Rest */}
        <div className="features-container">
          <div className="featuresImage restImg"></div>
          <div className="featuresName">Rest</div>
        </div>
        {/* Fitness */}
        <div className="features-container">
          <div className="featuresImage fitnessImg"></div>
          <div className="featuresName">Fitness</div>
        </div>
        {/* Challenges */}
        <div className="features-container">
          <div className="featuresImage challengesImg"></div>
          <div className="featuresName">Challenges</div>
        </div>{" "}
        {/* Meditation */}
        <div className="features-container">
          <div className="featuresImage meditationImg"></div>
          <div className="featuresName">Meditation</div>
        </div>{" "}
        {/* Sleepy Sounds */}
        <div className="features-container">
          <div className="featuresImage sleepyImg"></div>
          <div className="featuresName">Sleepy Sounds</div>
        </div>
      </div>
      <VideoPlayer
        src={require("assets/videos/ezhealth.mp4")}
        bgColor={"#010101"}
      />
      <div className="projects-km" id="s-km-mobile" style={{ marginTop: 10 }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.ezratech.ezhealth"
          className="projects-km-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={themes === "dark" ? playStoreWhite : playStoreBlack}
            className="project-playstore-img"
            alt="store-logo"
          />
        </a>
        <div className="projects-km-text" rel="noopener noreferrer">
          <img
            src={themes === "dark" ? appleStoreWhite : appleStoreBlack}
            className="project-playstore-img"
            alt="store-logo"
            style={{ opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
