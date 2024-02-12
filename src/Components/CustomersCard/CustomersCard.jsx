import React from "react";

import "./CustomersCard.css";

const CustomersCard = ({ BackgroundColor, TextOne, TextTwo, Icon }) => {
  return (
    <div
      className="CustomersCardContainer"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="CustomersCardTextContainer">
        <p className="CustomersCardTextOne">{TextOne}</p>
        <p className="CustomersCardTextTwo">{TextTwo}</p>
      </div>
      <div className="CustomersCardIconContainer">{Icon}</div>
    </div>
  );
};

export default CustomersCard;
