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
import MenuItem from "@material-ui/core/MenuItem";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import Button from "components/CustomButtons/Button.jsx";

import Primary from "components/Typography/Primary";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import { TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class MedicationsPortlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTemporaryMedicationPortal: false,
      addMedicationPortal: false
    };
  }

  handleClickOpenTemporaryMedicationModal() {
    this.setState({
      addTemporaryMedicationPortal: true
    });
  }
  handleCloseAddTemporaryMedicationModal() {
    this.setState({
      addTemporaryMedicationPortal: false
    });
  }
  handleClickOpenMedicationModal() {
    this.setState({
      addMedicationPortal: true
    });
  }
  handleCloseAddMedicationModal() {
    this.setState({
      addMedicationPortal: false
    });
  }

  render() {
    const { classes, ...rest } = this.props;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      { title: "Drug", field: "drug" },
      { title: "Class", field: "class" },
      { title: "Adjustment", field: "adjustment" },
      { title: "Date", field: "date" },
      { title: "Dose", field: "dose" },
      { title: "Frequency", field: "frequency" },
      { title: "Patient Instructions", field: "patientInstructions" },
      { title: "Clinic Comments", field: "clinicComments" },
      { title: "", field: "delete" },
      { title: "", field: "adjust" }
    ];

    const drug = [
      {
        value: "aldomet",
        label: "Aldomet"
      },
      {
        value: "aspirin",
        label: "Aspirin"
      },
      {
        value: "avapro",
        label: "Avapro"
      },
      {
        value: "benicar",
        label: "Benicar"
      }
    ];

    const strength = [
      {
        value: "kg",
        label: "kg"
      },
      {
        value: "mg",
        label: "mg"
      },
      {
        value: "g",
        label: "g"
      },
      {
        value: "mcg",
        label: "mcg"
      }
    ];

    const formType = [
      {
        value: "spray",
        label: "Spray"
      },
      {
        value: "iv",
        label: "IV"
      },
      {
        value: "tablet",
        label: "Tablet"
      },
      {
        value: "capsule",
        label: "Capsule"
      }
    ];

    const frequency = [
      {
        value: "qid",
        label: "QID"
      },
      {
        value: "bid",
        label: "BID"
      },
      {
        value: "tid",
        label: "TID"
      },
      {
        value: "qod",
        label: "QOD"
      }
    ];

    const adjustmentType = [
      {
        value: "temporary",
        label: "Temporary"
      },
      {
        value: "start",
        label: "Start"
      }
    ];

    const values = {
      strength: "mg",
      formType: "tablet",
      drug: "aldomet",
      frequency: "qid",
      adjustmentType: "temporary"
    };

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer style={{ justify: "space-between" }}>
            <GridItem xs={12} sm={12} md={4}>
              <div className={classes.header}></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                  <Button
                    color="primary"
                    simple
                    onClick={() =>
                      this.handleClickOpenTemporaryMedicationModal()
                    }
                  >
                    Add Temporary Medications
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.addTemporaryMedicationPortal}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={() =>
                      this.handleCloseAddTemporaryMedicationModal()
                    }
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      disableTypography
                      className={classes.modalHeader}
                      style={{ backgroundColor: "#009CDE" }}
                    >
                      <h3
                        className={classes.modalTitle}
                        style={{ color: "#FFFFFF" }}
                      >
                        Add Medication
                      </h3>
                    </DialogTitle>
                    <DialogContent className={classes.modalBody}>
                      <div
                        className={classes.container}
                        style={{
                          justify: "space-evenly",
                          maxWidth: "100%",
                          height: "720px",
                          width: "520px"
                        }}
                      >
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.header}>Drug</div>
                          </GridItem>
                        </GridContainer>
                        <hr />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                select
                                label="Drug"
                                className={classes.textField}
                                value={values.drug}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu
                                  }
                                }}
                                helperText="Required"
                                margin="normal"
                              >
                                {drug.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.header}>Directions</div>
                          </GridItem>
                        </GridContainer>
                        <hr />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{ textAlign: "center" }}>
                              <FormControl
                                className={classes.formControl}
                                style={{ width: "90%", color: "#009CDE" }}
                              >
                                <div style={{ textAlign: "left" }}>
                                  <small style={{ textAlign: "left" }}>
                                    Patient does not use the patient application
                                    to track medication information. Contact the
                                    patient to discuss medication updates.
                                  </small>
                                </div>
                              </FormControl>
                            </div>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControlLabel
                              control={
                                <Checkbox checked={false} color="primary" />
                              }
                              label="Use as Directed"
                            />
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              label="Dose"
                              defaultValue="Strength"
                              id="dose"
                              helperText="Required"
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              select
                              className={classes.textField}
                              value={values.strength}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu
                                }
                              }}
                              helperText="Required"
                              margin="normal"
                            >
                              {strength.map(option => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </GridItem>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              label="&nbsp;"
                              defaultValue="Qty"
                              id="quantity"
                              helperText="Required"
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              select
                              className={classes.textField}
                              value={values.formType}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu
                                }
                              }}
                              helperText="Required"
                              margin="normal"
                            >
                              {formType.map(option => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                              label="Confirm Dose"
                              defaultValue="&nbsp;"
                              id="confirm"
                              helperText="Required"
                            ></TextField>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                select
                                label="Frequency"
                                className={classes.textField}
                                value={values.frequency}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu
                                  }
                                }}
                                helperText="Required"
                                margin="normal"
                              >
                                {frequency.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                label="Patient Instructions"
                                multiline
                                rows="5"
                                rowsMax="5"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                placeholder="Patient Instructions..."
                                style={{
                                  backgroundColor: "#FFFFFF",
                                  marginTop: 0 + "px"
                                }}
                              />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.header}>Adjustment</div>
                          </GridItem>
                        </GridContainer>
                        <hr />
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                select
                                label="Type"
                                className={classes.textField}
                                value={values.adjustmentType}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu
                                  }
                                }}
                                helperText="Required"
                                margin="normal"
                              >
                                {adjustmentType.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <InputLabel shrink>
                                Start Date (Required)
                              </InputLabel>
                              <Datetime />
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <InputLabel shrink>
                                Stop Date (Required)
                              </InputLabel>
                              <Datetime />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                label="Clinic Comments"
                                multiline
                                rows="5"
                                rowsMax="5"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                placeholder="Enter clinic comments..."
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
                        onClick={() =>
                          this.handleCloseAddTemporaryMedicationModal()
                        }
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() =>
                          this.handleCloseAddTemporaryMedicationModal()
                        }
                        color="default"
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
            </GridItem>

            {/* Add Medication */}
            <GridItem xs={12} sm={12} md={4}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                  <Button
                    color="primary"
                    simple
                    onClick={() => this.handleClickOpenMedicationModal()}
                  >
                    Add Medications
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.addMedicationPortal}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleCloseAddMedicationModal()}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      disableTypography
                      className={classes.modalHeader}
                      style={{ backgroundColor: "#009CDE" }}
                    >
                      <h3
                        className={classes.modalTitle}
                        style={{ color: "#FFFFFF" }}
                      >
                        Add Medication
                      </h3>
                    </DialogTitle>
                    <DialogContent className={classes.modalBody}>
                      <div
                        className={classes.container}
                        style={{
                          justify: "space-evenly",
                          maxWidth: "100%",
                          height: "720px",
                          width: "520px"
                        }}
                      >
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.header}>Drug</div>
                          </GridItem>
                        </GridContainer>
                        <hr />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                select
                                label="Drug"
                                className={classes.textField}
                                value={values.drug}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu
                                  }
                                }}
                                helperText="Required"
                                margin="normal"
                              >
                                {drug.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControlLabel
                              control={
                                <Checkbox checked={false} color="primary" />
                              }
                              label="PRN"
                            />
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.header}>Directions</div>
                          </GridItem>
                        </GridContainer>
                        <hr />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{ textAlign: "center" }}>
                              <FormControl
                                className={classes.formControl}
                                style={{ width: "90%", color: "#009CDE" }}
                              >
                                <div style={{ textAlign: "left" }}>
                                  <small style={{ textAlign: "left" }}>
                                    Patient does not use the patient application
                                    to track medication information. Contact the
                                    patient to discuss medication updates.
                                  </small>
                                </div>
                              </FormControl>
                            </div>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControlLabel
                              control={
                                <Checkbox checked={false} color="primary" />
                              }
                              label="Use as Directed"
                            />
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              label="Dose"
                              defaultValue="Strength"
                              id="dose"
                              helperText="Required"
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              select
                              className={classes.textField}
                              value={values.strength}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu
                                }
                              }}
                              helperText="Required"
                              margin="normal"
                            >
                              {strength.map(option => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </GridItem>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              label="&nbsp;"
                              defaultValue="Qty"
                              id="quantity"
                              helperText="Required"
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={3}>
                            <TextField
                              select
                              className={classes.textField}
                              value={values.formType}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu
                                }
                              }}
                              helperText="Required"
                              margin="normal"
                            >
                              {formType.map(option => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                              label="Confirm Dose"
                              defaultValue="&nbsp;"
                              id="confirm"
                              helperText="Required"
                            ></TextField>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                select
                                label="Frequency"
                                className={classes.textField}
                                value={values.frequency}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu
                                  }
                                }}
                                helperText="Required"
                                margin="normal"
                              >
                                {frequency.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                label="Patient Instructions"
                                multiline
                                rows="5"
                                rowsMax="5"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                placeholder="Patient Instructions..."
                                style={{
                                  backgroundColor: "#FFFFFF",
                                  marginTop: 0 + "px"
                                }}
                              />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div className={classes.header}>Adjustment</div>
                          </GridItem>
                        </GridContainer>
                        <hr />
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                select
                                label="Type"
                                className={classes.textField}
                                value={values.adjustmentType}
                                SelectProps={{
                                  MenuProps: {
                                    className: classes.menu
                                  }
                                }}
                                helperText="Required"
                                margin="normal"
                              >
                                {adjustmentType.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <InputLabel shrink>Date (Required)</InputLabel>
                              <Datetime />
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                        <br />
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <TextField
                                label="Clinic Comments"
                                multiline
                                rows="5"
                                rowsMax="5"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                placeholder="Enter clinic comments..."
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
                        onClick={() => this.handleCloseAddMedicationModal()}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => this.handleCloseAddMedicationModal()}
                        color="default"
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
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
                <MaterialTable
                  title="PRN Medications"
                  columns={columns}
                  options={options}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
MedicationsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(MedicationsPortlet);
