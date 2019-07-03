import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import { Link } from "react-router-dom";
class Activity extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const { params } = this.props.match;
    return (
      <div>
        <Header
          brand="Abbott"
          leftLinks={<HeaderLinksLeft />}
          rightLinks={<HeaderLinksRight />}
          fixed
          color="primary"
          // changeColorOnScroll={{
          //   height: 400,
          //   color: "white"
          // }}
          {...rest}
        />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{params.id}</p>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Activity);
