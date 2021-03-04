import { Link } from "gatsby"
import React from "react"
import "./Navigation.css"

export const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav_item nav-item"><Link to="/work" className="nav-item_link t--epsilon">Work</Link></li>
      <li className="nav_item nav-item"><Link to="/about" className="nav-item_link t--epsilon">About</Link></li>
      <li className="nav_item nav-item"><Link to="/" className="nav-item_link t--epsilon">Resume</Link></li>
    </ul>
  );
};
