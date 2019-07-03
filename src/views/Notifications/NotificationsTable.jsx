import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import ActionsMenu from "views/Actions/ActionsMenu";

import "../Styling/datatables.css";

const $ = require("jquery");
$.DataTable = require("datatables.net");

class NotificationsTable extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: [
        {
          title: "Patient / Clinician",
          data: this.getPatientClinicianColumn,
          ordering: false
        },
        {
          title: "Notification / Date",
          data: "notificationDate"
        },
        {
          title: "Goal / Type",
          data: "goal"
        },
        {
          title: "Last Measurement",
          data: "lastMeasurement"
        },
        {
          title: "Last Reading",
          data: "lastReading"
        },
        {
          title: "PA Trend (Last 7 days)",
          data: "paTrend"
        },
        {
          title: "Actions",
          data: getActionsColumn,
          ordering: false
        }
      ]
    });
  }

  getPatientClinicianColumn(data) {
    return (
      preparePatientClinicianColumn(data) +
      "<small>DOB: " +
      data.dob +
      "</small><br/>" +
      "<small>" +
      data.phone +
      "</small>" +
      "<br/><br/>" +
      data.subscribingClinicians
    );
  }

  componentWillUnmount() {
    this.$el.DataTable.destroy(true);
    // $(".data-table-wrapper")
    //   .find("table")
    //   .DataTable()
    //   .destroy(true);
  }

  render() {
    return (
      <div>
        <table className="display" width="70%" ref={el => (this.el = el)} />
      </div>
    );
  }
}

function preparePatientClinicianColumn(data) {
  return ReactDOMServer.renderToString(
    <Router>
      <Link to={{ pathname: "/activity/patient/" + data.id }}>
        <h4>{data.name}</h4>
      </Link>
    </Router>
  );
}

function getActionsColumn() {
  return ReactDOMServer.renderToString(<ActionsMenu></ActionsMenu>);
}

export default NotificationsTable;
