import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser, setCurrentUserRole } from "../../Redux/Action";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 18
  },
}));

const AdminHeader = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  return (
    <AppBar position="static" style={{ height: "60px", backgroundColor:"#171717" }}  >
      <Toolbar>
        <Link to="/admin">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          
        >
          <DashboardIcon />
        </IconButton>
        </Link>
        <Typography  className={classes.title}>
          <Link to="/admin" className="text-decoration-none">
            Home
          </Link>
        </Typography>
        {currentUser && (
          <Button
            color="inherit"
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(setCurrentUserRole(null));
            }}
          >
           <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" /> Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
