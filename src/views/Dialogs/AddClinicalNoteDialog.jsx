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
import AddClinicalNoteContent from "views/Dialogs/AddClinicalNoteContent";
import { Divider, IconButton } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

import { connect } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Grow from "@material-ui/core/Grow";
import { getSnackbarState } from "redux/snackbarSelectors";
import { toggleSnackbar } from "redux/actions";

class AddClinicalNoteDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: false,
      vertical: "top",
      horizontal: "right",
      Transition: Grow,
      message: ""
    };
  }

  handleDialogClose = () => {
    this.handleSnackbarClose();
    this.props.onClose();
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.props.toggleSnackbar(false, "");
    this.setState({ openSnackbar: false, message: "" });
  };

  componentWillReceiveProps(props) {
    this.setState({ openSnackbar: props.openSnackbar, message: props.message });
  }

  MySnackbarContentWrapper = props => {
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
          fullWidth={true}
          maxWidth="md"
          keepMounted
          onClose={() => this.props.onClose}
          aria-labelledby="addClinicalNoteDialogTitle"
          aria-describedby="addClinicalNoteDialogContent"
        >
          <DialogTitle
            id="addClinicalNoteDialogTitle"
            disableTypography
            className={classes.modalHeader}
            style={{ backgroundColor: "#009CDE" }}
          >
            <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
              Add Clinical Note
            </h3>
          </DialogTitle>
          <DialogContent
            id="addClinicalNoteDialogContent"
            className={classes.modalBody}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <AddClinicalNoteContent />
              </GridItem>
            </GridContainer>
          </DialogContent>
          <Divider variant="middle" />
          <DialogActions className={classes.modalFooter}>
            <Button onClick={this.handleDialogClose} color="primary">
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

AddClinicalNoteDialog.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  message: PropTypes.string,
  openSnackbar: PropTypes.bool,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  toggleSnackbar: PropTypes.func.isRequired
};

const AddClinicalDialogWithCSS = withStyles(componentsStyle)(
  AddClinicalNoteDialog
);

export default connect(
  mapStateToProps,
  { toggleSnackbar }
)(AddClinicalDialogWithCSS);
