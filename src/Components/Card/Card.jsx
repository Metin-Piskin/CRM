import React from "react";

import "./Card.css";

const Card = ({ BackgroundColor, TextOne, TextTwo,Icon }) => {
  return (
    <div className="CardContainer" style={{ backgroundColor: BackgroundColor }}>
      <div className="CardTextContainer">
        <p className="CardTextOne">{TextOne}</p>
        <p className="CardTextTwo">{TextTwo}</p>
      </div>
      <div className="CardIconContainer">
        {Icon}
      </div>
    </div>
  );
};

export default Card;
