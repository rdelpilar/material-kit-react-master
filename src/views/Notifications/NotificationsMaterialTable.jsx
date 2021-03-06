import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle";

import MaterialTable from "material-table";
import axios from "axios";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Fade from "@material-ui/core/Fade";
import Chart from "../Charts/Chart";

import { connect } from "react-redux";
import { addPatientInfo } from "../../redux/actions";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Slide from "@material-ui/core/Slide";
import AddInterventionDialog from "views/Dialogs/AddInterventionDialog";
import { CircularProgress } from "@material-ui/core";
import AddClinicalNoteDialog from "views/Dialogs/AddClinicalNoteDialog";
import UpdateStatusDialog from "views/Dialogs/UpdateStatusDialog";
import RemindMeDialog from "views/Dialogs/RemindMeDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class NotificationsMaterialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      classicModal: false,
      loading: "progress",
      addInterventionsModal: false,
      addClinicalNoteModal: false,
      updateStatusModal: false,
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

  toggleUpdateStatusModal = () => {
    this.setState({
      updateStatusModal: !this.state.updateStatusModal
    });
  };

  toggleRemindMeModal = () => {
    this.setState({
      remindMeModal: !this.state.remindMeModal
    });
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

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

          item.notificationAndDate = this.getNotificationDateColumn(
            item.notificationDate,
            item.notification
          );

          item.metricType = this.getGoalTypeColumn(item.goalType, item.goal);

          item.paTrend = (
            <div>
              <Chart chartDivId={cc} />
            </div>
          );

          item.action = (
            <div style={{ marginTop: 10 }}>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    noLiPadding
                    dropdownHeader="Actions"
                    buttonText={<MoreVertIcon />}
                    buttonProps={{
                      color: "transparent"
                    }}
                    dropdownList={[
                      <Link
                        key=""
                        className={classes.dropdownLink}
                        onClick={this.toggleAddInterventionsModal}
                      >
                        Add Intervention
                      </Link>,
                      { divider: true },
                      <Link
                        key=""
                        className={classes.dropdownLink}
                        onClick={this.toggleAddClinicalNoteModal}
                      >
                        Add Clinical Note
                      </Link>,
                      <Link
                        key=""
                        className={classes.dropdownLink}
                        onClick={this.toggleUpdateStatusModal}
                      >
                        Update Status
                      </Link>,
                      <Link key="" className={classes.dropdownLink}>
                        Clear Notification(s)
                      </Link>,
                      <Link
                        key=""
                        className={classes.dropdownLink}
                        onClick={this.toggleRemindMeModal}
                      >
                        Remind Me
                      </Link>,
                      <Link key="" className={classes.dropdownLink}>
                        Subscribed
                      </Link>
                    ]}
                  />
                </ListItem>
              </List>
            </div>
          );

          items.push(item);

          // Add patient's info into the global store
          this.props.addPatientInfo(item.id, item);
        });

        this.setState({
          data: items
        });

        this.setState({
          loading: "success"
        });
      });
  };

  getPatientClinicianColumn(id, name, dob, phone, subscribingClinicians) {
    return (
      <div>
        <Link to={"/activity/patient/" + id}>
          <p
            style={{
              color: "#68b3c8",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.4em"
            }}
          >
            {name}
          </p>
        </Link>
        <small style={{ fontSize: "90%" }}>DOB: {dob} </small>
        <br />
        <small>{phone}</small>
        <br />
        <br />
        {subscribingClinicians}
      </div>
    );
  }

  getGoalTypeColumn(goalType, goal) {
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

  getNotificationDateColumn(notificationDate, notification) {
    return (
      <div>
        <h6 className={this.props.title}>
          {notificationDate} / {notification}
        </h6>
      </div>
    );
  }

  customPatientAndClinicianSearch(str, data) {
    if (str.trim() === "" || typeof data === "undefined" || data == null)
      return null;

    const name = data.name;
    const dob = data.dob;
    const phone = data.phone;
    const subscribingClinicians = data.subscribingClinicians;

    if (
      name.toLowerCase().indexOf(str) !== -1 ||
      dob.toLowerCase().indexOf(str) !== -1 ||
      phone.toLowerCase().indexOf(str) !== -1 ||
      subscribingClinicians.toLowerCase().indexOf(str) !== -1
    ) {
      return data.patientClinician;
    }

    return null;
  }

  customGoalAndMetricTypeSearch(str, data) {
    if (str.trim() === "" || typeof data === "undefined" || data == null)
      return null;

    const goal = data.goal;
    const goalType = data.goalType;

    if (
      goal.toLowerCase().indexOf(str) !== -1 ||
      goalType.toLowerCase().indexOf(str) !== -1
    )
      return data.metricType;

    return null;
  }

  customDateAndNotificationSearch(str, data) {
    if (str.trim() === "" || typeof data === "undefined" || data == null)
      return null;

    const notification = data.notification;
    const date = data.notificationDate;

    if (
      notification.toLowerCase().indexOf(str) !== -1 ||
      date.toLowerCase().indexOf(str) !== -1
    ) {
      return data.notificationAndDate;
    }

    return null;
  }

  sortPatientColumnByName(a, b) {
    if (
      typeof a === "undefined" ||
      a == null ||
      b === "undefined" ||
      b == null
    ) {
      return null;
    }

    return a.name.localeCompare(b.name, "en");
  }

  sortNotificationByDate(a, b) {
    if (
      typeof a === "undefined" ||
      a == null ||
      b === "undefined" ||
      b == null
    ) {
      return null;
    }

    // Slow, find a better algorithm
    let arrA = a.notificationDate.split("-");
    a = swap(arrA, 0, 1)
      .reverse()
      .join("");

    let arrB = b.notificationDate.split("-");
    b = swap(arrB, 0, 1)
      .reverse()
      .join("");

    return a.localeCompare(b, "en");
  }

  sortGoalByGoal(a, b) {
    if (
      typeof a === "undefined" ||
      a == null ||
      b === "undefined" ||
      b == null
    ) {
      return null;
    }

    return a.goal - b.goal;
  }

  render() {
    const { data, count, loading } = this.state;

    if (count <= 0) return false;

    const options = {
      pageSize: 10,
      filtering: false,
      headerStyle: { padding: "10px", backgroundColor: "#F2F3F7" },
      rowStyle: {
        // hover: { backgroundColor: "#49bb7b" }
      }
    };

    // const url = "";

    const columns = [
      {
        title: "Patient / Clinician",
        field: "patientClinician",
        customSort: this.sortPatientColumnByName,
        customFilterAndSearch: this.customPatientAndClinicianSearch
      },
      {
        title: "Date / Notification",
        field: "notificationAndDate",
        customSort: this.sortNotificationByDate,
        customFilterAndSearch: this.customDateAndNotificationSearch
      },
      {
        title: "Goal / Type",
        field: "metricType",
        customSort: this.sortGoalByGoal,
        customFilterAndSearch: this.customGoalAndMetricTypeSearch
      },
      { title: "Last Measurement", field: "lastMeasurement" },
      { title: "Last Reading", field: "lastReading" },
      {
        title: "PA Trend (Last 7 days)",
        field: "paTrend",
        searchable: false,
        sorting: false
      },
      { title: "Actions", field: "action", searchable: false, sorting: false }
    ];

    // <Fade
    //   in={this.state.loading === "success"}
    //   style={{
    //     transitionDelay: this.state.loading === "success" ? "1000ms" : "0ms"
    //   }}
    //   unmountOnExit
    // ></Fade>
    return (
      <div>
        {loading === "progress" ? (
          <div style={{ height: "60px", textAlign: "center" }}>
            {loading === "success" ? null : (
              <Fade
                in={loading === "progress"}
                style={{
                  transitionDelay: loading === "progress" ? "300ms" : "0ms"
                }}
                unmountOnExit
              >
                <CircularProgress style={{ color: "#009CDE" }} disableShrink />
              </Fade>
            )}
          </div>
        ) : null}
        <div>
          <MaterialTable
            title={
              // <div className={classes.typo}>
              <div>
                <h3>Notification</h3>
              </div>
            }
            data={data}
            // data={query =>
            //   new Promise((resolve, reject) => {
            //     // use query to produce data. query contains search, filter, page and sort data.
            //     console.log("query: ", query);
            //     fetch(url) // You can send query to your server directly.
            //       .then(response => response.json())
            //       .then(result => {
            //         resolve({
            //           data: data,
            //           page: result.pageNumber,
            //           totalCount: result.total
            //         });
            //       });
            //   })
            // }
            columns={columns}
            options={options}
            // icons={icons}
          />
        </div>
        <AddInterventionDialog
          show={this.state.addInterventionsModal}
          onClose={this.toggleAddInterventionsModal}
        />
        <AddClinicalNoteDialog
          show={this.state.addClinicalNoteModal}
          onClose={this.toggleAddClinicalNoteModal}
        />
        <UpdateStatusDialog
          show={this.state.updateStatusModal}
          onClose={this.toggleUpdateStatusModal}
        />
        <RemindMeDialog
          show={this.state.remindMeModal}
          onClose={this.toggleRemindMeModal}
        />
      </div>
    );
  }
}

// MySnackbarContentWrapper.propTypes = {
//   className: PropTypes.string,
//   message: PropTypes.string,
//   onClose: PropTypes.func
// };

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;

  return arr;
}

NotificationsMaterialTable.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  dangerText: PropTypes.string,
  addPatientInfo: PropTypes.func.isRequired
};

const NotificationsMaterialTableWithCSS = withStyles(headerLinksStyle)(
  NotificationsMaterialTable
);

export default connect(
  null,
  { addPatientInfo }
)(NotificationsMaterialTableWithCSS);
