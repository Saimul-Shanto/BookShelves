import React from 'react';
import {Link} from "react-router-dom";

const NavBar=()=>{
    return(
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo" style={{marginLeft: 20}}>BookShelves</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/popular">Popular Books</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/help">Help & Support</Link></li>
      </ul>
    </div>
  </nav>
    );

};

export default NavBar;

