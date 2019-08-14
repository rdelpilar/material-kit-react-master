import React, { Component } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle";
import AddInterventionDialog from "views/Dialogs/AddInterventionDialog";
import AddClinicalNoteDialog from "views/Dialogs/AddClinicalNoteDialog";
import RemindMeDialog from "views/Dialogs/RemindMeDialog";

class Actions extends Component {
  constructor() {
    super();
    this.state = {
      addInterventionsModal: false,
      addClinicalNoteModal: false,
      remindMeModal: false
    };
  }

  toggleAddInterventionsModal = () => {
    this.setState({
      addInterventionsModal: !this.state.addInterventionsModal
    });
  };

  toggleAddClinicalNoteModal = () => {
    this.setState({
      addClinicalNoteModal: !this.state.addClinicalNoteModal
    });
  };

  toggleRemindMeModal = () => {
    this.setState({
      remindMeModal: !this.state.remindMeModal
    });
  };

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div style={{ marginTop: 10 + "px" }}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="More Actions"
              buttonIcon="more_vert"
              buttonProps={{
                color: "primary"
              }}
              dropdownList={[
                <Link className={classes.dropdownLink}>Inactivate</Link>,
                <Link
                  className={classes.dropdownLink}
                  onClick={this.toggleAddInterventionsModal}
                >
                  Add Intervention
                </Link>,
                <Link
                  className={classes.dropdownLink}
                  onClick={this.toggleAddClinicalNoteModal}
                >
                  Add Clinical Note
                </Link>,
                <Link
                  className={classes.dropdownLink}
                  onClick={this.toggleRemindMeModal}
                >
                  Remind Me
                </Link>
              ]}
            />
          </ListItem>
        </List>
        <AddInterventionDialog
          show={this.state.addInterventionsModal}
          onClose={this.toggleAddInterventionsModal}
        />
        <AddClinicalNoteDialog
          show={this.state.addClinicalNoteModal}
          onClose={this.toggleAddClinicalNoteModal}
        />
        <RemindMeDialog
          show={this.state.remindMeModal}
          onClose={this.toggleRemindMeModal}
        />
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(Actions);
