import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactDOMServer from "react-dom/server";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import MaterialTable from "material-table";
import axios from "axios";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Primary from "components/Typography/Primary";
import Typography from "@material-ui/core/Typography";
import Danger from "components/Typography/Danger.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Chart from "../Charts/Chart";

import Button from "components/CustomButtons/Button.jsx";
//import AddInterventionsDialog from "../Dialogs/AddInterventionDialog";

import Slide from "@material-ui/core/Slide";
import AddInterventionDialog from "views/Dialogs/AddInterventionDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class NotificationsMaterialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      classicModal: false
    };
  }
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

          item.goalType = this.getGoalTypeColumn(item.goalType, item.goal);

          item.notificationDate = this.getNotificationDateColumn(
            item.notificationDate,
            item.notification
          );

          item.paTrend = (
            <div>
              <Chart chartDivId={cc} />
            </div>
          );

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
              {/* <CustomDropdown
                noLiPadding
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={MoreVertIcon}
                dropdownList={[
                  <AddInterventionsDialog></AddInterventionsDialog>,
                  <hr/>,
                  <Link to="/learn-more" className={classes.dropdownLink}>
                    Add Clinical Note
                  </Link>,
                  <Link to="/about" className={classes.dropdownLink}>
                    Update Status
                  </Link>,
                  <Link to="#" className={classes.dropdownLink}>
                    Clear Notification(s)
                  </Link>,
                  <Link to="#" className={classes.dropdownLink}>
                    Remind Me
                </Link>,
                  <Link to="#" className={classes.dropdownLink}>
                    Subscribed
              </Link>
                ]}
              /> */}
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
        {/* <Link to={"/activity/patient/" + id}> */}
        <Link
          to={{
            pathname: "/activity/patient/" + id,
            state: {
              patientName: name,
              dob: dob,
              subscribingClinicians: subscribingClinicians
            }
          }}
        >
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

    // Following code uses material-ui tooltip...

    // const HtmlTooltip = withStyles(theme => ({
    //   tooltip: {
    //     backgroundColor: "#f5f5f9",
    //     color: "rgba(0, 0, 0, 0.87)",
    //     maxWidth: 220,
    //     fontSize: theme.typography.pxToRem(12),
    //     border: "1px solid #dadde9"
    //   }
    // }))(Tooltip);

    // let goalInt = parseInt(goal, 10);
    // if (goalInt >= 30) {
    //   return (
    //     <div>
    //       <div>
    //         <HtmlTooltip
    //           title={
    //             <React.Fragment>
    //               <Typography color="inherit">Warning</Typography>
    //               <em>{"And here's"}</em> <b>{"some"}</b>{" "}
    //               <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
    //             </React.Fragment>
    //           }
    //         >
    //           <h2 style={{ color: "#f44336" }} className={this.props.title}>
    //             {goal}
    //           </h2>
    //         </HtmlTooltip>
    //       </div>
    //       <div>{goalType}</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>
    //         <h2 className={this.props.title + " " + this.props.dangerText}>
    //           {goal}
    //         </h2>
    //       </div>
    //       <div>{goalType}</div>
    //     </div>
    //   );
    // }

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
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      {
        title: "Patient / Clinician",
        field: "patientClinician",
        searchable: true
      },
      { title: "Notification / Date", field: "notificationDate" },
      { title: "Goal / Type", field: "goalType" },
      { title: "Last Measurement", field: "lastMeasurement" },
      { title: "Last Reading", field: "lastReading" },
      { title: "PA Trend (Last 7 days)", field: "paTrend" },
      { title: "Actions", field: "action" }
    ];

    return (
      <div>
        <MaterialTable
          title={
            <div className={classes.typo}>
              <h3>Notification</h3>
            </div>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(NotificationsMaterialTable);
