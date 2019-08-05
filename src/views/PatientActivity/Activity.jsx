import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import PatientInfoLayer1 from "./PatientInfoLayer1";
import PatientInfoLayer2 from "./PatientInfoLayer2";
import PatientSecondaryNav from "./PatientSecondaryNav";
import ActivityNotification from "./ActivityNotification";
import ActivityPortletsContainer from "../PatientPortlets/ActivityPortletsContainer";

class Activity extends React.Component {
  constructor(props) {
    super(props);
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
            <PatientInfoLayer1 {...this.props.match.params} />
            <hr />
            <PatientInfoLayer2 {...this.props.match.params} />
          </div>
          <PatientSecondaryNav {...this.props.match.params} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <ActivityNotification />
          </div>
          <br />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <ActivityPortletsContainer />
          </div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(componentsStyle)(Activity);
