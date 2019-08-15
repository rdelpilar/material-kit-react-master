import React from "react";
import Divider from "@material-ui/core/Divider";
import DirectTrendChart from "views/Charts/DirectTrendChart";

class DirectTrendChartPortlet extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto" }}>
        <Divider />
        <br />
        <DirectTrendChart />
      </div>
    );
  }
}

export default DirectTrendChartPortlet;
