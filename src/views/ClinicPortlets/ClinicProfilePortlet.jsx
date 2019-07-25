import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Divider } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class ClinicProfilePortlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customizePhoneMessagesModal: false,
      customizeTextMessagesModal: false
    };
  }

  handleClickOpenCustomizePhoneMessagesModal() {
    this.setState({
        customizePhoneMessagesModal: true
    });
    // var x = [];
    // x[modal] = true;
    // this.setState(x);
  }
  handleCloseCustomizePhoneMessagesModal() {
    this.setState({
        customizePhoneMessagesModal: false
    });
    // var x = [];
    // x[modal] = false;
    // this.setState(x);
  }
  handleClickOpenCustomizeTextMessagesModal() {
    this.setState({
        customizeTextMessagesModal: true
    });
  }
  handleCloseCustomizeTextMessagesModal() {
    this.setState({
        customizeTextMessagesModal: false
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer style={{ textAlign: "right" }}>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <div className={classes.header}>Patient Messaging</div>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Button
              color="primary"
              simple
              onClick={() => this.handleClickOpenClinicalTrialSettings()}
            >
              Clinical Trial Settings
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={this.state.clinicalTrialSettingsModal}
              // TransitionComponent={Transition}
              keepMounted
              onClose={() => this.handleCloseClinicalTrialSettingsModal()}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                style={{ backgroundColor: "#009CDE" }}
              >
                <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
                  Clinical Trial Settings
                </h3>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <h4>Select a clinical trial</h4>
                <br />
                <div
                  className={classes.container}
                  style={{
                    justify: "space-evenly",
                    maxWidth: "100%"
                  }}
                >
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="age-label-placeholder">
                          DirectCall Method*
                        </InputLabel>
                        <Select
                          input={<Input name="clinicalTrialSettings" />}
                          name="clinicalTrialSettings"
                          className={classes.selectEmpty}
                        >
                          <MenuItem value={1}>INTELLECT 2-HF</MenuItem>
                        </Select>
                        <small>
                          To remove the patient from the study or to correct a
                          control arm designation mistake, please contact
                          Technical Support.
                        </small>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => this.handleCloseClinicalTrialSettingsModal()}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => this.handleCloseClinicalTrialSettingsModal()}
                  color="default"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <Button
              color="primary"
              simple
              onClick={() => this.handleClickOpenImportFlashDriveModal()}
            >
              Import from Flash Drive
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={this.state.importFlashDriveModal}
              // TransitionComponent={Transition}
              keepMounted
              onClose={() => this.handleCloseImportFlashDriveModal()}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                style={{ backgroundColor: "#009CDE" }}
              >
                <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
                  Import from Flash Drive
                </h3>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <h4>Select a file to import</h4>
                <br />
                <div
                  className={classes.container}
                  style={{
                    justify: "space-evenly",
                    maxWidth: "100%",
                    width: "500px"
                  }}
                >
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <CustomInput
                        labelText="Click to open File Dialog"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <i className="fas fa-folder-open" />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => this.handleCloseImportFlashDriveModal()}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => this.handleCloseImportFlashDriveModal()}
                  color="default"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
        </GridContainer>
        <Divider />
        <div
          className={classes.container}
          style={{
            justify: "space-evenly",
            maxWidth: "50%"
          }}
        >
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="First Name*"
                id="firstName"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-user" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Primary Phone"
                id="primaryPhone"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-phone" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Middle Name"
                id="middleName"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Email"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-envelope" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Last Name*"
                id="lastName"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Address 1"
                id="address1"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-map-marker" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Language"
                id="language"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-language" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Address 2"
                id="address2"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Patient ID"
                id="patientID"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Address 3"
                id="address3"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Date of Birth"
                id="dob"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-calendar" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Country"
                id="country"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-flag" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Merlin.net Number"
                id="merlinNetNumber"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="City"
                id="city"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-building" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Clinic Location"
                id="clinicLocation"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-location-arrow" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="State/Province"
                id="stateProvince"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Gender"
                id="gender"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-transgender" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Zip/Postal Code"
                id="zipPostal"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Patient SSN"
                id="patientSSN"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}></GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Cardiomyopathy"
                id="cardiomyopathy"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-heartbeat" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}></GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="EF %"
                id="efPercent"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}></GridItem>
          </GridContainer>
        </div>
        <br />
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.header}>Patient Messaging</div>
            </GridItem>
          </GridContainer>
        </div>
        <Divider />
        <br />
        <div
          className={classes.container}
          style={{
            justify: "space-evenly",
            maxWidth: "50%"
          }}
        >
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-label-placeholder">
                  DirectCall Method
                </InputLabel>
                <Select
                  input={<Input name="directCallMethod" />}
                  name="directCallMethod"
                  className={classes.selectEmpty}
                >
                  <MenuItem value={1}>Call Primary/Mobile Phone</MenuItem>
                  <MenuItem value={2}>
                    Text Message Primary/Mobile Phone
                  </MenuItem>
                  <MenuItem value={3}>Text Message Other Phone</MenuItem>
                </Select>
                <FormHelperText>
                  To remove the patient from the study or to correct a control
                  arm designation mistake, please contact Technical Support.
                </FormHelperText>
              </FormControl>
            </GridItem>
          </GridContainer>
        </div>
        <br />
        <br />
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.header}>PA Sensor</div>
            </GridItem>
          </GridContainer>
        </div>
        <Divider />
        <br />
        <div
          className={classes.container}
          style={{
            justify: "space-evenly",
            maxWidth: "50%"
          }}
        >
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Treating Clinic"
                id="treatingClinic"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-hospital" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Sensor Serial Number"
                id="ssn"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Change Clinic Assignment"
                id="changeClinicAssignment"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Baseline Code"
                id="baseLineCode"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Clinic Phone"
                id="clinicPhone"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Sensor Location"
                id="sensorLocation"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Treating Physician"
                id="treatingPhysician"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Calibration Code"
                id="calibrationCode"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Implant Date"
                id="implantDate"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Activation Code"
                id="activationCode"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Consulting Users"
                id="consultingUsers"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Electonics Serial Number"
                id="electronicsSerialNumber"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <br />
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
ClinicProfilePortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicProfilePortlet);
