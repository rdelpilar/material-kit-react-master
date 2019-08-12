import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Actions from "views/Actions/Actions";
import { connect } from "react-redux";
import { getPatientInfoByIdFilter } from "redux/patientInfoSelectors";

class PatientInfoLayer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientInfo: {}
    };
  }

  componentDidMount() {}

  render() {
    const { classes, patientInfo } = this.props;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div>
            <div>
              <GridContainer style={{ justify: "space-between" }}>
                <GridItem xs={12} sm={3} md={3}>
                  <div className={classes.title} style={{ paddingTop: "10px" }}>
                    <h3>
                      <b>{patientInfo ? patientInfo.name : ""}</b>
                    </h3>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={5} md={6}>
                  <div style={{ paddingTop: "38px" }}>
                    DOB: {patientInfo ? patientInfo.dob : ""}
                  </div>
                </GridItem>
                <GridItem xs={12} sm={1} md={1}>
                  <Actions></Actions>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props;
  const patient = getPatientInfoByIdFilter(state, id);
  return { patientInfo: patient.patientInfo };
};

PatientInfoLayer1.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  id: PropTypes.string,
  patientInfo: PropTypes.object
};

const PatientInfoLayer1WithCSS = withStyles(componentsStyle)(PatientInfoLayer1);
export default connect(
  mapStateToProps,
  null
)(PatientInfoLayer1WithCSS);
