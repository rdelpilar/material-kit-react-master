import React, { Component } from "react";
import axios from "axios";
import DataTaNotificationsMUIDataTable2 from "mui-datatables";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Charts from "../Charts/ChartsMUIDataTable2";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import classNames from "classnames";
import Header from "components/Header/Header.jsx";
import HeaderLinksRight from "components/Header/HeaderLinksRight";
import HeaderLinksLeft from "components/Header/HeaderLinksLeft";
import Footer from "components/Footer/Footer.jsx";

const customStyles = {
  red: {
    color: "#009cde"
  },
  NameCell: {
    fontWeight: 900
  }
};

const myTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: "800px"
      }
    }
  }
});

class NotificationsMUIDataTable2 extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        address: {
          id: 1,
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874"
        },
        company: {
          id: 1,
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        address: {
          id: 2,
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771"
        },
        company: {
          id: 2,
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
        address: {
          id: 3,
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157"
        },
        company: {
          id: 3,
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications"
        }
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        address: {
          id: 4,
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257"
        },
        company: {
          id: 4,
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services"
        }
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
        address: {
          id: 5,
          street: "Skiles Walk",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "336263"
        },
        company: {
          id: 5,
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems"
        }
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        address: {
          id: 6,
          street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: "23505-1337"
        },
        company: {
          id: 6,
          name: "Considine-Lockman",
          catchPhrase: "Synchronised bottom-line interface",
          bs: "e-enable innovative applications"
        }
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        phone: "210.067.6132",
        website: "elvis.io",
        address: {
          id: 7,
          street: "Rex Trail",
          suite: "Suite 280",
          city: "Howemouth",
          zipcode: "58804-1099"
        },
        company: {
          id: 7,
          name: "Johns Group",
          catchPhrase: "Configurable multimedia task-force",
          bs: "generate enterprise e-tailers"
        }
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        address: {
          id: 8,
          street: "Ellsworth Summit",
          suite: "Suite 729",
          city: "Aliyaview",
          zipcode: "45169"
        },
        company: {
          id: 8,
          name: "Abernathy Group",
          catchPhrase: "Implemented secondary concept",
          bs: "e-enable extensible e-tailers"
        }
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        address: {
          id: 9,
          street: "Dayna Park",
          suite: "Suite 449",
          city: "Bartholomebury",
          zipcode: "76495-3109"
        },
        company: {
          id: 9,
          name: "Yost and Sons",
          catchPhrase: "Switchable contextually-based project",
          bs: "aggregate real-time technologies"
        }
      },
      {
        id: 10,
        name: "Glenna Reichert",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        phone: "024-648-3804",
        website: "ambrose.net",
        address: {
          id: 10,
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261"
        },
        company: {
          id: 10,
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models"
        }
      }
    ],
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.handlePopupOpen();
  };

  handlePopupOpen = () => {
    this.setState({ open: true });
  };

  handlePopupClose = () => {
    this.setState({ open: false });
  };

  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/user/list"
  //     )
  //     .then(result => {
  //       console.log(result.data.users);
  //       this.setState({
  //         users: result.data.users
  //       });
  //     });
  // }

  constructTable() {
    const users = this.state.users;
    const { anchorEl } = this.state;

    // These two lines are used for generating unique IDs for the charts div
    let j = 0;
    let chartId = "chartId_";

    const columnsHeader = [
      {
        name: "Patient / Clinician",
        label: "Patient / Clinician",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            // console.log(value);
            // console.log(tableMeta);
            // console.log(updateValue);
            return (
              <div>
                <Typography variant="h6" className={this.props.classes.red}>
                  {value}
                </Typography>
                <Typography variant="caption" display="block" paragraph>
                  {"DOB: 06/18/2019"}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                  {"No subscribing clinicians"}
                </Typography>
              </div>
              // <FormControlLabel
              //   label={value ? "Yes" : "No"}
              //   value={value ? "Yes" : "No"}
              //   control={
              //     <Switch
              //       color="primary"
              //       checked={value}
              //       value={value ? "Yes" : "No"}
              //     />
              //   }
              //   onChange={event => {
              //     updateValue(event.target.value === "Yes" ? false : true);
              //   }}
              // />
            );
          }
        }
      },
      {
        name: "Notification / Date",
        label: "Notification / Date",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                <Typography variant="subtitle1" display="block">
                  {value}
                </Typography>
              </div>
            );
          }
        }
      },
      {
        name: "Goal /Type",
        label: "Goal /Type",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            const line1 = value.split(",")[0];
            const line2 = value.split(",")[1];
            return (
              <div>
                <Typography>{line1}</Typography>
                <Typography gutterBottom>{line2}</Typography>
              </div>
            );
          }
        }
      },
      {
        name: "Last Measurement",
        label: "Last Measurement",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                <Typography>{value}</Typography>
              </div>
            );
          }
        }
      },
      {
        name: "Last Reading",
        label: "Last Reading",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "PA Trend (Last 7 days)",
        label: "PA Trend (Last 7 days)",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                <Charts chartId={chartId + j++} />
              </div>
            );
          }
        }
      },
      {
        name: "Actions",
        label: "Actions",
        options: {
          filter: true,
          sort: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            // return <Icon color="primary">more_vert</Icon>;
            return (
              <IconButton
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                color="primary"
              >
                <MoreIcon />
              </IconButton>
            );
          }
        }
      }
      // {
      //   name: "Id",
      //   label: "Id",
      //   options: {
      //     print: false,
      //     download: false,
      //     display: "excluded"
      //   }
      // }
    ];

    let i = 0;
    let rows = users.map(object => {
      return [
        object.username,
        "Patient due for review / 06-05-2019",
        "No Goal Set, PA Mean",
        i++ + " - None PAP"
        // " ",
        // " ",
        // " ... "
        // // object.id
      ];
    });

    const options = {
      filterType: "multiselect",
      responsive: "scroll",
      fixedHeader: true,
      onRowClick: (rowData, rowMeta) => {
        this.setState({
          username: rowData[0],
          name: rowData[1],
          email: rowData[2],
          phone: rowData[3],
          id: rowData[4]
        });
        console.log(rowData);
        // this.createUser();
      }
      // setRowProps: row => {
      //   console.log(row);
      //   return {
      //     className: classnames({
      //       [this.props.classes.red]: row[0] === "Karianne"
      //     }),
      //     style: { border: "3px solid blue" }
      //   };
      // }
    };

    return (
      <MuiThemeProvider theme={myTheme}>
        <DataTaNotificationsMUIDataTable2
          data={rows}
          columns={columnsHeader}
          options={options}
        />
      </MuiThemeProvider>
    );
  }

  createUser = () => {
    axios
      .post(
        "https://tc.raneldelpilar.com/merlin-demo-webservice/api/v1/user/list",
        {
          name: "Justin  Baldoni",
          username: "jbal01",
          email: "jbal01@april.biz",
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          address: {
            city: "Burbank"
          },
          company: {
            name: "Cromwelle"
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { anchorEl, classes, ...rest } = this.props;

    return (
      <div>
        <Header
          brand=""
          leftLinks={<HeaderLinksLeft />}
          rightLinks={<HeaderLinksRight />}
          fixed
          color="primary"
          {...rest}
        />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div style={{ marginTop: 80 + "px" }} />
          <br />

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <div>{this.constructTable()}</div>
            <br />

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Add Intervention</MenuItem>
              <MenuItem onClick={this.handleClose}>Add Clinical Note</MenuItem>
              <MenuItem onClick={this.handleClose}>Update Status</MenuItem>
              <MenuItem onClick={this.handleClose}>Subscribe</MenuItem>
            </Menu>

            <Dialog
              open={this.state.open}
              onClose={this.handlePopupClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Popup Title"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>Popup contents go here..</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handlePopupClose} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={this.handlePopupClose}
                  color="primary"
                  autoFocus
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(customStyles, { name: "Example" })(
  NotificationsMUIDataTable2
);
