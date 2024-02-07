import React from "react";

import "./DashboardCard.css";

const DashboardCard = ({ BackgroundColor, TextOne, TextTwo,Icon }) => {
  return (
    <div className="DashboardCardContainer" style={{ backgroundColor: BackgroundColor }}>
      <div className="DashboardCardTextContainer">
        <p className="DashboardCardTextOne">{TextOne}</p>
        <p className="DashboardCardTextTwo">{TextTwo}</p>
      </div>
      <div className="DashboardCardIconContainer">
        {Icon}
      </div>
    </div>
  );
};

export default DashboardCard;
