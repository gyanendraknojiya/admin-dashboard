import React from "react";
import { useParams } from "react-router-dom";
import AddPost from "./AddPost";
import AdminHeader from "./AdminHeader";
import AllPosts from "./AllPosts";
import LeftBar from "./LeftBar";

const AdminHomepage = () => {
  let param = useParams();
  let slug = param.slug;
  return (
    <div>
      <AdminHeader />
      <div className="d-flex ">
        <LeftBar />
        <div
          className="p-3"
          style={{
            width: "calc(100vw - 200px)",
            height: "calc(100vh - 60px)",
            overflowY: "auto",
          }}
        >
          {slug === "add-post" && <AddPost />}
          {slug === "all-posts" && <AllPosts />}
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
