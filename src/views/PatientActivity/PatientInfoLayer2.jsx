import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

import Stars from "@material-ui/icons/Stars";
import StarIcon from "@material-ui/icons/Star";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import TextField from "@material-ui/core/TextField";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

class PatientInfoLayer2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { classes, id } = this.props;

    const subscribingClinicians = [
      "ClinicRCT_Phy_ImpTre1, ClinicRCT_Phy_ImpTre1",
      "ClinicRCT_Phy_ImpTre1, ClinicRCT_Phy_ImpTre1",
      "ClinicRCT_Phy_ImpTre1, ClinicRCT_Phy_ImpTre1"
    ];

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
          <div id="nav-tabs">
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
                    <ListItem>
                      <small>
                        ClinicRCT_Phy_ImpTre1, ClinicRCT_Phy_ImpTre1
                      </small>
                    </ListItem>
                    <ListItem>
                      <small>
                        ClinicRCT_Phy_ImpTre2, ClinicRCT_Phy_ImpTre2
                      </small>
                    </ListItem>
                    <ListItem>
                      <small>
                        ClinicRCT_Phy_ImpTre3, ClinicRCT_Phy_ImpTre3
                      </small>
                    </ListItem>
                  </List>
                </FormControl>
                <h4>
                  <StarIcon />
                  <small style={{ marginLeft: 5 }}>You are subscribed to this patient</small>
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <h4>
                  <small>Note / Edit:</small>
                </h4>
                <div>
                  <TextField
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
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

PatientInfoLayer2.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string
};

export default withStyles(tabsStyle)(PatientInfoLayer2);
