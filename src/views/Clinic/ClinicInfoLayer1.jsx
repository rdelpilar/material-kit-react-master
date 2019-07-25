import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

class ClinicInfoLayer1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={3} md={12}>
              <div
                className={classes.header}
                style={{
                  textTransform: "uppercase",
                  marginTop: "50px",
                  marginBottom: "50px",
                  textAlign: "center"
                }}
              >
                ClinicRCT
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ClinicInfoLayer1);
