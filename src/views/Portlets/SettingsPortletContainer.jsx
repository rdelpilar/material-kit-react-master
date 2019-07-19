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

class SettingsPortletsContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Patient Profile</Typography>
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
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              myCardioMEMS Mobile Application
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
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Diagnoses</Typography>
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
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Goals and Thresholds
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
            <Typography className={classes.heading}>Notifications</Typography>
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
            <Typography className={classes.heading}>Notifications</Typography>
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
              Hospitalizations
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
            <Typography className={classes.heading}>Notes</Typography>
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
