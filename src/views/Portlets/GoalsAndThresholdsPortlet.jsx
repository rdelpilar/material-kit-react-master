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

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
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
          <GridItem xs={12} sm={12} md={6} justify>
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
                        1. Select the Primary Metric that will be used for
                        monitoring this patient.
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
                        <Info color="primary" />
                        Changing the patient's primary Metric will reset the
                        detection of clinical Notifications.
                      </FormHelperText>
                    </RadioGroup>
                  </FormControl>
                </div>
                <br />
                <br />
                <div className={classes.container}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                  >
                    <FormLabel component="legend">
                      <h4>2. Select the phase that the patient is in.</h4>
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
                      <TableHead>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
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
      </div>
    );
  }
}

GoalsAndThresholdsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(GoalsAndThresholdsPortlet);
