import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";
import { setCurrentUser, setCurrentUserRole } from "../../Redux/Action";

const AdminHeader = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  return (
    <Navbar appearance="default" style={{ height: "55px" }}>
      <Navbar.Header>
        <Link to="/admin" className="navbar-brand logo">
          <Icon icon="dashboard" size="2x" />
        </Link>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
        </Nav>
        <Nav pullRight>
          {currentUser && (
            <Nav.Item
              icon={<Icon icon="sign-out" />}
              onClick={() => {
                dispatch(setCurrentUser(null));
                dispatch(setCurrentUserRole(null));
              }}
            >
              Logout
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default AdminHeader;
