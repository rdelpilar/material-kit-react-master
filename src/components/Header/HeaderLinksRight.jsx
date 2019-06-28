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
import { Apps, CloudDownload, Help, CompareArrows } from "@material-ui/icons";
import Favorite from "@material-ui/icons/Favorite";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinksRight({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button
            justIcon
            round
            href="#"
            color="transparent"
            onClick={e => e.preventDefault()}
            className={classes.navLink}
            >
                <div className={classes.typo}>
                    <h3 className={classes.note}>SU</h3>
              </div>
            </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Help"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Help}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Help
            </Link>,
            <a
              href="#"
              className={classes.dropdownLink}
            >
              Learn More
            </a>,
            <Link to="/" className={classes.dropdownLink}>
                About
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
                Practice Site
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Switch To"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={CompareArrows}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Arrhythmia & Device Management
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
        Sign Out
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksRight);
