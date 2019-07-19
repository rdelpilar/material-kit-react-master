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
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";

import Primary from "components/Typography/Primary";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import { TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class DiagnosisPortlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addDiagnosisModal: false
    };
  }

  handleClickOpenAddDiagnosisModal() {
    this.setState({
      addDiagnosisModal: true
    });
  }
  handleCloseAddDiagnosisModal() {
    this.setState({
      addDiagnosisModal: false
    });
  }
  render() {
    const { classes, ...rest } = this.props;

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" }
    };

    const columns = [
      { title: "Diagnosis Date", field: "diagnosisDate" },
      { title: "Medical Condition", field: "medicalCondition" },
      { title: "Comments", field: "comments" }
    ];

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer style={{ justify: "space-between" }}>
            <GridItem xs={12} sm={12} md={8}>
              <div className={classes.header}></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                  <Button
                    color="primary"
                    simple
                    onClick={() => this.handleClickOpenAddDiagnosisModal()}
                  >
                    Add Diagnosis
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.addDiagnosisModal}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleCloseAddDiagnosisModal()}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      disableTypography
                      className={classes.modalHeader}
                      style={{ backgroundColor: "#009CDE" }}
                    >
                      <h3
                        className={classes.modalTitle}
                        style={{ color: "#FFFFFF" }}
                      >
                        Add Diagnosis
                      </h3>
                    </DialogTitle>
                    <DialogContent className={classes.modalBody}>
                      <div
                        className={classes.container}
                        style={{
                          justify: "space-evenly",
                          maxWidth: "100%",
                          height: "420px",
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
                              <InputLabel shrink>Diagnosis Date</InputLabel>
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
                              <InputLabel
                                shrink
                                htmlFor="age-label-placeholder"
                              >
                                Medical Condition
                              </InputLabel>
                              <Select
                                input={<Input name="clinicalTrialSettings" />}
                                name="clinicalTrialSettings"
                                className={classes.selectEmpty}
                              >
                                <MenuItem value={1}>
                                  Medical Condition 1
                                </MenuItem>
                                <MenuItem value={2}>
                                  Medical Condition 2
                                </MenuItem>
                                <MenuItem value={3}>
                                  Medical Condition 3
                                </MenuItem>
                                <MenuItem value={4}>
                                  Medical Condition 4
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <br />
                            <FormControl
                              className={classes.formControl}
                              style={{ width: "100%", color: "#009CDE" }}
                            >
                              <InputLabel
                                shrink
                                htmlFor="age-label-placeholder"
                              >
                                Medical Condition
                              </InputLabel>
                              <TextField
                                label="Comments"
                                multiline
                                rows="5"
                                rowsMax="5"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                placeholder="Add comment..."
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
                        onClick={() => this.handleCloseAddDiagnosisModal()}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => this.handleCloseAddDiagnosisModal()}
                        color="default"
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
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
DiagnosisPortlet.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(DiagnosisPortlet);
