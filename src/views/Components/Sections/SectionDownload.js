/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Get It Now</h2>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="github"
              size="lg"
              href="https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/android%2Fezhealth-v.1.1-beta.apk?alt=media&token=e1019d97-9d4d-40b7-8a77-645a2c29f766"
            >
              Download for Android
            </Button>
            <Button color="rose" size="lg" href="" target="_blank">
              iOS coming soon
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} />
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} />
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} />
          </Button>
        </div>
      </div>
    </div>
  );
}
