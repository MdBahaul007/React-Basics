/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Card(props) {
  return (
    <React.Fragment>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="random-image" />
          <div className="card_info">
            <span className="source_name">{props.source}</span>
            <h3 className="webSeriesName">{props.showName}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
