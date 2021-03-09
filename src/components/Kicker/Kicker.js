import React from "react"
import { Link } from "gatsby"
import { ArrowLeft } from "../Icon/Icon"
import "./Kicker.css"

export const Kicker = ({
  homeOnly = false,
  caseStudyOnly = false,
  titleEn,
  titleJp,
  url
}) => {
   
   if (caseStudyOnly) {
     return (
      <div className="kicker grid">
       <div className="kicker_content kicker-content">
        <Link to="/work">
          <span className="kicker-content_icon"><ArrowLeft /></span>
          <p className="kicker-content_en t--epsilon">Back to Overview</p>
        </Link>
       </div>
      </div>
     );
   };
 
   return (
    <div className="kicker grid">
      <div className="kicker_content kicker-content">
        <p className="kicker-content_en t--epsilon">{titleEn}</p>
        <p className="kicker-content_jp t--epsilon-jp">{titleJp}</p>
        {homeOnly && (
          <p className="kicker-content_description t--epsilon">Hikari is a Japanease Digital Designer and Coder based in Germany.  Currently studying User experience design @THIngolstadt and working @Ateilerdisko. </p>
        )}
      </div>
    </div>
   );
 };