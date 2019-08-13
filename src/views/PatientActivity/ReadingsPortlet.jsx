import React from "react";
import Divider from "@material-ui/core/Divider";
import ReadingsPortletTable from "./Tables/ReadingsPortletTable";

class ReadingsPortlet extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto" }}>
        <Divider />
        <br />
        <ReadingsPortletTable />
      </div>
    );
  }
}

export default ReadingsPortlet;
