import React from "react";
import Divider from "@material-ui/core/Divider";
import {
  Grid,
  GridList,
  GridListTile,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography
} from "@material-ui/core";

import EnhancedEncryption from "@material-ui/icons/EnhancedEncryption";
import Mail from "@material-ui/icons/MailOutline";
import GridItem from "components/Grid/GridItem";

class RecentInterventionPortlet extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Divider />
        <br />
        <div
          style={{
            // display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            overflow: "hidden",
            display: "flex",
            alignItems: "center"
          }}
        >
          <GridList
            style={{
              flexWrap: "nowrap",
              transform: "translateZ(0)",
              width: "100%",
              height: "97%"
              // //display: "flex",
              // justifyContent: "flex-start",
              // alignItems: "center",
              // direction: "row"
            }}
          >
            <GridListTile
              cols={1}
              style={{
                height: "auto",
                maxWidth: 400,
                width: "100%",
                padding: 5
              }}
            >
              <Card
                border={0}
                style={{
                  width: "99%",
                  height: "97%",
                  marginTop: 3,
                  marginLeft: 1
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ color: "#fff", backgroundColor: "#009CDE" }}
                    >
                      <Mail />
                    </Avatar>
                  }
                  title={
                    <div>
                      <Typography style={{ fontSize: 18 }}>
                        Message Intervention
                      </Typography>
                    </div>
                  }
                  subheader={
                    <div>
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                      >
                        <b>Sent on:</b> Friday, August 16, 2019, 12:46 PM
                      </Typography>
                      <Typography
                        style={{ fontSize: 12 }}
                        color="textSecondary"
                      >
                        <b>By:</b> ClinicRCT_Phy_ImpTre, ClinicRCT_Phy_ImpTre
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <GridItem item style={{ width: "20%" }}></GridItem>
                    <GridItem item>
                      <Typography variant="body2" component="p">
                        The patient is non-compliant
                      </Typography>
                    </GridItem>
                  </Grid>
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile
              cols={1}
              style={{
                height: "auto",
                maxWidth: 400,
                width: "100%",
                padding: 5
              }}
            >
              <Card
                border={0}
                style={{
                  width: "99%",
                  height: "97%",
                  marginTop: 3,
                  marginLeft: 1
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ color: "#fff", backgroundColor: "#009CDE" }}
                    >
                      <EnhancedEncryption />
                    </Avatar>
                  }
                  title={
                    <div>
                      <Typography style={{ fontSize: 18 }}>
                        Medication Intervention
                      </Typography>
                    </div>
                  }
                  subheader={
                    <div>
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                      >
                        <b>Sent on:</b> Thursday, August 15, 2019, 9:21 AM
                      </Typography>
                      <Typography
                        style={{ fontSize: 12 }}
                        color="textSecondary"
                      >
                        <b>By:</b> ClinicRCT_Phy_ImpTre, ClinicRCT_Phy_ImpTre
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <GridItem item style={{ width: "20%" }}></GridItem>
                    <GridItem item>
                      <Typography variant="body2" component="p">
                        Effective: August 15, 2019
                        <br />
                        Start
                        <br />
                        Aldomet Methyldopa&reg;
                      </Typography>
                    </GridItem>
                  </Grid>
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile
              cols={1}
              style={{
                height: "auto",
                maxWidth: 400,
                width: "100%",
                padding: 5
              }}
            >
              <Card
                border={0}
                style={{
                  width: "99%",
                  height: "97%",
                  marginTop: 3,
                  marginLeft: 1
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ color: "#fff", backgroundColor: "#009CDE" }}
                    >
                      <Mail />
                    </Avatar>
                  }
                  title={
                    <div>
                      <Typography style={{ fontSize: 18 }}>
                        Message Intervention
                      </Typography>
                    </div>
                  }
                  subheader={
                    <div>
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                      >
                        <b>Sent on:</b> Wednesday, August 14, 2019, 6:50 PM
                      </Typography>
                      <Typography
                        style={{ fontSize: 12 }}
                        color="textSecondary"
                      >
                        <b>By:</b> ClinicRCT_Phy_ImpTre, ClinicRCT_Phy_ImpTre
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <GridItem item style={{ width: "20%" }}></GridItem>
                    <GridItem item>
                      <Typography variant="body2" component="p">
                        This is a new message intervention
                      </Typography>
                    </GridItem>
                  </Grid>
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile
              cols={1}
              style={{
                height: "auto",
                maxWidth: 400,
                width: "100%",
                padding: 5
              }}
            >
              <Card
                border={0}
                style={{
                  width: "99%",
                  height: "97%",
                  marginTop: 3,
                  marginLeft: 1
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ color: "#fff", backgroundColor: "#009CDE" }}
                    >
                      <EnhancedEncryption />
                    </Avatar>
                  }
                  title={
                    <div>
                      <Typography style={{ fontSize: 18 }}>
                        Medication Intervention
                      </Typography>
                    </div>
                  }
                  subheader={
                    <div>
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                      >
                        <b>Sent on:</b> Tuesday, August 13, 2019, 3:36 PM
                      </Typography>
                      <Typography
                        style={{ fontSize: 12 }}
                        color="textSecondary"
                      >
                        <b>By:</b> ClinicRCT_Phy_ImpTre, ClinicRCT_Phy_ImpTre
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <GridItem item style={{ width: "20%" }}></GridItem>
                    <GridItem item>
                      <Typography variant="body2" component="p">
                        Effective: August 13, 2019
                        <br />
                        Start
                        <br />
                        Aldomet Methyldopa&reg;
                      </Typography>
                    </GridItem>
                  </Grid>
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile
              cols={1}
              style={{
                height: "auto",
                maxWidth: 400,
                width: "100%",
                padding: 5
              }}
            >
              <Card
                border={0}
                style={{
                  width: "99%",
                  height: "97%",
                  marginTop: 3,
                  marginLeft: 1
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ color: "#fff", backgroundColor: "#009CDE" }}
                    >
                      <EnhancedEncryption />
                    </Avatar>
                  }
                  title={
                    <div>
                      <Typography style={{ fontSize: 18 }}>
                        Medication Intervention
                      </Typography>
                    </div>
                  }
                  subheader={
                    <div>
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                      >
                        <b>Sent on:</b> Monday, August 12, 2019, 3:15 PM
                      </Typography>
                      <Typography
                        style={{ fontSize: 12 }}
                        color="textSecondary"
                      >
                        <b>By:</b> ClinicRCT_Phy_ImpTre, ClinicRCT_Phy_ImpTre
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <GridItem item style={{ width: "20%" }}></GridItem>
                    <GridItem item>
                      <Typography variant="body2" component="p">
                        Effective: August 12, 2019
                        <br />
                        Start
                        <br />
                        Aldomet Methyldopa&reg;
                      </Typography>
                    </GridItem>
                  </Grid>
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile
              cols={1}
              style={{
                height: "auto",
                maxWidth: 400,
                width: "100%",
                padding: 5
              }}
            >
              <Card
                border={0}
                style={{
                  width: "99%",
                  height: "97%",
                  marginTop: 3,
                  marginLeft: 1
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ color: "#fff", backgroundColor: "#009CDE" }}
                    >
                      <EnhancedEncryption />
                    </Avatar>
                  }
                  title={
                    <div>
                      <Typography style={{ fontSize: 18 }}>
                        Medication Intervention
                      </Typography>
                    </div>
                  }
                  subheader={
                    <div>
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                      >
                        <b>Sent on:</b> Friday, August 9, 2019, 1:29 PM
                      </Typography>
                      <Typography
                        style={{ fontSize: 12 }}
                        color="textSecondary"
                      >
                        <b>By:</b> ClinicRCT_Phy_ImpTre, ClinicRCT_Phy_ImpTre
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <GridItem item style={{ width: "20%" }}></GridItem>
                    <GridItem item>
                      <Typography variant="body2" component="p">
                        Effective: August 9, 2019
                        <br />
                        Start
                        <br />
                        Aldomet Methyldopa&reg;
                      </Typography>
                    </GridItem>
                  </Grid>
                </CardContent>
              </Card>
            </GridListTile>
          </GridList>
        </div>
      </div>
    );
  }
}

export default RecentInterventionPortlet;
