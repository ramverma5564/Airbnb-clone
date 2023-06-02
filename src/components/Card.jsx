import React from "react";
import imgStar from "../Images/star-rating.jpg";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={props.coverImg} alt="Cover" className="card-img" />
      </div>

      <div className="card-stats">
        <img src={imgStar} alt="Rating" className="card-star" />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span className="grey">{props.location}</span>
      </div>

      <p>{props.title}</p>
      <p>From {props.price} / person</p>
    </div>
  );
}
