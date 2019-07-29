import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {
  Divider,
  TextField,
  FormGroup,
  RadioGroup,
  Radio,
  Paper
} from "@material-ui/core";
import Info from "components/Typography/Info";
import Grid from "@material-ui/core/Grid";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

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

  handleClickOpenCustomizePhoneMessageModal() {
    this.setState({
      customizePhoneMessagesModal: true
    });
  }
  handleCloseCustomizePhoneMessageModal() {
    this.setState({
      customizePhoneMessagesModal: false
    });
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

    const cities = [
      {
        value: "USA",
        label: "USA"
      },
      {
        value: "GB",
        label: "United Kingdom"
      }
    ];

    const states = [
      {
        value: "CA",
        label: "California"
      },
      {
        value: "AK",
        label: "Alaska"
      }
    ];

    const clinicAdmin = [
      {
        value: "clinicRCTAllImp",
        label: "ClinicRCT_All_Imp"
      },
      {
        value: "clinicRCTTreat",
        label: "ClinicRCT_All_Treat"
      }
    ];

    const language = [
      {
        value: "english",
        label: "English"
      },
      {
        value: "french",
        label: "French"
      }
    ];

    const timeZone = [
      {
        value: "pst",
        label: "Pacific Time"
      },
      {
        value: "cst",
        label: "Central Time"
      }
    ];

    const dateFormat = [
      {
        value: "monthDayYear",
        label: "Month-Day-Year"
      },
      {
        value: "dayMonthYear",
        label: "Day-Month-Year"
      }
    ];

    const passwordExpiration = [
      {
        value: "never",
        label: "Never Expires"
      },
      {
        value: "90",
        label: "90 day expiration"
      }
    ];

    const timeFormat = [
      {
        value: "12Hour",
        label: "1:45 PM"
      },
      {
        value: "24Hour",
        label: "13:45"
      }
    ];

    const passwordComplexity = [
      {
        value: "high",
        label: "High"
      },
      {
        value: "medium",
        label: "Medium"
      }
    ];

    const numberFormat = [
      {
        value: "commaDot",
        label: "1,234.56"
      },
      {
        value: "dotComma",
        label: "1.234,56"
      }
    ];

    const weightUnits = [
      {
        value: "kg",
        label: "Kg"
      },
      {
        value: "lbs",
        label: "Lbs"
      }
    ];

    const ehrMessageFormat = [
      {
        value: "hl25",
        label: "HL-7 v2.5"
      },
      {
        value: "hl30",
        label: "HL-7 v3.0"
      }
    ];

    const characterEncoding = [
      {
        value: "utf8",
        label: "UTF-8"
      }
    ];

    return (
      <div>
        <Divider />
        <br />

        {/* Clinic Details */}
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
                  Clinic Details
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
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Clinic Name*"
                        id="clinicName"
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
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Address 1"
                        id="address1"
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
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Clinic Location*"
                        id="clinicLocation"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <i className="fas fa-map-o" />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
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
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Main Phone*"
                        id="mainPhone"
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
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
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
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Secondary Phone"
                        id="secondaryPhone"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-country"
                        select
                        label="Country"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {cities.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Fax"
                        id="faxNumber"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <i className="fas fa-fax" />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
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
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Text Message"
                        id="textMessage"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <Info color="primary" />
                      <h5>
                        <small>Message and data rates may apply</small>
                      </h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-state"
                        select
                        label="State/Province"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        //value={values.currency}
                        //onChange={handleChange("currency")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {states.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Zip/Postal code"
                        id="zipPostalCode"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Clinic Security Stamp"
                        id="securityStamp"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}></GridItem>
                  </GridContainer>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <br />

        {/* Clinic Regional Settings */}
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
                  Clinic Regional Settings
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
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-primary-adminstrator"
                        select
                        label="Primary Administrator/ID"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {clinicAdmin.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-language"
                        select
                        label="Language"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {language.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-primary-clinicTimeZone"
                        select
                        label="Clinic Time Zone*"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {timeZone.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-dateFormat"
                        select
                        label="Date Format"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {dateFormat.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-primary-passwordExpiration"
                        select
                        label="Password Expiration"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {passwordExpiration.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-timeFormat"
                        select
                        label="Time Format"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {timeFormat.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-primary-passwordComplexity"
                        select
                        label="Password Complexity"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {passwordComplexity.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-numberFormat"
                        select
                        label="Number Format"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {numberFormat.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-primary-weightUnits"
                        select
                        label="Weight Units"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {weightUnits.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}></GridItem>
                  </GridContainer>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <br />

        {/* Patient Messaging */}
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
                  Patient Messaging
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
                    <GridItem xs={12} sm={12} md={4}>
                      <GridContainer>
                        {/* Customize Phone Messages Dialog */}

                        <GridItem xs={12} sm={12} md={12}>
                          <Button
                            color="primary"
                            simple
                            onClick={() =>
                              this.handleClickOpenCustomizePhoneMessageModal()
                            }
                          >
                            Customize Phone Messages
                          </Button>
                          <Dialog
                            classes={{
                              root: classes.center,
                              paper: classes.modal
                            }}
                            open={this.state.customizePhoneMessagesModal}
                            keepMounted
                            onClose={() =>
                              this.handleCloseCustomizePhoneMessageModal()
                            }
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
                                Patient Messaging Customization - TODO
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
                                    <FormControl
                                      className={classes.formControl}
                                    >
                                      <InputLabel
                                        shrink
                                        htmlFor="age-label-placeholder"
                                      >
                                        DirectCall Method*
                                      </InputLabel>
                                      <Select
                                        input={
                                          <Input name="clinicalTrialSettings" />
                                        }
                                        name="clinicalTrialSettings"
                                        className={classes.selectEmpty}
                                      >
                                        <MenuItem value={1}>
                                          INTELLECT 2-HF
                                        </MenuItem>
                                      </Select>
                                      <small>
                                        To remove the patient from the study or
                                        to correct a control arm designation
                                        mistake, please contact Technical
                                        Support.
                                      </small>
                                    </FormControl>
                                  </GridItem>
                                </GridContainer>
                              </div>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button
                                onClick={() =>
                                  this.handleCloseCustomizePhoneMessageModal()
                                }
                                color="primary"
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={() =>
                                  this.handleCloseCustomizePhoneMessageModal()
                                }
                                color="default"
                              >
                                Save
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </GridItem>

                        {/* Customize Text Messages Dialog */}

                        <GridItem xs={12} sm={12} md={12}>
                          <Button
                            color="primary"
                            simple
                            onClick={() =>
                              this.handleClickOpenCustomizeTextMessagesModal()
                            }
                          >
                            Customize Text Messages
                          </Button>
                          <Dialog
                            classes={{
                              root: classes.center,
                              paper: classes.modal
                            }}
                            open={this.state.customizeTextMessagesModal}
                            keepMounted
                            onClose={() =>
                              this.handleCloseCustomizeTextMessagesModal()
                            }
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
                                Patient Messaging Customization
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
                                    <FormControl
                                      className={classes.formControl}
                                    >
                                      <InputLabel
                                        shrink
                                        htmlFor="age-label-placeholder"
                                      >
                                        DirectCall Method*
                                      </InputLabel>
                                      <Select
                                        input={
                                          <Input name="clinicalTrialSettings" />
                                        }
                                        name="clinicalTrialSettings"
                                        className={classes.selectEmpty}
                                      >
                                        <MenuItem value={1}>
                                          INTELLECT 2-HF
                                        </MenuItem>
                                      </Select>
                                      <small>
                                        To remove the patient from the study or
                                        to correct a control arm designation
                                        mistake, please contact Technical
                                        Support.
                                      </small>
                                    </FormControl>
                                  </GridItem>
                                </GridContainer>
                              </div>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button
                                onClick={() =>
                                  this.handleCloseCustomizeTextMessagesModal()
                                }
                                color="primary"
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={() =>
                                  this.handleCloseCustomizeTextMessagesModal()
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
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div>
                            <small>
                              Default patient notification window. (Defines when
                              patient will receive messages delivered by voice
                              call or SMS)
                            </small>
                          </div>
                          <br />
                          <div>
                            <small>
                              This notification window can be modified on a per
                              patient basis in each patient's profile.
                            </small>
                          </div>
                          <br />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Divider />
                          <br />
                          <h5>Send messages between:</h5>
                          <div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardTimePicker
                                margin="normal"
                                id="mui-pickers-time-start"
                                label="Start Time"
                                // value={selectedDate}
                                // onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  "aria-label": "change time"
                                }}
                                style={{
                                  width: "50%"
                                }}
                              />
                              <div>
                                <h5>and</h5>
                              </div>
                              <KeyboardTimePicker
                                margin="normal"
                                id="mui-pickers-time-end"
                                label="End Time"
                                // value={selectedDate}
                                // onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  "aria-label": "change time"
                                }}
                                style={{
                                  width: "50%"
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <br />

        {/* EHR Export */}
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
                  EHF Export
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
                      <FormGroup row>
                        <small>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={true}
                                // onChange={handleChange('checkedB')}
                                // value="checkedB"
                                color="primary"
                              />
                            }
                            label="Set up export to electronic health record (EHRDirect)"
                          />
                          <div>
                            Please coordinate with the Abbott EHR setup
                            personnel before changing these settings at:
                          </div>
                          <div> - US: 877-MyMerlin (877-696-3754)</div>
                          <div>
                            - Outside of the US, please contact your local
                            Abbott representative
                          </div>
                        </small>
                      </FormGroup>
                      <br />
                      <Divider />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <br />
                      <CustomInput
                        labelText="IP*"
                        id="ipAddress"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <br />
                      <CustomInput
                        labelText="Port*"
                        id="portNumber"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="EHR application name*"
                        id="characterEncoding"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="EHR facility name*"
                        id="ehrFacilityName"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-message-format"
                        select
                        label="Message format"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        //value={values.currency}
                        //onChange={handleChange("currency")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {ehrMessageFormat.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}></GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <TextField
                        id="standard-select-character-encoding"
                        select
                        label="Character encoding"
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          marginRight: "10px"
                        }}
                        //value={values.currency}
                        //onChange={handleChange("currency")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                            width: "100%"
                          }
                        }}
                        margin="normal"
                      >
                        {characterEncoding.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                  </GridContainer>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        {/* Notification list report */}
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
                  Notification List Report
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
                        Subscribe to the Notification List Report. This report
                        is distributed to all subscribed users on the specified
                        days.
                      </div>
                      <br />
                      <Divider />
                      <br />
                      <div style={{ display: "flex" }}>
                        <Paper elevation="1" style={{ padding: "20px" }}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Subscribe to the report on the following days
                            </FormLabel>
                            <FormGroup row>
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Mon"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Tue"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Wed"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Thu"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Fri"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Sat"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Sun"
                              />
                            </FormGroup>
                          </FormControl>
                        </Paper>
                      </div>
                      <FormControlLabel
                        control={<Checkbox checked={false} color="primary" />}
                        label="Send the report via unecrypted standard email"
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        {/* Patients of interest report */}
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
                  Patients of Interest Report
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
                        Subscribe to the Patients of Interest Report. This
                        report is distributed to all subscribed users on the
                        specified days if at least one active PA Sensor patient
                        is enrolled in the clinic.
                      </div>
                      <br />
                      <Divider />
                      <br />
                      <div style={{ display: "flex" }}>
                        <Paper elevation="1" style={{ padding: "20px" }}>
                          <FormControl component="fieldset">
                            <FormLabel component="legend">
                              Subscribe to the report on the following days
                            </FormLabel>
                            <FormGroup row>
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Mon"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={false} color="primary" />
                                }
                                label="Tue"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={false} color="primary" />
                                }
                                label="Wed"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={true} color="primary" />
                                }
                                label="Thu"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={false} color="primary" />
                                }
                                label="Fri"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={false} color="primary" />
                                }
                                label="Sat"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked={false} color="primary" />
                                }
                                label="Sun"
                              />
                            </FormGroup>
                          </FormControl>
                        </Paper>
                      </div>
                      <FormControlLabel
                        control={<Checkbox checked={false} color="primary" />}
                        label="Send the report via unecrypted standard email"
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        {/* Login Adherence */}
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
                  Login Adherence
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
                        Use this setting to be notified when no Treating users
                        in the clinic have logged into the Merlin.net HF
                        Application for a week. It is important to review heart
                        failure patients <em>frequently*</em> to provide timely
                        care. If your clinic is participating in a clinical
                        trial, you may receive this notification regardless of
                        its setting.
                      </div>
                      <h4>
                        <small>
                          *See Merlin.net CMEMS User Manual for review frequency
                          guidelines.
                        </small>
                      </h4>
                      <Divider />
                      <br />
                      <div style={{ display: "flex" }}>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Login Adherence Notifications
                          </FormLabel>
                          <RadioGroup
                            aria-label="loginAdherenceNotif"
                            name="loginAdherenceNotif"
                            className={classes.group}
                            // value={value}
                            // onChange={handleChange}
                            row
                          >
                            <FormControlLabel
                              value="on"
                              control={<Radio color="primary" checked={true} />}
                              label="On"
                            />
                            <FormControlLabel
                              value="off"
                              control={<Radio color="primary" />}
                              label="Off"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </GridItem>
                  </GridContainer>
                  <br />
                </div>
                <div>
                  <br />
                  <small>
                    <em style={{ color: "red" }}>* Required field</em>
                  </small>
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

ClinicProfilePortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicProfilePortlet);
