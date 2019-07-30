import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ClinicUsersTable from "./Tables/ClinicUsersTable";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import { Divider } from "@material-ui/core";

class ClinicMedicalConditionsPortlet extends Component {
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
        <ClinicUsersTable />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ClinicMedicalConditionsPortlet);
