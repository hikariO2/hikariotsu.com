import { Link } from "gatsby"
import React from "react"
import "./ProjectHero.css"

export const ProjectHero = ({
title,
category,
date,
teaserImage,

}) => {

  return (
    <div className="project-hero">
      <div className="teaser_img">{props.image}</div>
        <div className="teaser_info teaser-info">
          <div className="teaser-info_text teaser-info-text t--delta">
            <p>{props.title}</p>
            <p className="teaser-info-text_categry">{props.category}</p>
          </div>
          <DateLabel date={props.date}/>
        </div>
    </div>
  );
};
