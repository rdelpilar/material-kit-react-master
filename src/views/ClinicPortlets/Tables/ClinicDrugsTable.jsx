import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import axios from "axios";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Button from "components/CustomButtons/Button.jsx";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

class ClinicDrugsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editDrugModal: false
    };
  }

  handleClickOpenEditDrugModal(actionString, rowData) {
    if (actionString == "edit") {
      console.log("Edit");
    } else if (actionString == "add") {
      console.log("Add");
    } else {
      return;
    }

    this.setState({
      editDrugModal: true
    });
  }
  handleCloseEditDrugModal() {
    this.setState({
      editDrugModal: false
    });
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/drug/list`
      )
      .then(res => {
        let items = [];
        res.data.drugs.forEach(item => {
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
      { title: "Trade Name", field: "tradeName" },
      { title: "Class", field: "drugClass" }
    ];

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: "#F2F3F7", padding: "10px" },
      actionsColumnIndex: -1
    };

    const actions = [
      {
        icon: "edit",
        tooltip: "Edit drug",
        onClick: (event, rowData) =>
          this.handleClickOpenEditDrugModal("edit", rowData)
      },
      {
        icon: "add",
        tooltip: "Add Drug",
        isFreeAction: true,
        onClick: (event, rowData) =>
          this.handleClickOpenEditDrugModal("add", rowData)
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
          open={this.state.editDrugModal}
          // TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleCloseEditDrugModal()}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            disableTypography
            className={classes.modalHeader}
            style={{ backgroundColor: "#009CDE" }}
          >
            <h3 className={classes.modalTitle} style={{ color: "#FFFFFF" }}>
              Drugs
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
                  <br />
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%", color: "#009CDE" }}
                  >
                    <TextField
                      label="Name"
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
                    <TextField
                      label="Trade Name"
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
                    <TextField
                      label="Class"
                      className={classes.textField}
                      margin="normal"
                      fullWidth
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </div>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => this.handleCloseEditDrugModal()}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => this.handleCloseEditDrugModal()}
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

ClinicDrugsTable.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicDrugsTable);
