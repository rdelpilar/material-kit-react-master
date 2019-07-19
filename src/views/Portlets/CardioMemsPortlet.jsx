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

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Primary from "components/Typography/Primary";
import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";

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
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "User Type", field: "userType" },
      { title: "Medication Manager", field: "medicationManager" },
      { title: "Registered On", field: "registeredOn" }
    ];

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer style={{ justify: "space-between" }}>
            <GridItem xs={12} sm={12} md={5}>
              <div className={classes.header}></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={4}>
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
                    onClose={() =>
                      this.handleCloseViewRegisteredApplicationUsers()
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
                        myCardioMEMS Mobile Application
                      </h3>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <small>
                        The following users have registered the myCardioMEMS
                        Mobile Application for user with this patient
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
            </GridItem>
          </GridContainer>
        </div>
        <hr />
        <div
          className={classes.section}
          style={{
            paddingTop: 0 + "px",
            paddingBottom: 10 + "px",
            backgroundColor: "#FFF"
          }}
        >
          <div className={classes.container}>
            <div id="nav-tabs">
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <div style={{ whiteSpace: "nowrap" }}>
                    <h4
                      style={{ display: "inline-block", paddingRight: "20px" }}
                    >
                      <small>Merlin.net Number:</small>
                    </h4>
                    <h4 style={{ display: "inline-block" }}>
                      <small>Not Registered</small>
                    </h4>
                  </div>
                  <div style={{ whiteSpace: "nowrap" }}>
                    <h4
                      style={{ display: "inline-block", paddingRight: "20px" }}
                    >
                      <small>
                        Medications managed on the mobile application:
                      </small>
                    </h4>
                    <Select
                      input={<Input name="medication" />}
                      name="medication"
                      className={classes.selectEmpty}
                      style={{ width: "100px" }}
                    >
                      <MenuItem value={1}>Off</MenuItem>
                      <MenuItem value={2}>On</MenuItem>
                    </Select>
                  </div>
                  <div style={{ whiteSpace: "nowrap" }}>
                    <h4
                      style={{ display: "inline-block", paddingRight: "20px" }}
                    >
                      <small>
                        Send PA reading data to the mobile application:
                      </small>
                    </h4>
                    <Select
                      input={<Input name="paReading" />}
                      name="paReading"
                      className={classes.selectEmpty}
                      style={{ width: "100px" }}
                    >
                      <MenuItem value={1}>Off</MenuItem>
                      <MenuItem value={2}>On</MenuItem>
                    </Select>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
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
CardioMemsPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(CardioMemsPortlet);
