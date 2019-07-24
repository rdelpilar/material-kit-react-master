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
import PatientProfilePortlet from "./PatientProfilePortlet";
import CardioMemsPortlet from "./CardioMemsPortlet";
import DiagnosisPortlet from "./DiagnosisPortlet";
import MedicationsPortlet from "./MedicationsPortlet";
import GoalsAndThresholdsPortlet from "./GoalsAndThresholdsPortlet";
import NotificationsPortlet from "./NotificationsPortlet";

class SettingsPortletsContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="patientProfilePortlet"
          >
            <Typography className={classes.heading}>
              <h4>Patient Profile</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div
              className={classNames(classes.main, classes.mainRaised)}
              style={{ width: "100%" }}
            >
              <PatientProfilePortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="myCardioMemsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>myCardioMEMS Mobile Application</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div
              className={classNames(classes.main, classes.mainRaised)}
              style={{ width: "100%" }}
            >
              <CardioMemsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="diagnosesPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Diagnoses</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div
              className={classNames(classes.main, classes.mainRaised)}
              style={{ width: "100%" }}
            >
              <DiagnosisPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="medicationsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Medications</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div
              className={classNames(classes.main, classes.mainRaised)}
              style={{ width: "100%" }}
            >
              <MedicationsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="goalsAndThresholdsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Goals and Thresholds</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <GoalsAndThresholdsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="notificationsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Notifications</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <NotificationsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              <h4>Hospitalizations</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classNames(classes.main, classes.mainRaised)}></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              <h4>Notes</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classNames(classes.main, classes.mainRaised)}></div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

SettingsPortletsContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(SettingsPortletsContainer);
