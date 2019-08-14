import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import { Link } from "react-router-dom";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class ActivityNotification extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.section}
        style={{
          paddingTop: 0 + "px",
          paddingBottom: 10 + "px",
          backgroundColor: "#FFF"
        }}
      >
        <div className={classes.container} style={{ maxWidth: 85 + "%" }}>
          <div id="nav-tabs">
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <h4>
                  <small>Notification / Date</small>
                </h4>
                <h4 style={{ marginTop: 0 + "px" }}>
                  No PA Pressure goal Established / 07-31-2019
                </h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <h4>
                  <small>Goal / Type</small>
                </h4>
                <h4 style={{ marginTop: 0 + "px" }}>No Goal Set / PA Mean</h4>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <h4>
                  <small>Last Reading</small>
                </h4>
                <h3 style={{ marginTop: 0 + "px" }}>55</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <h4>
                  <small>Actions</small>
                </h4>
                <CustomDropdown
                  style={{ zIndex: 99999 }}
                  // caret={false}
                  dropdownHeader="Actions"
                  buttonText={<MoreVertIcon />}
                  buttonProps={{
                    className:
                      classes.navLink + " " + classes.imageDropdownButton,
                    color: "transparent"
                  }}
                  dropdownList={[
                    <Link
                      className={classes.dropdownLink}
                      onClick={this.toggleAddInterventionsModal}
                    >
                      Add Intervention
                    </Link>,
                    { divider: true },
                    <Link
                      className={classes.dropdownLink}
                      onClick={this.toggleAddClinicalNoteModal}
                    >
                      Add Clinical Note
                    </Link>,
                    <Link
                      className={classes.dropdownLink}
                      onClick={this.toggleUpdateStatusModal}
                    >
                      Update Status
                    </Link>,
                    "Clear Notification(s)",
                    <Link
                      className={classes.dropdownLink}
                      onClick={this.toggleRemindMeModal}
                    >
                      Remind Me
                    </Link>,
                    "Subscribed"
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ActivityNotification);
