/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinksLeft({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/notifications"
          color="transparent"
          className={classes.navLink}
        >
          Notifications
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/all-patients"
          color="transparent"
          className={classes.navLink}
        >
          All Patients
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/clinic-settings"
          color="transparent"
          className={classes.navLink}
        >
          Clinic
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/notifications-mui2"
          color="transparent"
          className={classes.navLink}
        >
          MUI Table
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/notifications-jquery"
          color="transparent"
          className={classes.navLink}
        >
          jQuery table
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksLeft);
