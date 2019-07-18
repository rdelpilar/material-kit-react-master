import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import TextField from "@material-ui/core/TextField";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class ActivityNotification extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.section}
        style={{ paddingTop: 0 + "px", paddingBottom: 10 + "px", backgroundColor: "#FFF" }}
      >
        <div className={classes.container} style={{ maxWidth: 85 + "%" }}>
          <div id="nav-tabs">
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <h4>
                  <small>Notification / Date</small>
                </h4>
                <h4>
                  <small>No PA Pressure goal Established / 07-31-2019</small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <h4>
                  <small>Goal / Type</small>
                </h4>
                <h4>
                  <small>No Goal Set / PA Mean</small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <h4>
                  <small>Last Reading</small>
                </h4>
                <h4>
                  <small></small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <h4>
                  <small>Actions</small>
                </h4>
                <h4>
                  <small></small>
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ActivityNotification);
