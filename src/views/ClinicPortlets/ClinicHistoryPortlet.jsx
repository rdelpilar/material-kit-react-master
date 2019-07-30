import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import { Divider } from "@material-ui/core";
import ClinicHistoryTable from "./Tables/ClinicHistoryTable";

class ClinicHistoryPortlet extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto" }}>
        <Divider />
        <br />
        <ClinicHistoryTable />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ClinicHistoryPortlet);
