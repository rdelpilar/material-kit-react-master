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
import { Apps, CloudDownload, ViewHeadline } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinksLeft({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <CustomDropdown
            noLiPadding
            buttonText="Notifications"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={ViewHeadline}
            dropdownList={[
              <Link to="/notifications" className={classes.dropdownLink}>
                Material Table (Default)
              </Link>,
              <a
                href="/notifications-mui2"
                className={classes.dropdownLink}
              >
                MUI Table
              </a>,
              <Link to="/notifications-jquery" className={classes.dropdownLink}>
                  jQuery Table
              </Link>
            ]}
          />
      </ListItem>
      <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <Button
          href="/all-patients"
          color="transparent"
          className={classes.navLink}
        >
          All Patients
        </Button>
      </ListItem>
      <ListItem className={classes.listItem} style={{paddingRight: "5px", paddingLeft: "5px"}}>
        <Button
          href="/clinic-settings"
          color="transparent"
          className={classes.navLink}
        >
          Clinic
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksLeft);
