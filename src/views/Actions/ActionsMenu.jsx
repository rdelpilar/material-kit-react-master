import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import MoreVertIcon from "@material-ui/icons/MoreVert";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";

class ActionsMenu extends React.Component {
  constructor() {
    super();
    this.anchorEl = false;
  }
  // const { classes } = props;
  //const [anchorEl, setAnchorEl] = React.useState(null);

  handleClick(event) {
    return true;
  }

  handleClose() {
    return false;
  }

  render() {
    // <div>
    //   <List className={classes.list}>
    //     <ListItem className={classes.listItem}>
    //       <CustomDropdown
    //         noLiPadding
    //         buttonText="Test"
    //         buttonProps={{
    //           className: classes.navLink,
    //           color: "transparent"
    //         }}
    //         buttonIcon={CompareArrows}
    //         dropdownList={[
    //           <Link to="/ep" className={classes.dropdownLink}>
    //             Arrhythmia & Device Management
    //           </Link>
    //         ]}
    //       />
    //     </ListItem>
    //   </List>
    // </div>

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="actions-menu"
          anchorEl={this.anchorEl}
          keepMounted
          open={true}
          onClose={this.handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ActionsMenu;
