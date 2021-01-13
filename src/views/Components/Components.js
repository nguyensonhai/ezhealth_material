import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";

import Projects from "components/Projects/Projects.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Bottom from "components/Bottom/Bottom.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import "assets/css/effects/index.css";
import "assets/css/effects/span-hover.css";
import "assets/css/effects/font.css";
import "assets/css/effects/scrollbar.css";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className={"main"}>
      <Header
        brand="Easy Health"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/stocks/background_dark.jpg")}>
        <InfoArea />
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{
          backgroundColor: "white",
          transition: "all 0.6s ease",
        }}
      >
        <Projects />
      </div>
      <Bottom />
      {/* <SectionCarousel /> */}
    </div>
  );
}
