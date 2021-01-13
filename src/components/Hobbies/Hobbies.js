import React from "react";
import "assets/css/components/hobbiesStyle.css";

export default function Hobbies() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";

  return (
    <div id="myhobbies">
      <div className="span-container red">
        <span
          style={{
            color: textColor,
          }}
          className={themes === "dark" ? "cta-dark" : "cta red-cta"}
        >
          <span style={{ color: textColor }} className="spandark">
            My hobbies
          </span>
        </span>
      </div>
      <div className="hobbies">
        <span
          style={{ color: textColor }}
          data-title="Coding"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/coding.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Coding <br /> <br />
          </span>
        </span>
        <span
          data-title="Listening to Music"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={
              themes === "dark"
                ? require("assets/img/icons/headphone-white.png")
                : require("assets/img/icons/headphone.png")
            }
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Listening to Music <br /> <br />
          </span>
        </span>
        <span
          style={{ color: textColor }}
          data-title="Making Music"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/music.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Making Music <br /> <br />
          </span>
        </span>
        <span
          style={{ color: textColor }}
          data-title="Stargazing"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/telescope.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Stargazing <br /> <br />
          </span>
        </span>
        <span
          data-title="Playing Video Games"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/videogames.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Playing Video Games <br /> <br />
          </span>
        </span>
        <span
          data-title="Playing Football"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/goal.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Playing Football <br /> <br />
          </span>
        </span>
        <span
          style={{ color: textColor }}
          data-title="Playing Tennis"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/tennis.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Playing Tennis <br /> <br />
          </span>
        </span>
        <span
          style={{ color: textColor }}
          data-title="Kite Flying"
          className="hobbiesSvg"
          alt="hobbies"
        >
          <img
            src={require("assets/img/icons/kite.svg")}
            className={"trans"}
            alt={"hobbies-trans"}
          />
          <span style={{ color: textColor }} className="spanHobbies">
            {" "}
            Kite Flying <br /> <br />
          </span>
        </span>
      </div>
    </div>
  );
}
