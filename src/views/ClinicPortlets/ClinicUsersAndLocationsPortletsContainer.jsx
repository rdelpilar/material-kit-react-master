import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClinicUsersPortlet from "./ClinicUsersPortlet";
import ClinicLocationsPortlet from "./ClinicLocationsPortlet";

class ClinicUsersAndLocationsPortletsContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="clinicUsersPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Users</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ClinicUsersPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="clinicLocations"
          >
            <Typography className={classes.heading}>
              <h4>Locations</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ClinicLocationsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ClinicUsersAndLocationsPortletsContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicUsersAndLocationsPortletsContainer);
