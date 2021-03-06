import React, { useState } from "react"
import { Link } from "gatsby"
import { ArrowLeft } from "../Icon/Icon"
import { Navigation } from "../Navigation/Navigation"
import { Hamburger } from "../Hamburger/Hamburger"
import { ToggleNav } from "../ToggleNav/ToggleNav"
import "./Header.css"

export const Header = ({
  children,
  homeOnly = false,
  caseStudyOnly = false,
  titleEn,
  titleJp,
  url
}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (homeOnly) {
   return (
     <>
      <header>
          <nav className="header grid">
            <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
            <div className="header_title header-title">
              <p className="header-title_first t--epsilon">{titleEn}</p>
              <p className="header-title_second t--epsilon-jp">{titleJp}</p>
              <p className="header-title_description t--epsilon">Hikari is a Japanease Digital Designer and Coder based in Germany.  Currently studying User experience design @THIngolstadt and working @Ateilerdisko. </p>
            </div>
            <span className="header_nav"><Navigation /></span>
            <span className="header_hamburger"><Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /></span>
          </nav>
      </header>
      <ToggleNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
     </>
   );
  }
  
  if (caseStudyOnly) {
    return (
      <>
        <header>
          <nav className="header grid">
            <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
            <Link to="/work"  className="header_title header-title">
              <span className="header-titile_icon"><ArrowLeft /></span>
              <p className="header-title_first t--epsilon">Back to Overview</p>
            </Link>
            <span className="header_nav"><Navigation /></span>
            <span className="header_hamburger"><Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /></span>
          </nav>
        </header>
        <ToggleNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </>
    );
  };

  return (
    <>
      <header>
        <nav className="header grid">
          <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
          <div className="header_title header-title">
            <p className="header-title_first t--epsilon">/ {titleEn}</p>
            <p className="header-title_second t--epsilon-jp">{titleJp}</p>
          </div>
          <span className="header_nav"><Navigation /></span>
          <span className="header_hamburger"><Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /></span>
        </nav>
      </header>
      <ToggleNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};
