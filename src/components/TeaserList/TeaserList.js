import React from "react"
import "./TeaserList.css"
import { Teaser } from "../Teaser/Teaser"
import Img from 'gatsby-image';

export const TeaserList = ({ 
  items,
  featured = true,
  ...rest
 }) => {
  
  return (
    <div className="grid">
      <div className="teaserList grid_inner">
        {items.map((item, index) => {
          return (
            <div className="teaserList_item">
              <Teaser 
                title={item.title} 
                category={item.category}
                date={item.date}
                filename={item.filename}
                to={item.url}
                image={<Img
                  fluid={item.image}
                  alt={item.alt}
                />}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
