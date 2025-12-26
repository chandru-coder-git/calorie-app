import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"

const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  return (
   // <nav className='navbar'>
       <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">MyApp</div>

      {/* Nav links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/add-food"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setIsOpen(false)}
        >
          Add Food
        </NavLink>
        <NavLink
          to="/daily-consume"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setIsOpen(false)}
        >
          Daily Log
        </NavLink>
        <NavLink
          to="/food-history"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setIsOpen(false)}
        >
          Food History
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setIsOpen(false)}
        >
          User
        </NavLink>
      </div>

      {/* Hamburger menu */}
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
          /*{ <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active-link" onClick={() => setIsOpen(false)} end>Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-food" activeClassName="active-link" onClick={() => setIsOpen(false)}>Add Food</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/daily-consume" activeClassName="active-link" onClick={() => setIsOpen(false)}>Daily Consume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/food-history" activeClassName="active-link" onClick={() => setIsOpen(false)}>Food History</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/user" activeClassName="active-link" onClick={() => setIsOpen(false)}>User</NavLink>
            </li>
          </ul> }*/
       // </div>
       // <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
      //  ☰
      //</div>
    //  </div>
    //</nav>
  );
};

export default Navbar;
