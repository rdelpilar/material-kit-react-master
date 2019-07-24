import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Divider
} from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import Button from "components/CustomButtons/Button.jsx";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(raMean, raMeanVal, paMean, paMeanVal) {
  return { raMean, raMeanVal, paMean, paMeanVal };
}

const rows = [
  createData("RA Mean:", "5 mmHg", "PA Mean:", "20 mmHg"),
  createData("RV Systolic:", "15 mmHg", "PA Systolic:", "4 mmHg"),
  createData("RV Diastolic:", "10 mmHg", "PA Diastolic:", "8 mmHg"),
  createData("PCWP:", "12 mmHg", "Cardiac Output:", "3 mmHg")
];

class GoalsAndThresholdsPortlet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section, classes.mainRaised)}>
                <br />
                <div className={classes.container}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                  >
                    <FormLabel component="legend">
                      <h4>
                        <small style={{ fontWeight: 500 }}>
                          1. Select the Primary Metric that will be used for
                          monitoring this patient.
                        </small>
                      </h4>
                    </FormLabel>
                    <RadioGroup
                      aria-label="primaryMetric"
                      name="primaryMetric"
                      className={classes.group}
                    >
                      <FormControlLabel
                        value="pad"
                        control={<Radio color="primary" />}
                        label="PA Diastolic Pressure"
                      />
                      <FormControlLabel
                        value="pam"
                        control={<Radio color="primary" />}
                        label="PA Mean Pressure"
                      />
                      <FormHelperText>
                        <div>
                          <Info color="primary" />
                          Changing the patient's primary Metric will reset the
                          detection of clinical Notifications.
                        </div>
                      </FormHelperText>
                    </RadioGroup>
                  </FormControl>
                </div>
                <br />
                <div className={classes.container}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                  >
                    <FormLabel component="legend">
                      <h4>
                        <small style={{ fontWeight: 500 }}>
                          2. Select the phase that the patient is in.
                        </small>
                      </h4>
                    </FormLabel>
                    <RadioGroup
                      aria-label="phase"
                      name="phase"
                      className={classes.group}
                    >
                      <FormControlLabel
                        value="optimization"
                        control={<Radio color="primary" />}
                        label="Optimization - usually the first 30-90 days after implant"
                      />
                      <FormControlLabel
                        value="maintenance"
                        control={<Radio color="primary" />}
                        label="Maintenance - patient's pressures and medications have stabilized"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <br />
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} justify>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section, classes.mainRaised)}>
                <div className={classes.container}>
                  <br />
                  <div className={classes.header}>
                    RIGHT HEART CATH IMPLANT VALUES
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <Paper className={classes.root}>
                    <Table className={classes.table}>
                      <TableHead></TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.raMean}
                            </TableCell>
                            <TableCell align="right">{row.raMeanVal}</TableCell>
                            <TableCell align="right">{row.paMean}</TableCell>
                            <TableCell align="right">{row.paMeanVal}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div
          className={classes.section}
          style={{ paddingTop: 20 + "px", paddingBottom: 20 + "px" }}
        >
          <div className={classes.container}>
            <GridContainer style={{ textAlign: "right" }}>
              <GridItem xs={12} sm={12} md={12}>
                <Button color="primary">Cancel</Button>
                <Button>Save</Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

GoalsAndThresholdsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(GoalsAndThresholdsPortlet);
