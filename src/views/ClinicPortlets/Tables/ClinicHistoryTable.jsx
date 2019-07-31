import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import MaterialTable, { MTableToolbar } from "material-table";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@material-ui/core";
import axios from "axios";
import Primary from "components/Typography/Primary";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

class ClinicHistoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return;
    // this.getData();
  }

  getData = () => {
    axios
      .get(
        `https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/drug/list`
      )
      .then(res => {
        let items = [];
        res.data.clinicHistory.forEach(item => {
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
      { title: "Performed By", field: "performedBy" },
      { title: "Date", field: "date" },
      { title: "Name", field: "name" },
      { title: "IP", field: "ip" },
      { title: "Type", field: "type" },
      { title: "Actions", field: "actions" },
      { title: "Field Name", field: "fieldName" },
      { title: "Changed From", field: "changedFrom" },
      { title: "Changed To", field: "changedTo" }
    ];

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" },
      actionsColumnIndex: -1
    };

    const components = {
      Toolbar: props => (
        <div>
          <MTableToolbar {...props} />
          <div style={{ padding: "0px 20px" }}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} justify>
                <FormControl autoComplete="off">
                  <InputLabel htmlFor="select-view">Select a View</InputLabel>
                  <Select
                    inputProps={{
                      name: "selectView",
                      id: "select-view"
                    }}
                    style={{ width: "160px" }}
                  >
                    <MenuItem value={1}>Patient History</MenuItem>
                    <MenuItem value={2}>Clinic History</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} style={{ textAlign: "right" }}>
                <FormControl autoComplete="off">
                  <InputLabel htmlFor="select-more-actions">
                    More Actions
                  </InputLabel>
                  <Select
                    inputProps={{
                      name: "moreActions",
                      id: "select-more-actions"
                    }}
                    style={{ minWidth: "160px" }}
                  >
                    <MenuItem value={1}>Download Spreadsheet</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <br />
          </div>
        </div>
      )
    };

    return (
      <div>
        <MaterialTable
          title={<Typography variant="title"></Typography>}
          data={data}
          columns={columns}
          options={options}
          components={components}
        />
      </div>
    );
  }
}

ClinicHistoryTable.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(ClinicHistoryTable);
