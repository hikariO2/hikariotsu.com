import { Link } from "gatsby"
import React from "react"
import "./Teaser.css"
import { DateLabel } from "../DateLabel/DateLabel"
import Image from '../image';

export const Teaser = (props) => {
  return (
    <div className="teaser">
      <Link to={props.to}>
        <div className="teaser_img">{props.image}</div>
        <div className="teaser_info teaser-info">
          <div className="teaser-info_text teaser-info-text t--delta">
            <p>{props.title}</p>
            <p className="teaser-info-text_categry">{props.category}</p>
          </div>
          <DateLabel date={props.date}/>
        </div>
      </Link>
    </div>
  );
};
