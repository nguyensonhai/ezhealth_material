import React from "react";
import "assets/css/components/thingsStyle.css";

export default function ThingsIDo() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";

  return (
    <div id="whatido">
      <div className="span-container blue">
        <span
          style={{ color: textColor }}
          className={themes === "dark" ? "cta-dark" : "cta blue-cta"}
        >
          <span style={{ color: textColor }} className="spandark">
            What I do
          </span>
        </span>
      </div>
      <div className="things-container">
        {/* Designer */}
        <div className={"dev-container"}>
          <div className="product">
            <div
              className="effect-1"
              style={{
                background: themes === "dark" ? "#FFFFFF" : "#121212",
                mixBlendMode: themes === "dark" ? "normal" : "multiply",
              }}
            ></div>
            <div
              className="effect-2"
              style={{
                background: themes === "dark" ? "#369FD4" : "#369FD4",
                mixBlendMode: themes === "dark" ? "normal" : "multiply",
              }}
            ></div>
            <div
              className="content"
              style={{
                background: themes === "dark" ? "#292E34" : "#CEE8F5",
              }}
            >
              <img
                src={
                  themes === "dark"
                    ? require("assets/img/things/designer-white.png")
                    : require("assets/img/things/designer.png")
                }
                className={"dev-img"}
                alt={"dev-img"}
              />
            </div>
          </div>
          <span className={"dev-span blue"}>Designer</span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            I value simple content structure, colorful design, and thoughtful
            interactions.
          </span>
          <span style={{ color: textColor }} className={"dev-second-span"}>
            Things I like designing:
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            UX, UI, Web, Mobile, Apps, Logos.
          </span>
          <span style={{ color: textColor }} className={"dev-second-span"}>
            Design Tools:
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Abode XD
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Abode Photoshop
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Abode Illustrator
          </span>
        </div>
        {/* Web Developer */}
        <div className={"line"}></div>
        <div className={"dev-container"}>
          <div className="product">
            <div
              className="effect-1"
              style={{
                background: themes === "dark" ? "#FFFFFF" : "#121212",
                mixBlendMode: themes === "dark" ? "normal" : "multiply",
              }}
            ></div>
            <div
              className="effect-2"
              style={{
                background: themes === "dark" ? "#FFBE62" : "#FFBE62",
                mixBlendMode: themes === "dark" ? "normal" : "multiply",
              }}
            ></div>
            <div
              className="content"
              style={{
                background: themes === "dark" ? "#292E34" : "#FFECD2",
              }}
            >
              <img
                src={
                  themes === "dark"
                    ? require("assets/img/things/web-white.png")
                    : require("assets/img/things/web.png")
                }
                className={"dev-img"}
                alt={"dev-img"}
              />
            </div>
          </div>
          <span className={"dev-span yellow"}>Web Developer</span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </span>
          <span style={{ color: textColor }} className={"dev-second-span"}>
            Languages I speak:
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Javascipt, Python, HTML, CSS, Sass.
          </span>
          <span style={{ color: textColor }} className={"dev-second-span"}>
            Dev Tools:
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            VS Code
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Terminal
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Codepen
          </span>
        </div>
        {/* App Developer */}
        <div className={"line"}></div>
        <div className={"dev-container"}>
          <div className="product">
            <div
              className="effect-1"
              style={{
                background: themes === "dark" ? "#FFFFFF" : "#121212",
                mixBlendMode: themes === "dark" ? "normal" : "multiply",
              }}
            ></div>
            <div
              className="effect-2"
              style={{
                background: themes === "dark" ? "#FF5E4C" : "#FF5E4C",
                mixBlendMode: themes === "dark" ? "normal" : "multiply",
              }}
            ></div>
            <div
              className="content"
              style={{
                background: themes === "dark" ? "#292E34" : "#FFDDD9",
              }}
            >
              <img
                src={
                  themes === "dark"
                    ? require("assets/img/things/mobile-white.png")
                    : require("assets/img/things/mobile.png")
                }
                className={"dev-img"}
                alt={"dev-img"}
              />
            </div>
          </div>
          <span className={"dev-span orange"}>App Developer</span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            I design and code simple applications, and bringing ideas to life in
            the mobile.
          </span>
          <span style={{ color: textColor }} className={"dev-second-span"}>
            OS I enjoy buillding:
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            iOS, Android.
          </span>
          <span style={{ color: textColor }} className={"dev-second-span"}>
            Dev Tools:
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            VS Code
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Android Studio
          </span>
          <span style={{ color: textColor }} className={"dev-sub-span"}>
            Xcode
          </span>
        </div>
      </div>
    </div>
  );
}
