import { Link } from "gatsby"
import React from "react"
import "./ToggleNav.css"

export const ToggleNav = ({
  isMenuOpen,
  setIsMenuOpen
}) => {
  return (
    <nav className="toggle-nav" aria-expanded={isMenuOpen}>
      <ul className="toggle-nav_list toggle-nav-list">
        <li className="toggle-nav_item toggle-nav-item"><Link to="/work" className="t--gamma">Work</Link></li>
        <li className="toggle-nav_item toggle-nav-item"><Link to="https://www.notion.so/hikari02/Hikari-Otsu-dadcb4ae31064c98916de85296a16379" target="_blank" className="t--gamma">About</Link></li>
        <li className="toggle-nav_item toggle-nav-item"><Link to="/" className="t--gamma">Resume</Link></li>
      </ul>
    </nav>
  )
};
