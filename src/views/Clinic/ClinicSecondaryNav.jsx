import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Button from "components/CustomButtons/Button.jsx";

class ClinicSecondaryNav extends React.Component {
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
              <Link to={"/clinic-settings"}>
                <Button color="primary">Settings</Button>
              </Link>
              <Link to={"/users-and-locations"}>
                <Button color="primary">Users & Locations</Button>
              </Link>
              <Link to={"/clinic-history"}>
                <Button color="primary">History</Button>
              </Link>
              <Link to={"/drugs-and-medical-conditions"}>
                <Button color="primary">Drugs & Medical Conditions</Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ClinicSecondaryNav.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicSecondaryNav);
