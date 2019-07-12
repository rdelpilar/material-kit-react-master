import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { CircularProgress, Typography } from "@material-ui/core";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Primary from "components/Typography/Primary";
import Chart from "../Charts/Chart";

class NotificationsMaterialTable extends Component {
  state = {
    data: [],
    anchorEl: null
  };

  //this.handleClick = this.handleClick.bind(this);
  //this.handleClose = this.handleClose.bind(this);

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
    console.log(this.state.anchorEl);
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
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
    const { anchorEl } = this.state;
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/patientinfo/list`
        //`http://10.94.222.251:8090/api/v1/patientinfo/list`
      )
      .then(res => {
        let items = [];
        let chartDiv = "chartDiv_";
        let i = 0;

        res.data.patientInfos.forEach(item => {
          let cc = chartDiv + i++;

          item.paTrend = (
            <div>
              <Chart chartDivId={cc} />
            </div>
          );

          item.action = (
            <div>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          );

          items.push(item);
        });

        this.setState({
          data: items
        });
      });
  };

  render() {
    if (this.state.count <= 0) return false;
    const { data } = this.state;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      { title: "Patient / Clinician", field: "name" },
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
          title={<Typography variant="title">Notification</Typography>}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default NotificationsMaterialTable;
