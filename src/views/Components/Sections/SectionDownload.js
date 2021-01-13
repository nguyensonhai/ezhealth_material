/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);
const cursor = {
  cursor:
    "url(https://firebasestorage.googleapis.com/v0/b/nguyensonhai-developer.appspot.com/o/cursors%2Flink.cur?alt=media&token=aa6c3a1b-3068-4e8f-8e94-43adad7bb033),pointer",
};
export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center" style={{ marginBottom: 20 }}>
            <h3
              style={{
                color: "white",
                width: "85%",
                fontFamily: "Quicksand",
                fontSize: 30,
              }}
            >
              We work hard to create beautiful applications while improving
              their usability..
            </h3>
          </GridContainer>
          <a
            id="facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=https://ezratech.web.app"
            target="_blank"
          >
            <Button color="facebook" className="btn" style={cursor}>
              <i className={classes.socials + " fab fa-facebook-square"} />
              share
            </Button>
          </a>
          <a
            id="twitter"
            href="http://www.twitter.com/share?url=https://ezratech.web.app"
            target="_blank"
            className={"nounderline"}
          >
            <Button color="twitter" className="btn" style={cursor}>
              <i className={classes.socials + " fab fa-twitter"} /> tweet
            </Button>
          </a>
          <a
            id="google"
            href="mailto:ezratechteam@gmail.com"
            target="_blank"
            className={"nounderline"}
          >
            <Button color="google" className="btn" style={cursor}>
              <i className={classes.socials + " fab fa-google"} /> mail
            </Button>
          </a>
          <a
            id="github"
            href="https://github.com/ezratech/ezhealth"
            target="_blank"
            className={"nounderline"}
          >
            <Button color="github" className="btn" style={cursor}>
              <i className={classes.socials + " fab fa-github"} /> star
            </Button>
          </a>
          <a
            id="paypal"
            href="https://www.paypal.com/paypalme/nguyensonhai"
            target="_blank"
            className={"nounderline"}
          >
            <Button color="paypal" className="btn" style={cursor}>
              <i className={classes.socials + " fab fa-paypal"} /> donate
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
