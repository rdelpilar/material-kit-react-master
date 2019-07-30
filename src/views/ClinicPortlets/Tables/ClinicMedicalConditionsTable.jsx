import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import MaterialTable from "material-table";
import { Typography, FormGroup, FormControlLabel } from "@material-ui/core";
import axios from "axios";
import Primary from "components/Typography/Primary";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Button from "components/CustomButtons/Button.jsx";
import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";
import { Divider, FormControl } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";

class ClinicMedicalConditionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editMedicalConditionsModal: false
    };
  }

  handleClickOpenEditMedicalConditionModal(actionString, rowData) {
    if (actionString == "edit") {
      console.log("Edit");
    } else if (actionString == "add") {
      console.log("Add");
    } else {
      return;
    }

    this.setState({
      editMedicalConditionsModal: true
    });
  }
  handleCloseEditMedicalConditionsModal() {
    this.setState({
      editMedicalConditionsModal: false
    });
  }
  componentDidMount() {
    this.getData();
    console.log(this.state.data);
  }

  getData = () => {
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/medicalcondition/list`
      )
      .then(res => {
        let items = [];
        res.data.medicalConditions.forEach(item => {
          items.push(item);
        });
        this.setState({
          data: items
        });
      });
  };

  render() {
    const { classes, ...rest } = this.props;

    if (this.state.count <= 0) return false;
    const { data } = this.state;

    const columns = [
      { title: "Name", field: "name" },
      { title: "HF Related", field: "hfRelated" }
    ];

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" },
      actionsColumnIndex: -1
    };

    const actions = [
      {
        icon: "edit",
        tooltip: "Edit Medical Condition",
        onClick: (event, rowData) =>
          this.handleClickOpenEditMedicalConditionModal("edit", rowData)
      },
      {
        icon: "add",
        tooltip: "Add MedicalCondition",
        isFreeAction: true,
        onClick: (event, rowData) =>
          this.handleClickOpenEditMedicalConditionModal("add", rowData)
      }
    ];

    return (
      <div>
        <MaterialTable
          title={<Typography variant="title"></Typography>}
          data={data}
          columns={columns}
          options={options}
          actions={actions}
        />
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.editMedicalConditionsModal}
          // TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleCloseEditMedicalConditionsModal()}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            disableTypography
            className={classes.modalHeader}
            style={{ backgroundColor: "#009CDE" }}
          >
            <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
              Medical Condition
            </h3>
          </DialogTitle>
          <DialogContent className={classes.modalBody}>
            <div
              className={classes.container}
              style={{
                justify: "space-evenly",
                maxWidth: "100%"
              }}
            >
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%", color: "#009CDE" }}
                  >
                    <TextField
                      label="Condition Name"
                      className={classes.textField}
                      margin="normal"
                      fullWidth
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <br />
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%", color: "#009CDE" }}
                  >
                      <br />
                    <FormGroup row>
                      <FormControlLabel
                        control={<CheckBox checked={false} color="primary" />}
                        label="HF Related"
                      />
                    </FormGroup>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </div>
          </DialogContent>
          <br />
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => this.handleCloseEditMedicalConditionsModal()}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => this.handleCloseEditMedicalConditionsModal()}
              color="default"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ClinicMedicalConditionsTable.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicMedicalConditionsTable);
