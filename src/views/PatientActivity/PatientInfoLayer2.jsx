import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

import Stars from "@material-ui/icons/Stars";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import TextField from "@material-ui/core/TextField";

class PatientInfoLayer2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: null,
      subscribingClinicians: null
    };
  }
  componentDidMount() {
    // console.log(this.props);
    const { match, location } = this.props;
    this.setState({
      patientId: match.params.id,
      subscribingClinicians: location.state.subscribingClinicians
    });

  }
  render() {
    const { classes } = this.props;
    const { patientId, subscribingClinicians } = this.state;
    return (
      <div
        className={classes.section}
        style={{
          paddingTop: 0 + "px",
          paddingBottom: 10 + "px",
          backgroundColor: "#FFF"
        }}
      >
        <div className={classes.container}>
          <div id="nav-tabs">
            <GridContainer>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>Patient ID: {patientId}</small>
                </h4>
                <h4>
                  <small>Merlin.net Number:</small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>PA Sensor:</small>
                </h4>
                <h4>
                  <small>ICD/Pacemaker:</small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>Diagnosis:</small>
                </h4>
                <h4>
                  <small></small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>Treating Physician:</small>
                </h4>
                <h4>
                  <small></small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>Subscribing Clinician(s):</small>
                </h4>
                <h4>
                  <small>{subscribingClinicians}</small>
                </h4>
                <h4>
                  <Stars color="primary" />
                  <small>&nbsp;Subscribed</small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>Note / Edit:</small>
                </h4>
                <div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label=""
                    multiline
                    rowsMax="4"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    placeholder="Add note..."
                    style={{ backgroundColor: "#FFFFFF", marginTop: 0 + "px" }}
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(PatientInfoLayer2);
