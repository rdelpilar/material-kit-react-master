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
  FormGroup,
  Input,
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

function createData(primaryMetric, phase, defaultOptimalRange) {
  return { primaryMetric, phase, defaultOptimalRange };
}

class GoalsAndThresholdsPortlet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, ...rest } = this.props;

    const rows = [
      createData(
        "PA Diastolic Pressure:",
        "Optimization",
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <p>
                <span>
                  Goal +/-
                  <Input
                    className={classes.input}
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      width: "20%"
                    }}
                    value={7}
                    margin="normal"
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 50,
                      type: "number",
                      "aria-labelledby": "input-slider"
                    }}
                  />
                  mmHg
                </span>
              </p>
            </FormGroup>
          </FormControl>
        </div>
      ),
      createData(
        "PA Diastolic Pressure",
        "Maintenance",
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <p>
                <span>
                  Goal +/-
                  <Input
                    className={classes.input}
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      width: "20%"
                    }}
                    value={3}
                    margin="normal"
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 50,
                      type: "number",
                      "aria-labelledby": "input-slider"
                    }}
                  />
                  mmHg
                </span>
              </p>
            </FormGroup>
          </FormControl>
        </div>
      ),
      createData(
        "PA Mean Pressure",
        "Optimization",
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <p>
                <span>
                  Goal +/-
                  <Input
                    className={classes.input}
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      width: "20%"
                    }}
                    value={3}
                    margin="normal"
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 50,
                      type: "number",
                      "aria-labelledby": "input-slider"
                    }}
                  />
                  mmHg
                </span>
              </p>
            </FormGroup>
          </FormControl>
        </div>
      ),
      createData(
        "PA Mean Pressure",
        "Maintenance",
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <p>
                <span>
                  Goal +/-
                  <Input
                    className={classes.input}
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      width: "20%"
                    }}
                    value={3}
                    margin="normal"
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 50,
                      type: "number",
                      "aria-labelledby": "input-slider"
                    }}
                  />
                  mmHg
                </span>
              </p>
            </FormGroup>
          </FormControl>
        </div>
      )
    ];

    return (
      <div>
        <Divider />
        <br />
        <h5>
          <small>
            <div style={{ marginLeft: "2%" }}>
              <Info color="primary" />
              These settings will be applied as the default settings for newly
              enrolled PA Sensor patients. They can be modified per patient in
              the patient's settings.
            </div>
          </small>
        </h5>

        <GridContainer>
          {/* Primary Metric */}
          <GridItem xs={12} sm={12} md={6}>
            <div className={classNames(classes.main)}>
              <br />
              <div className={classNames(classes.section, classes.mainRaised)}>
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    Primary Metric
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <FormHelperText>
                    <h5>
                      <Info color="primary" />
                      <small style={{ fontStyle: "italic" }}>
                        Select the Primary Metric that your clinic will use to
                        monitor most of your patients. (This can be modified on
                        a per-patient basis as necessary)
                      </small>
                    </h5>
                  </FormHelperText>
                  <br />
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                  >
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
                    </RadioGroup>
                  </FormControl>
                </div>
                <br />
              </div>
            </div>
          </GridItem>

          {/* Return to optimal state thresholds */}
          <GridItem xs={12} sm={12} md={6} justify>
            <div className={classNames(classes.main)}>
              <br />
              <div className={classNames(classes.section, classes.mainRaised)}>
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    Return to Optimal State Threshold
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <FormHelperText>
                    <h5>
                      <Info color="primary" />
                      <small style={{ fontStyle: "italic" }}>
                        Define how many consecutive readings in the optimal
                        range are needed to consider the patient to be in an
                        optimal state.
                      </small>
                    </h5>
                  </FormHelperText>
                  <br />
                  <FormControl component="fieldset">
                    <FormGroup>
                      <p>
                        <span>
                          Optimal State Threshold:
                          <Input
                            className={classes.input}
                            style={{
                              marginLeft: "5px",
                              marginRight: "5px",
                              width: "10%"
                            }}
                            value={6}
                            margin="normal"
                            // onChange={handleInputChange}
                            // onBlur={handleBlur}
                            inputProps={{
                              step: 1,
                              min: 1,
                              max: 50,
                              type: "number",
                              "aria-labelledby": "input-slider"
                            }}
                          />
                          consecutive readings.
                        </span>
                      </p>
                    </FormGroup>
                  </FormControl>
                </div>
                <br />
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <br />

        {/* Optimal range default settings for primary metric */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classNames(classes.main)}>
              <br />
              <div className={classNames(classes.section, classes.mainRaised)}>
                <div className={classes.container}>
                  <br />
                  <div className={classes.header}>
                    Optimal Range Default Settings for Primary Metric
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <FormHelperText>
                    <h5>
                      <small style={{ fontStyle: "italic" }}>
                        Define the optimal range values that will be used when a
                        goal for a patient's Primary Metric is set.
                      </small>
                    </h5>
                  </FormHelperText>
                  <br />
                  <Paper className={classes.root} style={{ overflowX: "auto" }}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Primary Metric</TableCell>
                          <TableCell>Phase</TableCell>
                          <TableCell>Default Optimal Range</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => {
                          return (
                            <TableRow key={row.name}>
                              <TableCell>{row.primaryMetric}</TableCell>
                              <TableCell>{row.phase}</TableCell>
                              <TableCell>{row.defaultOptimalRange}</TableCell>
                            </TableRow>
                          );
                        })}
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
            <br />
            <div
              className={classes.header}
              style={{ textTransform: "uppercase" }}
            >
              <GridContainer style={{ textAlign: "right" }}>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">Cancel</Button>
                  <Button>Save</Button>
                </GridItem>
              </GridContainer>
            </div>
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
