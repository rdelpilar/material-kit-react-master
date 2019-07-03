/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://t4pilot.merlin.net/documents/35011/701468/Terms_and_Conditions.pdf"
                className={classes.block}
                target="_blank"
              >
                Website Terms of Use
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://t4pilot.merlin.net/documents/35011/701476/Clinic_Terms_and_Conditions_US.pdf"
                className={classes.block}
                target="_blank"
              >
                Clinic Terms and Conditions
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://t4pilot.merlin.net/documents/35011/701468/Privacy_Policy.pdf"
                className={classes.block}
                target="_blank"
              >
                Privacy Policy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="javascript:void(0)"
                className={classes.block}
                target="_blank"
              >
                Contact Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.cardiovascular.abbott/"
                className={classes.block}
                target="_blank"
              >
                www.cardiovascular.abbott
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
