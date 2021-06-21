import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AdminHomepage from "./components/AdminPage/AdminHomepage";
import { useState } from "react";
import AdminAuth from "./components/AdminPage/AdminAuth";
import { useSelector } from "react-redux";

function App() {
  const { currentUser, currentUserRole } = useSelector((state) => state);
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
        <PrivateRouteAdmin exact path="/admin" component={AdminHomepage} />
        <Route exact path="/admin-login" component={AdminAuth} />
      </Switch>
    </Router>
  );
}

export default App;
