import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import MaterialTable, { MTableToolbar } from "material-table";
import axios from "axios";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Primary from "components/Typography/Primary";

import Slide from "@material-ui/core/Slide";
import AddInterventionDialog from "views/Dialogs/AddInterventionDialog";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Typography, Divider, Select, MenuItem } from "@material-ui/core";
import { values } from "regenerator-runtime";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class ClinicUsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      classicModal: false
    };
  }
  componentDidMount() {
    //this.getData();
  }

  componentWillUnmount() {}

  getData = () => {
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/patientinfo/list`
      )
      .then(res => {
        let items = [];
        let chartDiv = "chartDiv_";
        let i = 0;

        const { classes } = this.props;

        res.data.patientInfos.forEach(item => {
          let cc = chartDiv + i++;

          item.patientClinician = this.getPatientClinicianColumn(
            item.id,
            item.name,
            item.dob,
            item.phone,
            item.subscribingClinicians
          );

          item.goalType = this.getGoalTypeColumn(item.goalType, item.goal);

          item.notificationDate = this.getNotificationDateColumn(
            item.notificationDate,
            item.notification
          );

          item.paTrend = <div>{/* <Chart chartDivId={cc} /> */}</div>;

          item.action = (
            <div>
              <CustomDropdown
                left
                caret={false}
                dropdownHeader="Actions"
                buttonText={<MoreVertIcon />}
                buttonProps={{
                  className:
                    classes.navLink + " " + classes.imageDropdownButton,
                  color: "transparent"
                }}
                dropdownList={[
                  <AddInterventionDialog>
                    Add Intervention
                  </AddInterventionDialog>,
                  { divider: true },
                  "Add Clinical Note",
                  "Update Status",
                  "Clear Notification(s)",
                  "Remind Me",
                  "Subscribed"
                ]}
              />
            </div>
          );

          items.push(item);
        });

        this.setState({
          data: items
        });
      });
  };

  getPatientClinicianColumn(id, name, dob, phone, subscribingClinicians) {
    return (
      <div>
        <Link to={"/activity/patient/" + id}>
          <h4>{name}</h4>
        </Link>
        <small>DOB: {dob} </small>
        <br />
        <small>{phone}</small>
        <br />
        <br />
        {subscribingClinicians}
      </div>
    );
  }

  getGoalTypeColumn(goalType, goal) {
    let goalInt = parseInt(goal, 10);
    if (goalInt >= 30) {
      return (
        <div>
          <div>
            <h2 style={{ color: "#f44336" }} className={this.props.title}>
              {goal}
            </h2>
          </div>
          <div>{goalType}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h2 className={this.props.title + " " + this.props.dangerText}>
              {goal}
            </h2>
          </div>
          <div>{goalType}</div>
        </div>
      );
    }
  }

  getNotificationDateColumn(notification, notificationDate) {
    return (
      <div>
        <div>
          <h6 className={this.props.title}>
            {notification} / {notificationDate}
          </h6>
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    if (this.state.count <= 0) return false;
    const { data } = this.state;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: "#F2F3F7", padding: "10px" }
    };

    const columns = [
      { title: "Taken on", field: "takenOn" },
      { title: "PA Systolic", field: "paSystolic" },
      { title: "PA Diastolic", field: "paDiastolic" },
      { title: "PA Mean", field: "paMean" },
      { title: "+/- Goal", field: "plusMinusGoal" },
      { title: "Heart Rate", field: "heartRate" },
      { title: "Cardiac Output", field: "cardiacOutput" },
      { title: "Waveform Status", field: "waveformStatus" }
    ];

    const components = {
      Toolbar: props => (
        <div>
          <br />
          <div style={{ padding: "0px 50px" }}>
            <GridContainer>
              <GridItem xs={12} sm={11} md={1}>
                <h5 style={{ marginBottom: 0 }}>
                  <small>GOAL</small>
                </h5>
                <Typography variant="h4">24</Typography>
                <h5 style={{ marginTop: 0, marginBottom: 0 }}>
                  <small>Set 08-13-2019</small>
                </h5>
                <h5 style={{ marginTop: 0, marginBottom: 0 }}>
                  <small>PA Mean</small>
                </h5>
              </GridItem>
              <GridItem xs={1} sm={1} md={1}>
                <Divider
                  style={{ width: "1px", padding: "1px", height: "110px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <h5 style={{ marginBottom: 0 }}>
                  <small>30 DAY READING SUMMARY</small>
                  <br />
                  <small>(does not consider readings received today)</small>
                </h5>
                <Typography variant="h4">0</Typography>
                <h5 style={{ marginTop: 0, marginBottom: 0 }}>
                  <small>Reading Compliance</small>
                </h5>
              </GridItem>
              <GridItem xs={12} sm={6} md={1} style={{ marginTop: "60px" }}>
                <Typography variant="h4" style={{ marginBottom: 0 }}>
                  0
                </Typography>
                <h5 style={{ marginTop: 0, marginBottom: 0 }}>
                  <small>Missed</small>
                </h5>
              </GridItem>
              <GridItem xs={12} sm={5} md={1} style={{ marginTop: "60px" }}>
                <Typography variant="h4" style={{ marginBottom: 0 }}>
                  0
                </Typography>
                <h5 style={{ marginTop: 0, marginBottom: 0 }}>
                  <small>Suspect</small>
                </h5>
              </GridItem>
              <GridItem xs={1} sm={1} md={1}>
                <Divider
                  style={{ width: "1px", padding: "1px", height: "110px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={1}>
                <h5 style={{ marginBottom: 0 }}>
                  <small>FILTER</small>
                </h5>
                <Select
                  value={"all"}
                  inputProps={{ name: "items", id: "items" }}
                  style={{ marginTop: "40px" }}
                >
                  <MenuItem value={"all"}>All</MenuItem>
                </Select>
              </GridItem>
              <GridItem xs={12} sm={6} md={3} style={{ marginTop: "60px" }}>
                <MTableToolbar {...props} />
              </GridItem>
            </GridContainer>
          </div>
          <br />
        </div>
      )
    };

    return (
      <div>
        <MaterialTable
          title=""
          //   title={
          //     <div className={classes.typo}>
          //       <h3>Notification</h3>
          //     </div>
          //   }
          data={data}
          columns={columns}
          options={options}
          components={components}
        />
      </div>
    );
  }
}

ClinicUsersTable.propTypes = {
  classes: PropTypes.object
};

export default withStyles(headerLinksStyle)(ClinicUsersTable);
