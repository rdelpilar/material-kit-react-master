import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";

import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import {
  FormControlLabel,
  Divider,
  FormControl,
  FormGroup
} from "@material-ui/core";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { CheckBox } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class HospitalizationPortlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addHospitalizationModal: false,
      admissionDate: new Date(),
      dischargeDate: new Date()
    };
  }

  handleClickOpenAddHospitalizationModal() {
    this.setState({
      addHospitalizationModal: true
    });
  }
  handleCloseAddHospitalizationModal() {
    this.setState({
      addHospitalizationModal: false
    });
  }
  handleAdmissionDateChange = date => {
    this.setState({
      admissionDate: date
    });
  };
  handleDischargeDateChange = date => {
    this.setState({
      dischargeDate: date
    });
  };
  render() {
    const { classes, ...rest } = this.props;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: "#F2F3F7", padding: "10px" }
    };

    const columns = [
      { title: "Admission", field: "admissionDate" },
      { title: "Discharge", field: "dischargeDate" },
      { title: "Duration", field: "duration" },
      { title: "Notes", field: "notes" }
    ];

    return (
      <div className={classes.section}>
        <GridContainer style={{ textAlign: "right" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              simple
              onClick={() => this.handleClickOpenAddHospitalizationModal()}
            >
              Add Hospitalization
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={this.state.addHospitalizationModal}
              // TransitionComponent={Transition}
              keepMounted
              onClose={() => this.handleCloseAddHospitalizationModal()}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                disableTypography
                className={classes.modalHeader}
                style={{ backgroundColor: "#009CDE" }}
              >
                <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
                  Add Hospitalization
                </h3>
              </DialogTitle>
              <DialogContent className={classes.modalBody}>
                <div
                  className={classes.container}
                  style={{
                    justify: "space-evenly",
                    maxWidth: "100%"
                  }}
                >
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <br />
                      <FormControl
                        className={classes.formControl}
                        style={{ width: "100%", color: "#009CDE" }}
                      >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Admission Date"
                            format="MM/dd/yyyy"
                            value={this.state.admissionDate}
                            onChange={this.handleAdmissionDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <br />
                      <FormControl
                        className={classes.formControl}
                        style={{ width: "100%", color: "#009CDE" }}
                      >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Discharge Date"
                            format="MM/dd/yyyy"
                            value={this.state.dischargeDate}
                            onChange={this.handleDischargeDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <br />
                      <FormControl
                        className={classes.formControl}
                        style={{ width: "100%", color: "#009CDE" }}
                      >
                        <FormGroup>
                          <p>
                            <span>
                              <FormControlLabel
                                control={
                                  <CheckBox checked={false} color="primary" />
                                }
                                label="No Discharge Date"
                              />
                            </span>
                          </p>
                        </FormGroup>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <br />
                      <FormControl
                        className={classes.formControl}
                        style={{ width: "100%", color: "#009CDE" }}
                      >
                        <TextField
                          label="Notes"
                          multiline
                          rows="5"
                          rowsMax="5"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          placeholder="Add notes..."
                          style={{
                            backgroundColor: "#FFFFFF",
                            marginTop: 0 + "px"
                          }}
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => this.handleCloseAddHospitalizationModal()}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => this.handleCloseAddHospitalizationModal()}
                  color="default"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
        </GridContainer>
        <Divider />
        <br />
        <div
          className={classes.section}
          style={{
            paddingTop: 0 + "px",
            paddingBottom: 10 + "px",
            backgroundColor: "#FFF"
          }}
        >
          <div className={classes.container} style={{ maxWidth: "100%" }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <MaterialTable title="" columns={columns} options={options} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
HospitalizationPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(HospitalizationPortlet);
