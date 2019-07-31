import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import { Divider } from "@material-ui/core";
import ClinicLocationsTable from "./Tables/ClinicLocationsTable";

class ClinicLocationsPortlet extends Component {
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
        <ClinicLocationsTable />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ClinicLocationsPortlet);
