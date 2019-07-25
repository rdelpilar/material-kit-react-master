import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import PatientInfoLayer1 from "../Activity/PatientInfoLayer1";
import PatientInfoLayer2 from "../Activity/PatientInfoLayer2";
import PatientSecondaryNav from "../Activity/PatientSecondaryNav";
import SettingsPortletContainer from "../PatientPortlets/SettingsPortletContainer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

class Settings extends React.Component {
  constructor() {
    super();
  }

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

        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: 80 + "px" }}
        >
          <br />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <PatientInfoLayer1 />
            <hr />
            <PatientInfoLayer2 />
          </div>
          <PatientSecondaryNav />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <SettingsPortletContainer />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Settings);
