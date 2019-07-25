import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import ClinicInfoLayer1 from "./ClinicInfoLayer1";
import ClinicSecondaryNav from "./ClinicSecondaryNav";
import ClinicSettingsPortletsContainer from "views/ClinicPortlets/ClinicSettingsPortletsContainer";

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
            <ClinicInfoLayer1 />
          </div>
          <ClinicSecondaryNav />
          <br />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <ClinicSettingsPortletsContainer />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Settings);
