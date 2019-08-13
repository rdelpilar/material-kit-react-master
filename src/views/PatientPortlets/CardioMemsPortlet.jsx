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

import MenuItem from "@material-ui/core/MenuItem";
import { TextField } from "@material-ui/core";

import FormControl from "@material-ui/core/FormControl";
import Primary from "components/Typography/Primary";
import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import { Divider } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class CardioMemsPortlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredApplicationUsersModal: false
    };
  }

  handleClickOpenViewRegisteredApplicationUsers() {
    this.setState({
      registeredApplicationUsersModal: true
    });
  }
  handleCloseViewRegisteredApplicationUsers() {
    this.setState({
      registeredApplicationUsersModal: false
    });
  }
  render() {
    const { classes, ...rest } = this.props;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: "#F2F3F7", padding: "10px" }
    };

    const columns = [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "User Type", field: "userType" },
      { title: "Medication Manager", field: "medicationManager" },
      { title: "Registered On", field: "registeredOn" }
    ];

    const medicationsManagement = [
      {
        value: "on",
        label: "On"
      },
      {
        value: "off",
        label: "Off"
      }
    ];

    const paReading = [
      {
        value: "on",
        label: "On"
      },
      {
        value: "off",
        label: "Off"
      }
    ];

    const values = {
      medicationsManagement: "on",
      paReading: "on"
    };

    return (
      <div className={classes.section}>
        <GridContainer style={{ textAlign: "right" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              simple
              onClick={() =>
                this.handleClickOpenViewRegisteredApplicationUsers()
              }
            >
              View Registered Application Users
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={this.state.registeredApplicationUsersModal}
              // TransitionComponent={Transition}
              keepMounted
              onClose={() => this.handleCloseViewRegisteredApplicationUsers()}
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
                  myCardioMEMS Mobile Application
                </h3>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <small>
                  The following users have registered the myCardioMEMS Mobile
                  Application for user with this patient
                </small>
                <br />
                <br />
                <div
                  className={classes.container}
                  style={{
                    maxWidth: "100%"
                  }}
                >
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <MaterialTable
                        title=""
                        columns={columns}
                        options={options}
                      />
                    </GridItem>
                  </GridContainer>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() =>
                    this.handleCloseViewRegisteredApplicationUsers()
                  }
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
        </GridContainer>
        <Divider />
        <div
          className={classes.container}
          style={{
            paddingTop: "0px",
            paddingBottom: "10px",
            backgroundColor: "#FFF",
            width: "100%",
            justify: "space-evenly"
          }}
        >
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField
                    label="Patient / Caregiver"
                    defaultValue="Not Registered"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                    fullWidth
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%", color: "#009CDE" }}
                  >
                    <TextField
                      select
                      label="Medications managed on the mobile application"
                      className={classes.textField}
                      value={values.medicationsManagement}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      margin="normal"
                    >
                      {medicationsManagement.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%", color: "#009CDE" }}
                  >
                    <TextField
                      select
                      label="Send PA reading data to the mobile application"
                      className={classes.textField}
                      value={values.paReading}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      margin="normal"
                    >
                      {paReading.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
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
CardioMemsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(CardioMemsPortlet);
