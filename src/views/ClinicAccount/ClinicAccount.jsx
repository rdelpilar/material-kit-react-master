import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Slide from "@material-ui/core/Slide";
import {
  Divider,
  TextField,
  FormGroup,
  RadioGroup,
  Radio,
  Typography
} from "@material-ui/core";
import { fontSize } from "@material-ui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class ClinicAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changePasswordModal: false
    };
  }

  handleClickOpenChangePasswordModal() {
    this.setState({
      changePasswordModal: true
    });
  }
  handleCloseChangePasswordModal() {
    this.setState({
      changePasswordModal: false
    });
  }
  render() {
    const { classes, ...rest } = this.props;

    const country = [
      {
        value: "usa",
        label: "USA"
      },
      {
        value: "japan",
        label: "Japan"
      }
    ];

    const padCountPreference = [
      {
        value: "3days",
        label: "3 days"
      },
      {
        value: "5days",
        label: "5 days"
      },
      {
        value: "7days",
        label: "7 days"
      }
    ];

    return (
      <div>
        <Header
          brand=""
          leftLinks={<HeaderLinksLeft />}
          rightLinks={<HeaderLinksRight />}
          fixed
          color="primary"
          {...rest}
        />

        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: 80 + "px" }}
        >
          {/* My Account*/}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <div className={classes.container}>
                  <div
                    className={classes.header}
                    style={{
                      marginTop: "50px",
                      marginBottom: "50px",
                      textAlign: "left"
                    }}
                  >
                    <Typography variant="h4" color="primary">
                      My Account
                    </Typography>
                  </div>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} justify>
                      <div
                        className={classes.header}
                        style={{
                          textTransform: "uppercase",
                          marginTop: "10px"
                        }}
                      >
                        User Profile
                      </div>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={6}
                      md={6}
                      style={{ textAlign: "right" }}
                    >
                      <GridItem xs={12} sm={12} md={12}>
                        <Button
                          color="primary"
                          simple
                          onClick={() =>
                            this.handleClickOpenChangePasswordModal()
                          }
                        >
                          Change Password
                        </Button>
                        <Dialog
                          classes={{
                            root: classes.center,
                            paper: classes.modal
                          }}
                          open={this.state.changePasswordModal}
                          keepMounted
                          onClose={() => this.handleCloseChangePasswordModal()}
                          aria-labelledby="classic-modal-slide-title"
                          aria-describedby="classic-modal-slide-description"
                        >
                          <DialogTitle
                            id="classic-modal-slide-title"
                            disableTypography
                            className={classes.modalHeader}
                            style={{ backgroundColor: "#009CDE" }}
                          >
                            <h3
                              className={classes.modalTitle}
                              style={{ color: "#FFFFFF" }}
                            >
                              Change Password
                            </h3>
                          </DialogTitle>
                          <DialogContent
                            id="classic-modal-slide-description"
                            className={classes.modalBody}
                          >
                            <div
                              className={classes.container}
                              style={{
                                justify: "space-evenly",
                                maxWidth: "100%"
                              }}
                            >
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                  <TextField
                                    id="currentPassword"
                                    label="Current Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    style={{ minWidth: "100%" }}
                                  />
                                </GridItem>
                              </GridContainer>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                  <TextField
                                    id="newPassword"
                                    label="New Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    style={{ minWidth: "100%" }}
                                  />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                  <TextField
                                    id="confirmPassword"
                                    label="Confirm New Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    style={{ minWidth: "100%" }}
                                  />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                  <div>
                                    <br />
                                    <br />
                                  </div>
                                </GridItem>
                                <GridItem
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  style={{ backgroundColor: "#F4F3EF" }}
                                >
                                  <br />
                                  <small>
                                    <div>Your New Password:</div>
                                    <div>
                                      -- Must have between 6 and 20 characters
                                    </div>
                                    <div>
                                      -- Can only contain the following
                                      characters:
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                      -- Upper case letters (A, B, C, ..., Z)
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                      -- Lower case letters (a, b, c, ..., Z)
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                      -- Numeric digits (0, 1, 2, ..., 9)
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                      -- Printable
                                      non-alphanumeric(-!#$^()-_+[]|:;,.?)
                                    </div>
                                    <div>
                                      -- Must contain at least one Numeric digit
                                    </div>
                                    <div>
                                      -- Must be different from you past 10
                                      passwords
                                    </div>
                                  </small>
                                  <br />
                                </GridItem>
                              </GridContainer>
                            </div>
                          </DialogContent>
                          <DialogActions className={classes.modalFooter}>
                            <Button
                              onClick={() =>
                                this.handleCloseChangePasswordModal()
                              }
                              color="primary"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() =>
                                this.handleCloseChangePasswordModal()
                              }
                              color="default"
                            >
                              Save
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    {/* First Name - Credentials */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="firstName"
                          label="First Name"
                          defaultValue="ClinicRCT_Phy_ImpTre"
                          margin="normal"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="credentials"
                          label="Credentials"
                          defaultValue=""
                          margin="normal"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>

                    {/* Middle Name - User Type */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="middleName"
                          label="Middle Name"
                          defaultValue=""
                          margin="normal"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="userType"
                          label="User Type"
                          defaultValue="Physician"
                          margin="normal"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>

                    {/* Last Name - Department */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="lastName"
                          label="Last Name"
                          defaultValue="ClinicRCT_Phy_ImpTre"
                          margin="normal"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="department"
                          label="Department"
                          defaultValue=""
                          margin="normal"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>

                    <br />
                    <br />

                    {/* User Roles*/}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}></GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">User Roles:</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox checked={true} color="primary" />
                              }
                              label="Administrator"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={true} color="primary" />
                              }
                              label="Implanting"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={true} color="primary" />
                              }
                              label="Treating"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={false} color="primary" />
                              }
                              label="Consulting"
                            />
                          </FormGroup>
                        </FormControl>
                      </GridItem>
                    </GridContainer>

                    <br />
                    <br />

                    {/* Physician User Roles*/}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}></GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Physician Roles:
                          </FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox checked={true} color="primary" />
                              }
                              label="Implanting Physician"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={true} color="primary" />
                              }
                              label="Treating Physician"
                            />
                          </FormGroup>
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* User Contact Information */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    User Contact Information
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    {/* Address 1 - Main Phone */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="address1"
                          label="Address 1"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="mainPhone"
                          label="Main Phone*"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                          error
                        />
                      </GridItem>
                    </GridContainer>

                    {/* Address 2 - Secondary Phone */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="address2"
                          label="Address 2"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="secondaryPhone"
                          label="Secondary Phone"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>

                    {/* Address 3 - Fax */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="address3"
                          label="Address 3"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="mainPhone"
                          label="Main Phone"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>

                    {/* Country - Text Message */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="accountCountrySelect"
                          select
                          label="Country"
                          style={{
                            minWidth: "100%"
                          }}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu
                            }
                          }}
                          margin="normal"
                        >
                          {country.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="textMessage"
                          label="Text Message"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                          helperText="Message and data rates may apply"
                        />
                      </GridItem>
                    </GridContainer>

                    {/* City - Email*/}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="city"
                          label="City"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="email"
                          label="Email*"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                          error
                        />
                      </GridItem>
                    </GridContainer>

                    {/* State/Province - Security Stamp */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="stateProvince"
                          label="State/Province"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="securityStamp"
                          label="Security Stamp*"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                          error
                        />
                      </GridItem>
                    </GridContainer>

                    {/* Zip/Postal Code - Clinic Security Stamp */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="stateProvince"
                          label="State/Province"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}></GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <TextField
                          id="securityStamp"
                          label="Security Stamp"
                          margin="normal"
                          defaultValue="CLINR568"
                          InputProps={{
                            readOnly: true
                          }}
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* HF Patient List Preferences */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    HF Patient List Preferences
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={7}>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel component="legend">
                            Always open Patient List filtered by:
                          </FormLabel>
                          <RadioGroup
                            aria-label="patientListGrouping"
                            name="patientListGrouping"
                          >
                            <FormControlLabel
                              value="activePatients"
                              control={<Radio color="primary" />}
                              label="Active Patients"
                            />
                            <FormControlLabel
                              value="paSensor"
                              control={<Radio color="primary" />}
                              label="PA Sensor"
                            />
                            <FormControlLabel
                              value="icdPM"
                              control={<Radio color="primary" />}
                              label="ICD/PM"
                            />
                            <FormControlLabel
                              value="subscribed"
                              control={<Radio color="primary" />}
                              label="Subscribed"
                            />
                          </RadioGroup>
                        </FormControl>
                        <br />
                        <FormControl
                          className={classes.formControl}
                          style={{
                            minWidth: "100%"
                          }}
                        >
                          <TextField
                            id="padCountPreferenceInput"
                            select
                            label="PA Diastolic Trend column count preference"
                            SelectProps={{
                              MenuProps: {
                                className: classes.menu
                              }
                            }}
                            margin="normal"
                          >
                            {padCountPreference.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={5}></GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* Application Preference */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    Application Preferences
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <RadioGroup
                            aria-label="patientListGrouping"
                            name="patientListGrouping"
                          >
                            <FormControlLabel
                              value="activePatients"
                              control={<Radio color="primary" />}
                              label="Arrhythmia & Device Management"
                            />
                            <FormControlLabel
                              value="paSensor"
                              control={<Radio color="primary" />}
                              label="Heart Failure Management"
                            />
                          </RadioGroup>
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* HF DirectTrend Viewer Preferences */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    HF DirectTrend Viewer Preferences
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <FormControl
                          component="fieldset"
                          className={classes.formControl}
                        >
                          <FormLabel component="legend">
                            Select the behavior for mouse click-and-drag across
                            a trend graph
                          </FormLabel>
                          <RadioGroup
                            aria-label="hfDtvPreferenceGrouping"
                            name="hfDtvPreferenceGrouping"
                          >
                            <FormControlLabel
                              value="activePatients"
                              control={<Radio />}
                              label="Scroll date range"
                            />
                            <FormControlLabel
                              value="paSensor"
                              control={<Radio />}
                              label="Zoom to selected date range"
                            />
                          </RadioGroup>
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* PA Sensor Patients of Interest Report Subscription */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    PA Sensor Patients of Interest Report Subscription
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div>
                          Select the following option to subscribe to the
                          Patients of Interest Report email. As per your clinic
                          setting, you will receive an email every week
                          on:&nbsp;
                          <em style={{ fontWeight: 700 }}>Monday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Thursday</em>
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <FormControlLabel
                          control={<Checkbox checked={false} color="primary" />}
                          label="Receive PA Sensor Patients of Interest Report"
                        />
                      </GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* Receive Notification List Report */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    Application Preferences
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div>
                          Select the following option to subscribe to the
                          Notification List Report email. As per your clinic
                          setting, you will receive email every week on:{" "}
                          <em style={{ fontWeight: 700 }}>Monday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Tuesday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Wednesday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Thursday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Friday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Saturday</em>,{" "}
                          <em style={{ fontWeight: 700 }}>Sunday</em>
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <FormControlLabel
                          control={<Checkbox checked={true} color="primary" />}
                          label="Receive PA Sensor Patients of Interest Report"
                        />
                      </GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* Hospital Electronic System Password */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <br />
                  <div
                    className={classes.header}
                    style={{ textTransform: "uppercase" }}
                  >
                    Hospital Electronic System Password
                  </div>
                  <br />
                  <Divider />
                  <br />
                  <div
                    className={classes.container}
                    style={{
                      justify: "space-evenly"
                    }}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div>
                          Enter the hospital electronics system serial number to
                          view a temporary password. The temporary password
                          expires today.
                        </div>
                        <br />
                        <Divider />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          id="electronicsSerialNumber"
                          label="Electronics Serial Number"
                          margin="normal"
                          style={{ minWidth: "100%" }}
                        />
                      </GridItem>
                    </GridContainer>
                    <br />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <br />

          {/* Required field */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classNames(classes.main)}>
                <br />
                <div className={classes.container}>
                  <small>
                    <em style={{ color: "red" }}>* Required field</em>
                  </small>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          {/* Cancel & Save buttons */}
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
        <br />
        <Footer />
      </div>
    );
  }
}

ClinicAccount.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicAccount);
