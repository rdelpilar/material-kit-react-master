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
import ClinicPASensorPatientDefaultSettingsPortlet from "./ClinicPASensorPatientDefaultSettingsPortlet";
import ClinicThresholdsPortlet from "./ClinicThresholdsPortlet";

class ClinicSettingsPortletsContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="clinicProfilePortlet"
          >
            <Typography className={classes.heading}>
              <h4>Clinic Profile</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              {/* <PatientProfilePortlet /> */}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="clinicPASensorPatientDefaultSettingsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>PA Sensor Patient Default Settings</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ClinicPASensorPatientDefaultSettingsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="clinicThresholdsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Thresholds</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ClinicThresholdsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="clinicNotificationsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Notifications</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              {/* <MedicationsPortlet /> */}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ClinicSettingsPortletsContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicSettingsPortletsContainer);
