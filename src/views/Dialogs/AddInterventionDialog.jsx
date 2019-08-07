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

import PermPhoneMsg from "@material-ui/icons/PermPhoneMsg";
import NoteAdd from "@material-ui/icons/NoteAdd";
import Dashboard from "@material-ui/icons/Dashboard";
import List from "@material-ui/icons/List";

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import { Divider } from "@material-ui/core";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// Transition.displayName = "Transition";

class AddInterventionDialog extends React.Component {
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
                    <GridItem xs={12} sm={12} md={8} lg={12}>
                      <NavPills
                        color="primary"
                        tabs={[
                          {
                            tabButton: "Current Notification",
                            tabIcon: Dashboard,
                            tabContent: (
                              <span>
                                <br />
                                <p>Current Notifications :</p>
                                <br />
                                <p>
                                  No PA pressure goal established / 08-02-2019
                                </p>
                              </span>
                            )
                          },
                          {
                            tabButton: "Send Patient Message(s)",
                            tabIcon: PermPhoneMsg,
                            tabContent: (
                              <span>
                                <br />
                                <p>
                                  Efficiently unleash cross-media information
                                  without cross-media value. Quickly maximize
                                  timely deliverables for real-time schemas.
                                </p>
                                <br />
                                <p>
                                  Dramatically maintain clicks-and-mortar
                                  solutions without functional solutions.
                                  Dramatically visualize customer directed
                                  convergence without revolutionary ROI.
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                                <Divider />
                                <Button
                                  onClick={this.props.onClose}
                                  color="primary"
                                >
                                  Send
                                </Button>
                              </span>
                            )
                          },
                          {
                            tabButton: "Add Clinical Note",
                            tabIcon: NoteAdd,
                            tabContent: (
                              <span>
                                <br />
                                <p>
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                                <br />
                                <p>
                                  Dramatically visualize customer directed
                                  convergence without revolutionary ROI.
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                                <br />
                                <p>
                                  Dramatically visualize customer directed
                                  convergence without revolutionary ROI.
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                                <Divider />
                                <Button
                                  onClick={this.props.onClose}
                                  color="primary"
                                >
                                  Save
                                </Button>
                              </span>
                            )
                          },
                          {
                            tabButton: "Make Medication List Change",
                            tabIcon: List,
                            tabContent: (
                              <span>
                                <br />
                                <p>
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                                <br />
                                <p>
                                  Dramatically visualize customer directed
                                  convergence without revolutionary ROI.
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                                <br />
                                <p>
                                  Dramatically visualize customer directed
                                  convergence without revolutionary ROI.
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits.
                                </p>
                              </span>
                            )
                          }
                        ]}
                      />
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
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
