import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

import FormControl from "@material-ui/core/FormControl";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { List, ListItem } from "@material-ui/core";
import AddPatientNoteDialog from "views/Dialogs/AddPatientNoteDialog";
import Button from "components/CustomButtons/Button.jsx";
import Badge from "components/Badge/Badge.jsx";
import Stars from "@material-ui/icons/Stars";

class PatientInfoLayer2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPatientNoteModal: false
    };
  }

  toggleAddPatientNoteModal = () => {
    this.setState({
      addPatientNoteModal: !this.state.addPatientNoteModal
    });
  };

  render() {
    const { classes, id } = this.props;

    return (
      <div
        className={classes.section}
        style={{
          paddingTop: 0 + "px",
          paddingBottom: 10 + "px",
          backgroundColor: "#FFF"
        }}
      >
        <div className={classes.container} style={{ maxWidth: "95%" }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}>
              <h4>
                <small>Patient ID: {id}</small>
              </h4>
              <h4>
                <small>Merlin.net Number:</small>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <h4>
                <small>PA Sensor:</small>
              </h4>
              <h4>
                <small>ICD/Pacemaker:</small>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <h4>
                <small>Diagnosis:</small>
              </h4>
              <h4>
                <small></small>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <h4>
                <small>Treating Physician:</small>
              </h4>
              <h4>
                <small></small>
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <h4>
                <small>Subscribing Clinician(s):</small>
              </h4>
              <FormControl
                className={classes.formControl}
                style={{
                  minWidth: "100%"
                }}
              >
                <List
                  dense={true}
                  style={{
                    width: "100%",
                    maxWidth: 180,
                    maxHeight: 60,
                    overflow: "auto"
                  }}
                >
                  <ListItem button>
                    <small>ClinicRCT_Phy_ImpTre1, ClinicRCT_Phy_ImpTre1</small>
                  </ListItem>
                  <ListItem button>
                    <small>ClinicRCT_Phy_ImpTre2, ClinicRCT_Phy_ImpTre2</small>
                  </ListItem>
                  <ListItem button>
                    <small>ClinicRCT_Phy_ImpTre3, ClinicRCT_Phy_ImpTre3</small>
                  </ListItem>
                </List>
              </FormControl>
              {/* <h4>
                <StarIcon />
                <small style={{ marginLeft: 5 }}>
                  You are subscribed to this patient
                </small>
              </h4> */}
              <Badge color="info" style={{ alignText: "center" }}>
                Subscribed
              </Badge>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <h4>
                <small>Note:</small>
              </h4>
              <div>
                {/* <TextField
                    id="outlined-multiline-flexible"
                    label=""
                    multiline
                    rowsMax="4"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    placeholder="Add note..."
                    style={{ backgroundColor: "#FFFFFF", marginTop: 0 + "px" }}
                  /> */}
                <Button
                  color="primary"
                  size="sm"
                  onClick={this.toggleAddPatientNoteModal}
                >
                  Add / Edit
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <AddPatientNoteDialog
          show={this.state.addPatientNoteModal}
          onClose={this.toggleAddPatientNoteModal}
        />
      </div>
    );
  }
}

PatientInfoLayer2.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string
};

export default withStyles(tabsStyle)(PatientInfoLayer2);
