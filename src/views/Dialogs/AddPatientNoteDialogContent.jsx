import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.jsx";
import {
  List,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  TextField
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Star from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { connect } from "react-redux";
import { toggleSnackbar } from "../../redux/actions";

class AddPatientNoteDialogContent extends React.Component {
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
        <GridContainer style={{ maxWidth: "99%" }}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <List
                  component="nav"
                  aria-label="main"
                  style={{ overflowY: "auto" }}
                >
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: "#009CDE"
                      }}
                    >
                      SU
                    </Avatar>
                    <ListItemText
                      primary="August 14, 2019 - 12:30 PM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre1
                          </Typography>
                          {" — Patient note for today..."}
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: "#009CDE"
                      }}
                    >
                      SU
                    </Avatar>
                    <ListItemText
                      primary="August 13, 2019 - 1:56 PM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre1
                          </Typography>
                          {" — Patient note for today..."}
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: "#009CDE"
                      }}
                    >
                      SU
                    </Avatar>
                    <ListItemText
                      primary="August 12, 2019 - 14:03 PM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre1
                          </Typography>
                          {" — Patient note for today..."}
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: deepOrange[500]
                      }}
                    >
                      RD
                    </Avatar>
                    <ListItemText
                      primary="August 11, 2019 - 9:05 AM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre2
                          </Typography>
                          {
                            " — Patient note for this day... added by ClinicRCT_Phy_ImpTre2"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: deepOrange[500]
                      }}
                    >
                      RD
                    </Avatar>
                    <ListItemText
                      primary="August 10, 2019 - 2:02 PM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre2
                          </Typography>
                          {
                            " — Patient note for this day... added by ClinicRCT_Phy_ImpTre2"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: "#009CDE"
                      }}
                    >
                      SU
                    </Avatar>
                    <ListItemText
                      primary="August 9, 2019 - 5:53 PM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre1
                          </Typography>
                          {" — Patient note for today..."}
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: "#009CDE"
                      }}
                    >
                      SU
                    </Avatar>
                    <ListItemText
                      primary="August 8, 2019 - 8:20 AM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre1
                          </Typography>
                          {" — Patient note for today..."}
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem button alignItems="flex-start">
                    <Avatar
                      style={{
                        margin: 10,
                        color: "#fff",
                        backgroundColor: "#009CDE"
                      }}
                    >
                      SU
                    </Avatar>
                    <ListItemText
                      primary="August 9, 2019 - 5:53 PM"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            ClinicRCT_Phy_ImpTre1
                          </Typography>
                          {" — Patient note for today..."}
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Divider variant="middle" />
                  <br />
                  <TextField
                    id="outlined-multiline-flexible"
                    label=""
                    multiline
                    rows="6"
                    rowsMax="10"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    autoFocus="true"
                    placeholder="Add new patient note for Wednesday, August 14, 2019 - 12:53 PM"
                    style={{ backgroundColor: "#FFFFFF", marginTop: 0 + "px" }}
                  />
                </GridItem>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

AddPatientNoteDialogContent.propTypes = {
  classes: PropTypes.object,
  toggleSnackbar: PropTypes.func.isRequired
};

const AddPatientNoteDialogContentWithCSS = withStyles(componentsStyle)(
  AddPatientNoteDialogContent
);

export default connect(
  null,
  { toggleSnackbar }
)(AddPatientNoteDialogContentWithCSS);
