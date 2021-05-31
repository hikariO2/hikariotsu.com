import { Link } from "gatsby"
import React from "react"
import "./Navigation.css"

export const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav_item nav-item"><Link to="/work" className="nav-item_link t--epsilon">Work</Link></li>
      <li className="nav_item nav-item"><Link to="https://www.notion.so/hikari02/Hikari-Otsu-dadcb4ae31064c98916de85296a16379" target="_blank" className="nav-item_link t--epsilon">About</Link></li>
      <li className="nav_item nav-item"><Link to="/" className="nav-item_link t--epsilon">Resume</Link></li>
    </ul>
  );
};
