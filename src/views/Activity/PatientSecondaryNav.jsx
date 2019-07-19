import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Button from "components/CustomButtons/Button.jsx";

class PatientSecondaryNav extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.section}
        style={{ paddingTop: 20 + "px", paddingBottom: 20 + "px" }}
      >
        <div className={classes.container}>
          <GridContainer style={{ textAlign: "center" }}>
            <GridItem xs={12} sm={12} md={12}>
              <Link to={"/activity/patient/1"}>
                <Button color="primary">Activity</Button>
              </Link>
              <Link to={"/settings/patient/1"}>
                <Button color="primary">Settings</Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

PatientSecondaryNav.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(PatientSecondaryNav);
