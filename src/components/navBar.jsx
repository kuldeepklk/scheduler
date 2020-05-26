import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  //alert(JSON.stringify(user));
  return (
    <nav class="navbar-inverse ">
      <div class="container">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         
          <ul class="nav navbar-nav navbar-right">
          {user && ( <React.Fragment>
            
            <li>
            <a href="#"><span className="profile">&nbsp;</span> {user.full_name}</a>
            </li>
            <li style={{marginTop:10}}>
            <Link to="/logout">logout</Link>
            </li>
            </React.Fragment>)}
            {!user && (
              <React.Fragment>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
