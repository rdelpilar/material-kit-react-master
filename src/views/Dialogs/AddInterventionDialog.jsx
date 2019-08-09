import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
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
import ListIcon from "@material-ui/icons/List";

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import { Divider } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Grow from "@material-ui/core/Grow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

import AddClinicalNote from "./AddClinicalNote";
import MakeMedicationListChange from "./MakeMedicationListChange";
import CurrentNotifications from "./CurrentNotifications";
import SendPatientMessages from "./SendPatientMessages";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// Transition.displayName = "Transition";

class AddInterventionDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: false,
      vertical: "top",
      horizontal: "right",
      Transition: Grow
    };
  }

  handleSendMessageClick = () => {
    this.setState({ openSnackbar: true });
  };

  handleClose = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const { classes } = this.props;
    const { vertical, horizontal, openSnackbar } = this.state;

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
                            tabIcon: ListIcon,
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
            onClose={this.handleClose}
            autoHideDuration={5000}
            TransitionComponent={this.state.Transition}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            // message={<span id="message-id">Message sent</span>}
          >
            <MySnackbarContentWrapper
              onClose={this.handleClose}
              message="Message sent!"
            />
          </Snackbar>
        </Dialog>
      </div>
    );
  }
}

function MySnackbarContentWrapper(props) {
  const { message, onClose } = props;
  const Icon = CheckCircleIcon;

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
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

AddInterventionDialog.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default withStyles(componentsStyle)(AddInterventionDialog);
