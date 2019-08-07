import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// Transition.displayName = "Transition";

class AddInterventionDialog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     addInterventionsModal: false
  //   };
  // }

  // handleClickOpenAddInterventionsModal() {
  //   console.log(
  //     "addInterventionsModal before: ",
  //     this.state.addInterventionsModal
  //   );
  //   this.setState(
  //     {
  //       addInterventionsModal: true
  //     },
  //     function() {
  //       console.log(
  //         "addInterventionsModal after: ",
  //         this.state.addInterventionsModal
  //       );
  //     }
  //   );
  // }

  // handleCloseAddInterventionsModal() {
  //   console.log("closing...");
  //   this.setState(
  //     {
  //       addInterventionsModal: false
  //     },
  //     () => {
  //       console.log(
  //         "addInterventionsModal after: ",
  //         this.state.addInterventionsModal
  //       );
  //     }
  //   );
  // }

  render() {
    if (!this.props.show) {
      return null;
    }

    const { classes } = this.props;
    return (
      <div>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.props.show}
          // TransitionComponent={Transition}
          keepMounted
          onClose={() => this.props.onClose}
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
                    <small>
                      To remove the patient from the study or to correct a
                      control arm designation mistake, please contact Technical
                      Support.
                    </small>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </div>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button onClick={() => this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.onClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddInterventionDialog.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default withStyles(componentsStyle)(AddInterventionDialog);
