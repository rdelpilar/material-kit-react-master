import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle";

class Actions extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div style={{ marginTop: 10 + "px" }}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="More Actions"
              buttonIcon="more_vert"
              buttonProps={{
                color: "primary"
              }}
              dropdownList={[
                <Link to="/inactivate" className={classes.dropdownLink}>
                  Inactivate
                </Link>,
                <a href="/add-intervention" className={classes.dropdownLink}>
                  Add Intervention
                </a>,
                <Link to="/add-clinical-note" className={classes.dropdownLink}>
                  Add Clinical Note
                </Link>,
                <Link to="/remind-me" className={classes.dropdownLink}>
                  Remind Me
                </Link>
              ]}
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(Actions);
