import React from "react";
import './button.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container-fluid d-flex justify-content-end">
      <a href="#connect">
      <button id="hello-btn" className="mr-4 px-4 py-2">
          Say Hello
      </button>
      </a>
      
    </nav>
  );
}

export default Navbar;
