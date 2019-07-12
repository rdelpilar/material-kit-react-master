import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

//import AllPatientsMUIDataTables from "views/AllPatients/AllPatientsMUIDataTables.jsx";
import AllPatientsMaterialTable from "views/AllPatients/AllPatientsMaterialTable.jsx";

class Notifications extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          brand=""
          leftLinks={<HeaderLinksLeft />}
          rightLinks={<HeaderLinksRight />}
          fixed
          color="primary"
          {...rest}
        />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div style={{ marginTop: 120 + "px" }} />
          <br />
          <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto"}}>
            <AllPatientsMaterialTable />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Notifications);
