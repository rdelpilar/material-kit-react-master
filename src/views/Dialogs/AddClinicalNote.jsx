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
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

class AddClinicalNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackbar: false,
      vertical: "top",
      horizontal: "right",
      Transition: Grow
    };
  }

  handleSendMessageClick = () => {
    console.log("Clicked");
    this.setState({ openSnackbar: true });
  };

  handleClose = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, openSnackbar } = this.state;
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
                          <Button
                            onClick={this.handleSendMessageClick}
                            color="primary"
                          >
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
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={openSnackbar}
          onClose={this.handleClose}
          autoHideDuration={5000}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          // message={<span id="message-id">Message sent</span>}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            message="Note has been saved!"
          />
        </Snackbar>
      </div>
    );
  }
}

function MySnackbarContentWrapper(props) {
  const { message, onClose } = props;
  const Icon = CheckCircleIcon;

  return (
    <SnackbarContent
      style={{
        backgroundColor: "#43A047"
      }}
      aria-describedby="client-snackbar"
      message={
        <span
          id="client-snackbar"
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Icon
            style={{ fontSize: "20", opacity: "0.9", marginRight: "10px" }}
          />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon style={{ fontSize: 20 }} />
        </IconButton>
      ]}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

AddClinicalNote.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(AddClinicalNote);
