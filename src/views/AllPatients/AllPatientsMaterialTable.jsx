import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { CircularProgress, Typography } from "@material-ui/core";
import axios from "axios";

import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import Error from "@material-ui/icons/Error";
import Stars from "@material-ui/icons/Stars";
import Primary from "components/Typography/Primary";

class NotificationsMaterialTable extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        //`https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/patientinfo/list`
        `http://10.94.222.251:8090/api/v1/patientinfo/list`
      )
      .then(res => {
        let items = [];
        res.data.patientInfos.forEach(item => {
          if (item.priority === true) {
            item.priority = <Star color="primary" />;
          } else {
            item.priority = <StarBorder color="primary" />;
          }

          if (item.paNotification === true) {
            item.paNotification = <Error color="primary" />;
          }

          if (item.subscribed === true) {
            item.subscribed = <Stars color="primary" />;
          }

          items.push(item);
        });
        this.setState({
          data: items
        });
      });
  };

  createArray(length) {
    var arr = new Array(length || 0),
      i = length;
    if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);
      while (i--) arr[length - 1 - i] = this.createArray.apply(this, args);
    }

    return arr;
  }

  render() {
    if (this.state.count <= 0) return false;
    const { data } = this.state;

    const columns = [
      { title: "Priority", field: "priority" },
      { title: "Patient Name", field: "name" },
      { title: "Last Measurement", field: "lastMeasurement" },
      { title: "Last PA Diastolic", field: "lastPADiastolic" },
      { title: "PA Trend", field: "paTrend" },
      { title: "Last PA Mean", field: "lastPAMean" },
      { title: "Notification", field: "notification" },
      { title: "Since Review", field: "sinceReview" },
      { title: "Next Billing", field: "nextBilling" },
      { title: "Co-Management", field: "coManagement" },
      { title: "PAP Implant Date", field: "papImplantDate" },
      { title: "myCardioMEMS Medication", field: "myCardioMems" },
      { title: "Latest Notes", field: "latestNotes" },
      { title: "Subscribed", field: "subscribed" },
      { title: "Clinical Trial", field: "clinicalTrial" }
    ];

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    return (
      <MaterialTable
        title={<Typography variant="title">All Patients</Typography>}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default NotificationsMaterialTable;