import React, { useState } from "react"
import { Link } from "gatsby"
import { ArrowLeft } from "../Icon/Icon"
import { Navigation } from "../Navigation/Navigation"
import { Hamburger } from "../Hamburger/Hamburger"
import { ToggleNav } from "../ToggleNav/ToggleNav"
import "./Header.css"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     <header>
         <nav className="header grid">
           <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
           <span className="header_nav"><Navigation /></span>
           <span className="header_hamburger"><Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /></span>
         </nav>
     </header>
     <ToggleNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};
