import React from "react";
import AddPost from "./AddPost";
import AdminHeader from "./AdminHeader";
import LeftBar from "./LeftBar";

const AdminHomepage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="d-flex ">
        <LeftBar />
        <div
          className="p-3"
          style={{ width: "calc (100vh - 200px)" }}
        >
          <AddPost />
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
