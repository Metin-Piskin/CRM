import React from "react";

import { FaRegEye } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { LuTrash } from "react-icons/lu";

import "./CustomerListCard.css";

const CustomerListCard = ({
  id,
  CustomerName,
  ProjectSubject,
  Status,
  LastContact,
}) => {
  return (
    <div
      style={{ backgroundColor: id == 1 ? "#FAFAFC" : "#fff" }}
      className="CustomerListCardContainer"
    >
      <p>{CustomerName}</p>
      <p style={{ fontWeight: "bold",marginLeft:35 }}>{ProjectSubject}</p>
      <div style={{ display: "flex", gap: 5 , marginLeft:35}}>
        <hr
          color={
            Status === "Running"
              ? "#FABA5F"
              : "" || Status === "Pending"
              ? "#1EBAFF"
              : "" || Status === "Completed"
              ? "#22BF22"
              : ""
          }
        />
        <p>{Status}</p>
      </div>
      <p>{LastContact}</p>

      <div className="CustomerListCardButtonsContainer">
        <button className="CustomerListCardEyeButton">
          <FaRegEye color="#FABA5F" />
        </button>
        <button className="CustomerListCardPencilButton">
          <GoPencil color="#8D95A3" />
        </button>
        <button className="CustomerListCardTrashButton">
          <LuTrash color="#FF5454" />
        </button>
      </div>
    </div>
  );
};

export default CustomerListCard;
