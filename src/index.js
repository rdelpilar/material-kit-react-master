import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../src/redux/store";

import "assets/scss/material-kit-react.scss?v=1.7.0";

import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPageAbbott from "views/LoginPage/LoginPageAbbott.jsx";

import Notifications from "views/Notifications/Notifications.jsx";
import NotificationsJQuery from "views/Notifications/NotificationsJQuery.jsx";
import Activity from "views/PatientActivity/Activity.jsx";
import Error404 from "views/Utils/Error404.jsx";
import AllPatients from "views/AllPatients/AllPatients";
import NotificationsMUIDataTable2 from "views/Notifications/NotificationsMUIDataTable2";
import Settings from "views/PatientSettings/Settings";
import ClinicSettings from "views/Clinic/ClinicSettings";
import ClinicUsersAndLocations from "views/Clinic/ClinicUsersAndLocations";
import ClinicHistory from "views/Clinic/ClinicHistory";
import ClinicDrugsAndMedicalConditions from "views/Clinic/ClinicDrugsAndMedicalConditions";
import ClinicAccount from "views/ClinicAccount/ClinicAccount";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/notifications" component={Notifications} />
        <Route
          exact
          path="/notifications-jquery"
          component={NotificationsJQuery}
        />
        <Route
          exact
          path="/notifications-mui2"
          component={NotificationsMUIDataTable2}
        />
        <Route exact path="/all-patients" component={AllPatients} />
        <Route path="/activity/patient/:id" component={Activity} />
        <Route path="/settings/patient/:id" component={Settings} />

        <Route exact path="/clinic-settings" component={ClinicSettings} />
        <Route
          exact
          path="/users-and-locations"
          component={ClinicUsersAndLocations}
        />
        <Route exact path="/clinic-history" component={ClinicHistory} />
        <Route
          exact
          path="/drugs-and-medical-conditions"
          component={ClinicDrugsAndMedicalConditions}
        />
        <Route exact path="/my-account" component={ClinicAccount} />

        <Route path="/components" component={Components} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login" component={LoginPageAbbott} />
        <Redirect exact from="/sign-out" to="/login" />

        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
