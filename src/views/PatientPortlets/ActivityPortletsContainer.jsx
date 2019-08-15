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

import ReadingsPortlet from "views/PatientActivity/ReadingsPortlet";
import DirectTrendChart from "views/Charts/DirectTrendChart";
import DirectTrendChartPortlet from "views/PatientActivity/DirectTrendChartPortlet";
import RecentInterventionPortlet from "views/PatientActivity/RecentInterventionPortlet";

class ActivityPortletsContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="activityRecentIntervention"
          >
            <Typography className={classes.heading}>
              Recent Intervention
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <RecentInterventionPortlet />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="activityDTV"
          >
            <Typography className={classes.heading}>
              DirectTrend Viewer
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DirectTrendChartPortlet />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="activityReading"
          >
            <Typography className={classes.heading}>Readings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ width: "100%" }}>
              <ReadingsPortlet />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ActivityPortletsContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ActivityPortletsContainer);
