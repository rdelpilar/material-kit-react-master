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
import { deepOrange, deepPurple, indigo } from "@material-ui/core/colors";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import {
  Avatar
} from "@material-ui/core";
function HeaderLinksRight({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <Avatar style={{ margin: 10, color: "#fff", backgroundColor: "white", height: 38, width: 38 }}><Link to="/my-account" style={{ color: "#009CDE" }}>SU</Link></Avatar>
      </ListItem>
      <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <CustomDropdown
          noLiPadding
          buttonText="Help"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Help}
          dropdownList={[
            <Link to="/help" className={classes.dropdownLink}>
              Help
            </Link>,
            <a
              href="/learn-more"
              className={classes.dropdownLink}
            >
              Learn More
            </a>,
            <Link to="/about" className={classes.dropdownLink}>
                About
            </Link>,
            <Link to="/practice-site" className={classes.dropdownLink}>
                Practice Site
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <CustomDropdown
          noLiPadding
          buttonText="Switch To"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={CompareArrows}
          dropdownList={[
            <Link to="/ep" className={classes.dropdownLink}>
              Arrhythmia & Device Management
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <Button
          href="/sign-out"
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
