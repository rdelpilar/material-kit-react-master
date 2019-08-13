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
  TextField,
  Divider,
  InputLabel
} from "@material-ui/core";
import Datetime from "react-datetime";

import { connect } from "react-redux";
import { toggleSnackbar } from "../../redux/actions";

class RemindMeDialogContent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSave = () => {
    const message = "Note has been saved!";
    this.props.toggleSnackbar(true, message);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.modalTitle}>Set Reminder Notification</h3>
            <br />
            <FormControl
              className={classes.formControl}
              style={{ width: "100%", color: "#009CDE" }}
            >
              <InputLabel shrink>Reminder date</InputLabel>
              <Datetime />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <br />
            <TextField
              multiline
              rows="5"
              rowsMax="5"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
              placeholder="Enter a reason why you want to be reminded (text will be displayed as a notification on the Notifications List)"
              style={{
                backgroundColor: "#FFFFFF",
                marginTop: 0 + "px"
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h3 className={classes.modalTitle}>Existing Reminders</h3>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

RemindMeDialogContent.propTypes = {
  classes: PropTypes.object,
  toggleSnackbar: PropTypes.func.isRequired
};

const RemindMeDialogContentWithCSS = withStyles(componentsStyle)(
  RemindMeDialogContent
);

export default connect(
  null,
  { toggleSnackbar }
)(RemindMeDialogContentWithCSS);
