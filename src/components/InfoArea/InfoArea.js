import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "react-bootstrap";
import styles from "assets/jss/material-kit-react/views/components.js";
import "assets/css/components/infoAreaStyle.css";
import "assets/css/effects/glitch.css";
// @material-ui/icons
// core components
import Welcome from "components/Welcome/Welcome.js";
import "assets/css/components/musicPlayerStyle.css";
const useStyles = makeStyles(styles);

export default function InfoArea() {
  const classes = useStyles();
  const [audio] = useState(
    new Audio(require("assets/audio/waiting-for-love.mp3"))
  );
  const [play, setPlay] = useState(false);
  const [, setControlPanel] = useState("control-panel");
  const [, setInfoBar] = useState("info");

  const start = () => {
    if (play) {
      audio.pause();
      setControlPanel("control-panel");
      setInfoBar("info");
    } else {
      audio.play();
      setControlPanel("control-panel active");
      setInfoBar("info active");
    }
    setPlay(!play);
  };

  return (
    <div>
      <Welcome />
      <div className={"button-player"}>
        <Image
          src={
            play
              ? require("assets/img/icons/playing.gif")
              : require("assets/img/icons/music.png")
          }
          roundedCircle
          fluid
          className={"button-play-image"}
          onClick={start}
        />
      </div>
      <div className={classes.container}></div>
    </div>
  );
}
