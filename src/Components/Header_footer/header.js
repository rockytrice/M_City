import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import "../../Resources/css/app.css";
import { Link } from "react-router-dom";
import { CityLogo } from "../Utils/tools";
import {firebase} from '../../firebase';
import { getAuth } from "firebase/auth";
import { showToastSuccess, showToastError } from "../Utils/tools";


const auth = getAuth(firebase);

const Header = ({ user }) => {

const logoutHandle =()=>{
  auth.signOut()
  .then(()=>{
    showToastSuccess("Logging off")
  }).catch(error=>{
    showToastError(error.message)
  })

}


  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solid #00285e",
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            {/* passing the props from the icon component */}
            <CityLogo link={true} linkTo="/" width="70px" height="70px" />
          </div>
        </div>
        <Link to="/the_team">
          <Button color="inherit">The Team</Button>
        </Link>
        <Link to="/matches">
          <Button color="inherit">Matches</Button>
        </Link>
        {/* checking if we do have a user */}
        {user ? 
          <>
          <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          
            <Button color="inherit" onClick={logoutHandle}>Sign Out</Button>
          </>
         : null
         }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
