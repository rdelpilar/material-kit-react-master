import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Divider } from "@material-ui/core";

// Current Notifications
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Notifications from "@material-ui/icons/Notifications";
import NotificationsActive from "@material-ui/icons/NotificationsActive";

class CurrentNotifications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer style={{ maxWidth: "99%" }}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className={classNames(classes.main)}>
              <div className={classNames(classes.section)}>
                <div className={classes.container} style={{ maxWidth: "100%" }}>
                  <List
                    style={{
                      overflow: "auto",
                      maxHeight: "auto"
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <NotificationsActive style={{ color: "#009CDE" }} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="One active notification"
                        secondary="Aug 8, 2019"
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <NotificationsActive style={{ color: "#009CDE" }} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Another active notification"
                        secondary="August 7, 2019"
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Notifications />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="No PA pressure goal established"
                        secondary="August 6, 2019"
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Notifications />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="No PA pressure goal established"
                        secondary="Aug 5, 2019"
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Notifications />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="No PA pressure goal established"
                        secondary="August 4, 2019"
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Notifications />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="No PA pressure goal established"
                        secondary="August 3, 2019"
                      />
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

CurrentNotifications.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(CurrentNotifications);
