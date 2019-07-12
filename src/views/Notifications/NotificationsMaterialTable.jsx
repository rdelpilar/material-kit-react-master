import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Apps, CloudDownload, Help, CompareArrows } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";


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
        //`http://10.94.222.251:8090/api/v1/patientinfo/list`
      )
      .then(res => {
        let items = [];
        let chartDiv = "chartDiv_";
        let i = 0;

        const { classes } = this.props;

        res.data.patientInfos.forEach(item => {
          let cc = chartDiv + i++;

          item.paTrend = (
            <div>
              <Chart chartDivId={cc} />
            </div>
          );

          item.action = (
            <div>
              <CustomDropdown
                noLiPadding
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={MoreVertIcon}
                dropdownList={[
                  <Link to="/help" className={classes.dropdownLink}>
                    Help
                  </Link>,
                  <a href="/learn-more" className={classes.dropdownLink}>
                    Learn More
                  </a>,
                  <Link to="/about" className={classes.dropdownLink}>
                    About
                  </Link>,
                  <Link to="/practice-site" className={classes.dropdownLink}>
                    Practice Site
                  </Link>
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

export default withStyles(headerLinksStyle)(NotificationsMaterialTable);
