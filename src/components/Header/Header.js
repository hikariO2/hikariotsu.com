import { Link } from "gatsby"
import React from "react"
import { ArrowLeft } from "../Icon/Icon";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css"

export const Header = ({
  children,
  homeOnly = false,
  caseStudyOnly = false,
  titleEn,
  titleJp,
  url
}) => {

  if (homeOnly) {
   return (
     <header>
       <nav className="header grid">
         <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
         <div className="header_title header-title">
           <p className="header-title_first t--epsilon">{titleEn}</p>
           <p className="header-title_second t--epsilon-jp">{titleJp}</p>
           <p className="header-title_description t--epsilon">Hikari is a Japanease Digital Designer and Coder based in Germany.  Currently studying User experience design @THIngolstadt and working @Ateilerdisko. </p>
         </div>
         <span className="header_nav"><Navigation /></span>
       </nav>
     </header>
   );
  }

  if (caseStudyOnly) {
    return (
      <header>
        <nav className="header grid">
          <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
          <Link to="/work"  className="header_title header-title">
            <span className="header-titile_icon"><ArrowLeft /></span>
            <p className="header-title_first t--epsilon">Back to Overview</p>
          </Link>
          <span className="header_nav"><Navigation /></span>
        </nav>
      </header>
    );
  };

  return (
   <header>
     <nav className="header grid">
       <Link to="/" className="header_logo t--epsilon">Hikari Otsu</Link>
       <div className="header_title header-title">
         <p className="header-title_first t--epsilon">/ {titleEn}</p>
         <p className="header-title_second t--epsilon-jp">{titleJp}</p>
       </div>
       <span className="header_nav"><Navigation /></span>
     </nav>
   </header>
  );
};
