import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

class MakeMedicationListChange extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer style={{ height: 50, maxWidth: "99%" }}>
          <br />
        </GridContainer>
        <GridContainer style={{ maxWidth: "99%" }}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <br />
                <div className={classes.container}>
                  <span>
                    If you document medication changes in the Merlin.net
                    Medication list, select the link below to make a change
                  </span>
                </div>
              </div>
              <div className={classNames(classes.section)}>
                <br />
                <div className={classes.container}>
                  <a style={{ color: "#009CDE" }}>Medication List</a>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

MakeMedicationListChange.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(MakeMedicationListChange);
