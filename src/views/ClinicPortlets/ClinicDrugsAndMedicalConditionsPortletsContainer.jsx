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
import ClinicDrugsPortlet from "./ClinicDrugsPortlet";
import ClinicMedicalConditionsPortlet from "./ClinicMedicalConditionsPortlet";

class ClinicDrugsAndMedicalConditionsPortletsContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="clinicDrugsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Drugs</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ClinicDrugsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="clinicMedicalConditionsPortlet"
          >
            <Typography className={classes.heading}>
              <h4>Medical Conditions</h4>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ClinicMedicalConditionsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ClinicDrugsAndMedicalConditionsPortletsContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicDrugsAndMedicalConditionsPortletsContainer);
