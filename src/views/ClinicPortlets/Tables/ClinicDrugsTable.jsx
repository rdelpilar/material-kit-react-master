import React, { Component } from "react";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import axios from "axios";
import Primary from "components/Typography/Primary";

class ClinicDrugsTable extends Component {
  state = {
    data: []
  };

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
    if (this.state.count <= 0) return false;
    const { data } = this.state;

    const columns = [
      { title: "Name", field: "name" },
      { title: "Trade Name", field: "tradeName" },
      { title: "Class", field: "drugClass" }
    ];

    const options = {
      pageSize: 10,
      headerStyle: { backgroundColor: Primary, padding: "10px" },
      actionsColumnIndex: -1
    };

    const actions = [
      {
        icon: "edit",
        tooltip: "Edit drug",
        onClick: (event, rowData) => alert("Edit: " + rowData.id)
      }
    ];

    return (
      <MaterialTable
        title={<Typography variant="title"></Typography>}
        data={data}
        columns={columns}
        options={options}
        actions={actions}
      />
    );
  }
}

export default ClinicDrugsTable;
