import { faEdit, faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

const LeftBar = () => {
  let path = "/admin/";

  let params = useParams();
  console.log(params);

  let links = [
    {
      name: "Home",
      slug: "home",
      icon: faHome,
    },
    {
      name: "All Posts",
      slug: "all-posts",
      icon: faListAlt,
    },
    {
      name: "Add Post",
      slug: "add-posts",
      icon: faEdit,
    },
  ];

  return (
    <div
      style={{
        width: 200,
        height: "calc(100vh - 60px)",
        backgroundColor: "#000",
        flexShrink: 0,
      }}
    >
      <div className="p-3">
        {links.map((link, i) => (
          <Link to={path + link.slug} key={i} className="text-decoration-none">
            <div
              className={`left-bar-link ${
                params.slug === link.slug && "active-link"
              }`}
            >
              <FontAwesomeIcon icon={link.icon} className="mx-2" />
              <span>{link.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
