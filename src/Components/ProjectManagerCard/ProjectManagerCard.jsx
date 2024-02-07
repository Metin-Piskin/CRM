import React from "react";

import "./ProjectManagerCard.css";

const ProjectManagerCard = ({ BackgroundColor, TextOne, TextTwo, Icon }) => {
  return (
    <div
      className="ProjectManagerCardContainer"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="ProjectManagerCardTextContainer">
        <p className="ProjectManagerCardTextOne">{TextOne}</p>
        <p className="ProjectManagerCardTextTwo">{TextTwo}</p>
      </div>
      <div className="ProjectManagerCardIconContainer">{Icon}</div>
    </div>
  );
};

export default ProjectManagerCard;
