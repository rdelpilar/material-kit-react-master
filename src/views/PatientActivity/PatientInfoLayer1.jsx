import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Actions from "views/Actions/Actions";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle";

class PatientInfoLayer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: null,
      dob: null
    };
  }
  componentDidMount() {
    const { state } = this.props;
    this.setState({
      patientName: state.patientName,
      dob: state.dob
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    const { patientName, dob } = this.state;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer style={{ justify: "space-between" }}>
            <GridItem xs={12} sm={3} md={3}>
              <div className={classes.header} style={{ paddingTop: 35 + "px" }}>
                {patientName}
              </div>
            </GridItem>
            <GridItem xs={12} sm={5} md={6}>
              <div style={{ paddingTop: 40 + "px" }}>{dob}</div>
            </GridItem>
            <GridItem xs={12} sm={1} md={1}>
              <Actions></Actions>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(PatientInfoLayer1);
