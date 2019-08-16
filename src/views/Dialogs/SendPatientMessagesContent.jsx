import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Divider
} from "@material-ui/core";
import Info from "@material-ui/icons/Info";
import Button from "components/CustomButtons/Button.jsx";

import { connect } from "react-redux";
import { toggleSnackbar } from "../../redux/actions";

class SendPatientMessagesContent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSendMessageClick = () => {
    const message = "Message has been sent!";
    this.props.toggleSnackbar(true, message);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer style={{ maxWidth: "99%" }}>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <br />
                <div className={classes.container} style={{ maxWidth: "100%" }}>
                  <FormControl
                    component="fieldset"
                    className={classes.FormControl}
                  >
                    <GridContainer>
                      <FormLabel component="legend">
                        <h4>
                          <small>
                            <em>
                              This patient is not set to receive messages.
                              Message preferences can be modified in the patient
                              profile.
                            </em>
                          </small>
                        </h4>
                        <span>
                          <Info style={{ marginRight: 5, color: "#009CDE" }} />
                          <small>
                            <em>
                              Record messages in the patient's medical record as
                              appropriate.
                            </em>
                          </small>
                        </span>
                      </FormLabel>
                    </GridContainer>
                    <br />
                    <Divider />
                    <br />
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6} lg={6}>
                        <RadioGroup
                          aria-label="sendPatientMessage"
                          name="sendPatientMessage"
                          className={classes.group}
                        >
                          <FormControlLabel
                            value="callClinic"
                            control={<Radio color="primary" />}
                            label="Call Clinic"
                          />
                          <FormControlLabel
                            value="readingReviewed"
                            control={<Radio color="primary" />}
                            label="Reading Reviewed"
                          />
                          <FormControlLabel
                            value="labsRequest"
                            control={<Radio color="primary" />}
                            label="Labs Request"
                          />
                          <FormControlLabel
                            value="treatmentPlan"
                            control={<Radio color="primary" />}
                            label="Treatment Plan Reminder due to pressure changes"
                          />
                        </RadioGroup>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6} lg={6}>
                        <FormControl
                          component="fieldset"
                          className={classes.FormControl}
                          style={{ width: "100%" }}
                        >
                          <RadioGroup
                            aria-label="customMessage"
                            name="customMessage"
                            className={classes.group}
                          >
                            <FormControlLabel
                              value="treatmentPlan"
                              control={<Radio color="primary" />}
                              label="Custom Message (250 character limit)"
                            />
                          </RadioGroup>
                          <br />
                          <TextField
                            label="Custom Message"
                            multiline
                            rows="8"
                            rowsMax="10"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            placeholder="Add custom message..."
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
                                  Send
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                  </FormControl>
                </div>
                <br />
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SendPatientMessagesContent.propTypes = {
  classes: PropTypes.object,
  toggleSnackbar: PropTypes.func.isRequired
};

const SendPatientMessagesContentWithCSS = withStyles(componentsStyle)(SendPatientMessagesContent);

export default connect(
  null,
  { toggleSnackbar }
)(SendPatientMessagesContentWithCSS);
