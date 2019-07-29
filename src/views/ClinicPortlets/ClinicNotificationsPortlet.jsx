import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import {
  FormControlLabel,
  FormHelperText,
  Divider,
  Input,
  FormControl,
  FormGroup,
  Checkbox
} from "@material-ui/core";

import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide";
import { setConstantValue } from "typescript";
import { Info, Help } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class ClinicNotificationsPortlet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, ...rest } = this.props;
    const open = Boolean(true);
    // const handleHighPressureInputChange = event => {
    //   setConstantValue(
    //     event.target.value === "" ? "" : Number(event.target.value)
    //   );
    // };

    // const handleLowPressureInputChange = event => {
    //   setConstantValue(
    //     event.target.value === "" ? "" : Number(event.target.value)
    //   );
    // };

    // const handleRapidPressureInputChange = event => {
    //   setConstantValue(
    //     event.target.value === "" ? "" : Number(event.target.value)
    //   );
    // };

    // const handleNoPressureReadingsInputChange = event => {
    //   setConstantValue(
    //     event.target.value === "" ? "" : Number(event.target.value)
    //   );
    // };

    // const handleFirstPressureReadingInputChange = event => {
    //   setConstantValue(
    //     event.target.value === "" ? "" : Number(event.target.value)
    //   );
    // };

    return (
      <div>
        <Divider />
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} justify>
            <div className={classNames(classes.main)}>
              <br />
              <div className={classes.container}>
                <br />
                <div className={classes.header}>Clinical Notifications</div>
                <br />
                <Divider />
                <br />
                <h3>
                  <small>Primary Notifications</small>
                </h3>
                <FormHelperText>
                  <h5>
                    <Info color="primary" />
                    <small style={{ fontStyle: "italic" }}>
                      These notifications are based on the patient's primary
                      metric (PA Diastolic pressure or PA Mean pressure).
                    </small>
                  </h5>
                </FormHelperText>
                <br />
                <FormControl component="fieldset">
                  <FormGroup>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="High pressure reading greater than"
                        />
                        <Input
                          className={classes.input}
                          value={8}
                          margin="dense"
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
                        mmHG from optimal range
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Low pressure reading less than"
                        />
                        <Input
                          className={classes.input}
                          value={5}
                          margin="dense"
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
                        mmHG from optimal range
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="Rapid pressure change of"
                        />
                        <Input
                          className={classes.input}
                          value={8}
                          margin="dense"
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
                        mmHG over 1 day(s)
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Pressure readings transitioned from High to Low range (without patient returning to optimal state)"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="Pressure readings transitioned from Low to High range (without patient returning to optimal state)"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="1 reading above optimal range"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="1 reading below optimal range"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="3 readings above optimal range"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="3 readings below optimal range"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="7 or more readings above optimal range"
                        />
                      </span>
                    </p>

                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="7 or more readings below optimal range"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="Patient returns to optimal state after medication change"
                        />
                        <Help
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          aria-haspopup="true"
                          onMouseEnter={true}
                          onMouseLeave={false}
                          color="primary"
                        />
                      </span>
                    </p>
                  </FormGroup>
                </FormControl>
              </div>
            </div>
          </GridItem>

          {/* Administrative Notifications */}
          <GridItem xs={12} sm={12} md={6} justify>
            <div className={classNames(classes.main)}>
              <br />
              <div className={classes.container}>
                <br />
                <div className={classes.header}>
                  Administrative Notifications
                </div>
                <br />
                <Divider />
                <br />
                <FormControl component="fieldset">
                  <FormGroup>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="No pressure readings for"
                        />
                        <Input
                          className={classes.input}
                          value={4}
                          margin="dense"
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
                        day(s)
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="First pressure reading after"
                        />
                        <Input
                          className={classes.input}
                          value={1}
                          margin="dense"
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
                        day(s)
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          margin="dense"
                          label="Pressure reading is suspect"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Patient review reminder"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Patient does not have pressure goal established"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="First home reading from a patient after enrollment or transfer"
                        />
                      </span>
                    </p>
                  </FormGroup>
                </FormControl>
              </div>
            </div>
          </GridItem>

          {/* Other Notifications */}
          <GridItem xs={12} sm={12} md={6} justify>
            <br />
            <div className={classNames(classes.main)}>
              <div className={classes.container}>
                <br />
                <div className={classes.header}>Other Notifications</div>
                <br />
                <Divider />
                <br />
                <FormHelperText>
                  <h5>
                    <Info color="primary" />
                    <small style={{ fontStyle: "italic" }}>
                      These notifications are detected only if the associated
                      thresholds have been set up.
                    </small>
                  </h5>
                </FormHelperText>
                <br />
                <FormControl component="fieldset">
                  <FormGroup>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Diastolic pressure out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="Diastolic pressure trend out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="Mean pressure out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Mean pressure trend out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Heart rate out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Pulse pressure out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Systolic pressure out of threshold"
                        />
                      </span>
                    </p>
                    <p>
                      <span>
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Systolic pressure trend out of threshold"
                        />
                      </span>
                    </p>
                  </FormGroup>
                </FormControl>
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
ClinicNotificationsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicNotificationsPortlet);
