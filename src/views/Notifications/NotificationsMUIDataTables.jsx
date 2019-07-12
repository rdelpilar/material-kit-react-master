import React, { Component } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ActionsMenu from "views/Actions/ActionsMenu";
import { CircularProgress, Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class NotificationsMUIDataTables extends Component {
  state = {
    page: 0,
    count: -1,
    data: [["Loading Data..."]],
    isLoading: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/patientinfo/list`
      )
      .then(res => {
        let patientInfos = res.data.patientInfos;

        let dataArr = this.createArray();

        patientInfos.forEach(item => {
          var arr = new Array();

          if (item.priority === true) {
            item.priority = "true";
          } else {
            item.priority = "false";
          }

          if (item.paNotification === true) {
            item.paNotification = "error";
          }

          if (item.subscribed === true) {
            item.subscribed = "true";
          }

          arr[0] = item.priority;
          arr[1] = item.name;
          arr[2] = item.lastMeasurement;
          arr[3] = item.lastPADiastolic;
          arr[4] = item.paTrend;
          arr[5] = item.lastPAMean;
          arr[6] = item.notification;
          arr[7] = item.sinceReview;
          arr[8] = item.nextBilling;
          arr[9] = item.coManagement;
          arr[10] = item.papImplantDate;
          arr[11] = item.myCardiomems;
          arr[12] = item.latestNotes;
          arr[13] = item.subscribed;
          arr[14] = item.clinicalTrial;

          dataArr.push(arr);
        });

        this.setState({
          data: dataArr,
          isLoading: false,
          count: res.data.size
        });
      });
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            "&:nth-child(2)": {
              //width: 120
            }
          }
        }
      }
    });

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
    const { data, page, count } = this.state;

    const options = {
      filter: true,
      responsive: "stacked",
      count: count,
      page: page,
      filterType: "dropdown",
      resizeableColumns: true
    };

    const columns = [
      {
        name: "Priority",
        key: "priority",
        options: {
          filter: true
        }
      },
      {
        name: "Patient Name",
        key: "name",
        options: {
          filter: true
        }
      },
      {
        name: "Last Measurement",
        key: "lastMeasurement",
        options: {
          filter: true
        }
      },
      {
        name: "Last PAD",
        key: "lastPADiastolic",
        options: {
          filter: true
        }
      },
      {
        name: "PA Trend",
        key: "paTrend",
        options: {
          filter: true
        }
      },
      {
        name: "Last PAM",
        key: "lastPAMean",
        options: {
          filter: true
        }
      },
      {
        name: "Notification",
        key: "notification",
        options: {
          filter: false
        }
      },
      {
        name: "Since Review",
        key: "sinceReview",
        options: {
          filter: true
        }
      },
      {
        name: "Next Billing",
        key: "nextBilling",
        options: {
          filter: true
        }
      },
      {
        name: "Co-Management",
        key: "coManagement",
        options: {
          filter: true
        }
      },
      {
        name: "PAP Implant Date",
        key: "papImplantDate",
        options: {
          filter: true
        }
      },
      {
        name: "myCardioMEMS Medication",
        key: "myCardiomems",
        options: {
          filter: true
        }
      },
      {
        name: "Latest Notes",
        key: "latestNotes",
        options: {
          filter: true
        }
      },
      {
        name: "Subscribed",
        key: "subscribed",
        options: {
          filter: true
        }
      },
      {
        name: "Clinical Trial",
        key: "clinicalTrial",
        options: {
          filter: true
        }
      }
    ];

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={<Typography variant="title">Notification</Typography>}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}

export default NotificationsMUIDataTables;
