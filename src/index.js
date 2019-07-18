import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPageAbbott from "views/LoginPage/LoginPageAbbott.jsx";

import Notifications from "views/Notifications/Notifications.jsx";
import NotificationsJQuery from "views/Notifications/NotificationsJQuery.jsx";
import Activity from "views/Activity/Activity.jsx";
import Error404 from "views/Utils/Error404.jsx";
import AllPatients from "views/AllPatients/AllPatients";
import NotificationsMUIDataTable2 from "views/Notifications/NotificationsMUIDataTable2";
import Settings from "views/Settings/Settings";

var hist = createBrowserHistory();

ReactDOM.render(
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
      <Route path="/components" component={Components} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login" component={LoginPageAbbott} />
      <Redirect exact from="/sign-out" to="/login" />

      <Route path="*" component={Error404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
