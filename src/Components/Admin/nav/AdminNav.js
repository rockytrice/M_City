import React from "react";
import { Link, withRouter } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import { logoutHandle } from "../../Utils/tools";

const AdminNav = (props) => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
  ];

  const renderLinks = () => (
    links.map(link => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button className="admin_nav_link">
          {link.title}
        </ListItem>
      </Link>
    ))
  )
    
  
  return (
      <div>
          {renderLinks()}
          <ListItem button className="admin_nav_link" onClick={()=>logoutHandle()}>
          Log Out
        </ListItem>

      </div>
  )
  
};

export default withRouter(AdminNav);
