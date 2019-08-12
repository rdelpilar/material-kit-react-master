import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { FormControl, FormLabel, TextField } from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import Button from "components/CustomButtons/Button.jsx";

import { connect } from "react-redux";
import { toggleSnackbar } from "../../redux/actions";

class AddClinicalNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarEnabled: false,
      snackbarMessage: "Note has been saved!"
    };
  }

  handleSave = () => {
    this.setState({
      snackbarEnabled: !this.state.snackbarEnabled
    });
    this.props.toggleSnackbar(this.state.snackbarEnabled, this.state.snackbarMessage);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer style={{ height: 50, maxWidth: "99%" }}>
          <br />
        </GridContainer>
        <GridContainer style={{ maxWidth: "99%" }}>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <br />
                <div className={classes.container}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                    style={{ width: "100%" }}
                  >
                    <FormLabel component="legend">
                      <span>
                        <Info color="primary" style={{ marginRight: 5 }} />
                        <em>This note will not be sent to this patient</em>
                      </span>
                    </FormLabel>
                    <br />
                    <TextField
                      label="Clinic Notes"
                      multiline
                      rows="8"
                      rowsMax="10"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      placeholder="Add clinic note..."
                      style={{
                        backgroundColor: "#FFFFFF",
                        marginTop: 0
                      }}
                    />
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
          <GridItem xs={12} sm={12} md={4} lg={4}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <br />
                <div className={classes.container}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                  >
                    <FormLabel component="legend">
                      <h4>
                        <small style={{ fontWeight: 500 }}>
                          Patient Contact:
                        </small>
                      </h4>
                      <h4>1-818-111-2345</h4>
                      <h4>Primary Phone</h4>
                    </FormLabel>
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

AddClinicalNote.propTypes = {
  classes: PropTypes.object,
  toggleSnackbar: PropTypes.func.isRequired
};

const AddClinicalNoteWithCSS = withStyles(componentsStyle)(AddClinicalNote);

export default connect(
  null,
  { toggleSnackbar }
)(AddClinicalNoteWithCSS);
