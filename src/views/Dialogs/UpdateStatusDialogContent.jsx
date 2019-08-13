import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { FormControl, TextField } from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import Button from "components/CustomButtons/Button.jsx";

import { connect } from "react-redux";
import { toggleSnackbar } from "../../redux/actions";

class UpdateStatusDialogContent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSave = () => {
    const message = "Status has been updated!";
    this.props.toggleSnackbar(true, message);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer style={{ maxWidth: "99%" }}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <br />
                <div className={classes.container}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                    style={{ width: "100%" }}
                  >
                    <TextField
                      label="Status"
                      multiline
                      rows="6"
                      rowsMax="8"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter status..."
                      style={{
                        backgroundColor: "#FFFFFF",
                        marginTop: 0
                      }}
                    />
                    <div>
                      <Info color="primary" style={{ marginRight: 5 }} />
                      <em>
                        The status is cleared when the patient is removed from
                        the Notification List. Previous statuses can be viewed
                        in the Patient History.
                      </em>
                    </div>
                    <div>
                      <GridContainer style={{ textAlign: "right" }}>
                        <GridItem xs={12} sm={12} md={12}>
                          <Button onClick={this.handleSave} color="primary">
                            Save
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </FormControl>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UpdateStatusDialogContent.propTypes = {
  classes: PropTypes.object,
  toggleSnackbar: PropTypes.func.isRequired
};

const UpdateStatusDialogContentWithCSS = withStyles(componentsStyle)(
  UpdateStatusDialogContent
);

export default connect(
  null,
  { toggleSnackbar }
)(UpdateStatusDialogContentWithCSS);
