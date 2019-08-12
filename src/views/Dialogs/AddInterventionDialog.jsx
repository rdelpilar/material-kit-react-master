import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import Notifications from "@material-ui/icons/Notifications";
import PermPhoneMsg from "@material-ui/icons/PermPhoneMsg";
import NoteAdd from "@material-ui/icons/NoteAdd";
import Edit from "@material-ui/icons/Edit";

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import { Divider, IconButton } from "@material-ui/core";

import AddClinicalNote from "./AddClinicalNote";
import MakeMedicationListChange from "./MakeMedicationListChange";
import CurrentNotifications from "./CurrentNotifications";
import SendPatientMessages from "./SendPatientMessages";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

import { connect } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Grow from "@material-ui/core/Grow";
import { getSnackbarState } from "redux/snackbarSelectors";

class AddInterventionDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: this.props.openSnackbar,
      vertical: "top",
      horizontal: "right",
      Transition: Grow,
      message: this.props.message
    };
  }

  handleSendMessageClick = () => {
    this.setState({ openSnackbar: true });
  };

  handleSnackbarOpen = (openSnackbar, message) => {
    this.setState({ openSnackbar: openSnackbar, message: message });
  };

  handleSnackbarClose = () => {
    this.setState({ openSnackbar: false, message: "" });
  };

  componentWillReceiveProps(props) {
    this.setState({ openSnackbar: props.openSnackbar, message: props.message });
  }

  MySnackbarContentWrapper = props => {
    const { message, onClose } = props;
    const Icon = CheckCircleIcon;

    console.log("Inside mysnackbarcontentwrapper");

    return (
      <SnackbarContent
        style={{
          backgroundColor: "#43A047"
        }}
        aria-describedby="client-snackbar"
        message={
          <span
            id="client-snackbar"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Icon
              style={{ fontSize: "20", opacity: "0.9", marginRight: "10px" }}
            />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon style={{ fontSize: 20 }} />
          </IconButton>
        ]}
      />
    );
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const { classes } = this.props;
    const {
      openSnackbar,
      message,
      horizontal,
      vertical,
      Transition
    } = this.state;

    return (
      <div>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.props.show}
          // TransitionComponent={Transition}
          maxWidth="md"
          keepMounted
          onClose={() => this.props.onClose}
          aria-labelledby="addInterventionDialogTitle"
          aria-describedby="addInterventionDialogContent"
        >
          <DialogTitle
            id="addInterventionDialogTitle"
            disableTypography
            className={classes.modalHeader}
            style={{ backgroundColor: "#009CDE" }}
          >
            <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
              Add Intervention
            </h3>
          </DialogTitle>
          <DialogContent
            id="addInterventionDialogContent"
            className={classes.modalBody}
          >
            <div className={classes.section}>
              <div className={classes.container}>
                <div id="navigation-pills">
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <NavPills
                        style={{ width: "100%" }}
                        color="primary"
                        tabs={[
                          {
                            tabButton: "Current Notifications",
                            tabIcon: Notifications,
                            tabContent: <CurrentNotifications />
                          },
                          {
                            tabButton: "Send Patient Message(s)",
                            tabIcon: PermPhoneMsg,
                            tabContent: <SendPatientMessages />
                          },
                          {
                            tabButton: "Add Clinical Note",
                            tabIcon: NoteAdd,
                            tabContent: <AddClinicalNote />
                          },
                          {
                            tabButton: "Make Medication List Change",
                            tabIcon: Edit,
                            tabContent: <MakeMedicationListChange />
                          }
                        ]}
                      />
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </div>
          </DialogContent>
          <Divider variant="inset" />
          <DialogActions className={classes.modalFooter}>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
          </DialogActions>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            key={`${vertical},${horizontal}`}
            open={openSnackbar}
            onClose={this.handleSnackbarClose}
            autoHideDuration={5000}
            TransitionComponent={Transition}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            // message={<span id="message-id">Message sent</span>}
          >
            <this.MySnackbarContentWrapper
              onClose={this.handleSnackbarClose}
              message={message}
            />
          </Snackbar>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const snackbar = getSnackbarState(state);
  return { openSnackbar: snackbar.enable, message: snackbar.message };
};

AddInterventionDialog.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool,
  vertical: PropTypes.string,
  horizontal: PropTypes.string
};

const AddInterventionDialogWithCSS = withStyles(componentsStyle)(
  AddInterventionDialog
);

export default connect(mapStateToProps)(AddInterventionDialogWithCSS);
