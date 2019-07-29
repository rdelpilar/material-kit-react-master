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

import Slide from "@material-ui/core/Slide";
import AddInterventionDialog from "views/Dialogs/AddInterventionDialog";

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
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      { title: "User Name", field: "userName" },
      { title: "User Type", field: "userType" },
      { title: "Telephone No.", field: "telephoneNumber" },
      { title: "Department", field: "department" }
    ];

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
        />
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(ClinicUsersTable);
