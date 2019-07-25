import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {
  FormControl,
  FormGroup,
  Input,
  Checkbox,
  Divider
} from "@material-ui/core";

import Button from "components/CustomButtons/Button.jsx";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(metric, active, lowerBound, upperBound, notes) {
  return { metric, active, lowerBound, upperBound, notes };
}

class ClinicThresholdsPortlet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, ...rest } = this.props;

    const rows = [
      createData(
        "PA Diastolic Pressure",
        "",
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={15}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={27}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span>
          This metric is always active at the clinic level but can be disabled
          for individual patients.
        </span>
      ),
      createData(
        "PA Mean Pressure",
        "",
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={12}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={25}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span>
          This metric is always active at the clinic level but can be disabled
          for individual patients.
        </span>
      ),
      createData(
        "PA Diastolic Trend",
        <div>
          <Checkbox
            checked={true}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox"
            }}
          />
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={1}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={2}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span></span>
      ),
      createData(
        "PA Mean Trend",
        <Checkbox
          disabled
          inputProps={{
            "aria-label": "disabled checkbox"
          }}
        />,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                disabled
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={0}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                disabled
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={0}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span></span>
      ),
      createData(
        "PA Systolic Pressure",
        <Checkbox
          checked={true}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={16}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={36}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span></span>
      ),
      createData(
        "PA Systolic Trend",
        <Checkbox
          checked={true}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={10}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={13}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span></span>
      ),
      createData(
        "Heart Rate",
        <Checkbox
          checked={true}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={5}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={10}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span></span>
      ),
      createData(
        "Pulse Pressure",
        <Checkbox
          checked={true}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox"
          }}
        />,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={11}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <div>
          <FormControl component="fieldset">
            <FormGroup>
              <Input
                className={classes.input}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                value={5}
                margin="normal"
                inputProps={{
                  step: 1,
                  min: 1,
                  max: 50,
                  type: "number",
                  "aria-labelledby": "input-slider"
                }}
              />
            </FormGroup>
          </FormControl>
        </div>,
        <span></span>
      )
    ];

    return (
      <div>
        <Divider />
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classNames(classes.main)}>
              <div className={classes.container}>
                <br />
                <Paper className={classes.root} style={{ overflowX: "auto" }}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Metric</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Lower Bound</TableCell>
                        <TableCell>Upper Bound</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => {
                        return (
                          <TableRow key={row.name}>
                            <TableCell>{row.metric}</TableCell>
                            <TableCell>{row.active}</TableCell>
                            <TableCell>{row.lowerBound}</TableCell>
                            <TableCell>{row.upperBound}</TableCell>
                            <TableCell>{row.notes}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
                <br />
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

ClinicThresholdsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicThresholdsPortlet);
