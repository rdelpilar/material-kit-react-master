import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";

import NotificationsJQueryDataTable from "./NotificationsJQueryDataTable.jsx";
import axios from "axios";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class NotificationsJQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/patientinfo/list`
      )
      .then(res => {
        const data = res.data.patientInfos;
        this.setState({ data });
      });
  }

  render() {
    if (this.state.data.length <= 0) return false;

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
          <div className={classes.sections}>
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>Using jQuery DataTables</h2>
              </div>
            </div>
          </div>
          <br />
          <div className="NotificationsJQueryDataTable">
            <NotificationsJQueryDataTable data={this.state.data} />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(NotificationsJQuery);
