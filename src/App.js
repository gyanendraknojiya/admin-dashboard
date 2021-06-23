
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
} from "react-router-dom";
import AdminHomepage from "./components/AdminPage/AdminHomepage";
// import { useState } from "react";
import AdminAuth from "./components/AdminPage/AdminAuth";
import { connect } from "react-redux";

function App({ currentUser, currentUserRole }) {
  console.log(currentUser, currentUserRole);

  const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() =>
          currentUser && currentUserRole === 1 ? (
            <Component />
          ) : (
            <Redirect to="/admin-login" />
          )
        }
      />
    );
  };

  return (
    <Router>
      <Switch>
      <Route exact path="/admin">
        <Redirect to="/admin/home"/>
      </Route>
        <PrivateRouteAdmin exact path="/admin/:slug" component={AdminHomepage} />

        <Route exact path="/admin-login" component={AdminAuth} />
      </Switch>
    </Router>
  );
}

export default connect(state=>({
  currentUser: state.currentUser, currentUserRole : state.currentUserRole
}),null)(App);
