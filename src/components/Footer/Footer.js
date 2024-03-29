/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Star from "@material-ui/icons/Star";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontFamily: "Alata" }}
        >
          Privacy Policy
        </a>
        <div
          className={classes.center}
          style={{ color: "white", fontFamily: "Alata" }}
        >
          &copy; {1900 + new Date().getYear()} Ez Ratech
          {/* <Star className={classes.icon} /> */}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
