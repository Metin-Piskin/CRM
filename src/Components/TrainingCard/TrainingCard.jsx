import React from "react";

import "./TrainingCard.css";

const TrainingCard = ({ BackgroundColor, TextOne, TextTwo, Icon }) => {
  return (
    <div
      className="TrainingCardContainer"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="TrainingCardTextContainer">
        <p className="TrainingCardTextOne">{TextOne}</p>
        <p className="TrainingCardTextTwo">{TextTwo}</p>
      </div>
      <div className="TrainingCardIconContainer">{Icon}</div>
    </div>
  );
};

export default TrainingCard;
