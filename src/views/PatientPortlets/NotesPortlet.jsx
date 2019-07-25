import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";

import Primary from "components/Typography/Primary";
import Button from "components/CustomButtons/Button.jsx";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import { Divider, FormControl } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class NotesPortlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNoteModal: false
    };
  }

  handleClickOpenAddNoteModal() {
    this.setState({
      addNoteModal: true
    });
  }
  handleCloseAddNoteModal() {
    this.setState({
      addNoteModal: false
    });
  }
  render() {
    const { classes, ...rest } = this.props;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      { title: "Date", field: "date" },
      { title: "Contents", field: "contents" },
      { title: "", field: "blank" }
    ];

    return (
      <div className={classes.section}>
        <GridContainer style={{ textAlign: "right" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              color="primary"
              simple
              onClick={() => this.handleClickOpenAddNoteModal()}
            >
              Add Note
            </Button>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              open={this.state.addNoteModal}
              // TransitionComponent={Transition}
              keepMounted
              onClose={() => this.handleCloseAddNoteModal()}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                disableTypography
                className={classes.modalHeader}
                style={{ backgroundColor: "#009CDE" }}
              >
                <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
                  Add Note
                </h3>
              </DialogTitle>
              <DialogContent className={classes.modalBody}>
                <div
                  className={classes.container}
                  style={{
                    justify: "space-evenly",
                    maxWidth: "100%",
                    height: "480px",
                    width: "400px"
                  }}
                >
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <br />
                      <FormControl
                        className={classes.formControl}
                        style={{ width: "100%", color: "#009CDE" }}
                      >
                        <InputLabel shrink>Date</InputLabel>
                        <br />
                        <Datetime />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <br />
                      <FormControl
                        className={classes.formControl}
                        style={{ width: "100%", color: "#009CDE" }}
                      >
                        <TextField
                          label="Note"
                          multiline
                          rows="5"
                          rowsMax="5"
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          placeholder="Add note..."
                          style={{
                            backgroundColor: "#FFFFFF",
                            marginTop: 0 + "px"
                          }}
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => this.handleCloseAddNoteModal()}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => this.handleCloseAddNoteModal()}
                  color="default"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
        </GridContainer>
        <Divider />
        <br />
        <div
          className={classes.section}
          style={{
            paddingTop: 0 + "px",
            paddingBottom: 10 + "px",
            backgroundColor: "#FFF"
          }}
        >
          <div className={classes.container} style={{ maxWidth: "100%" }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <MaterialTable title="" columns={columns} options={options} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
NotesPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(NotesPortlet);
