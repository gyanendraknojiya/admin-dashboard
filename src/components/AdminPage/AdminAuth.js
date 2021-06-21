import React from "react";
import AdminHeader from "./AdminHeader";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  ButtonToolbar,
  Button,
  Icon,
} from "rsuite";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, setCurrentUserRole } from "../../Redux/Action";
import { useHistory } from "react-router-dom";

const AdminAuth = () => {
  const dispatch = useDispatch();
  const history= useHistory()

  let initialValues = {
    email: "",
    password: "",
  };
  const [adminDetails, setAdminDetails] = useState({ ...initialValues });
  const [adminDetailsErrors, setAdminDetailsErrors] = useState({});

  const setEmail = (value) => {
    adminDetails["email"] = value;
    setAdminDetails({ ...adminDetails });
  };
  const setPassword = (value) => {
    adminDetails["password"] = value;
    setAdminDetails({ ...adminDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = adminDetails;
    if (!email || email !== "admin@example.com") {
      setAdminDetailsErrors({ email: "Invalid email address!" });
      return;
    }
    if (!password || password !== "password") {
      setAdminDetailsErrors({ password: "Invalid password!" });
      return;
    }
    dispatch(setCurrentUserRole(1));
    dispatch(setCurrentUser({ ...adminDetails }));
    history.push("/admin")
  };
  return (
    <>
      <AdminHeader />
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center w-100"
          style={{
            height: "calc(100vh - 55px)",
          }}
        >
          <div className="rounded-lg p-3 bg-light shadow border ">
            <div className="text-center">
              <Icon icon="user-analysis" size="3x" />{" "}
            </div>
            <h4 className="text-center my-3">Admin Login</h4>
            <Form>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  name="email"
                  type="email"
                  value={adminDetails.email}
                  onChange={setEmail}
                  errorMessage={adminDetailsErrors.email}
                />
                <HelpBlock tooltip>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  name="password"
                  type="password"
                  value={adminDetails.password}
                  onChange={setPassword}
                  errorMessage={adminDetailsErrors.password}
                />
              </FormGroup>

              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button appearance="default">reset</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAuth;
