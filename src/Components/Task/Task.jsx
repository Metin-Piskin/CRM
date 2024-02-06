import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { LuTrash } from "react-icons/lu";

import "./Task.css";

const Task = ({ id, ProjectName, EndDate, Status, Progress }) => {
  return (
    <div
      style={{ backgroundColor: id == 1 ? "#FAFAFC" : "#fff" }}
      className="ComponentTaskContainer"
    >
      <p style={{flex:1}}>{ProjectName}</p>
      <p style={{flex:1}}>{EndDate}</p>
      <div style={{ display: "flex", gap: 5,flex:1 }}>
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
        <p style={{flex:1}}>{Status}</p>
      </div>
      <progress
        style={{
          accentColor: `${
            Status === "Running"
              ? "#FABA5F"
              : "" || Status === "Pending"
              ? "#1EBAFF"
              : "" || Status === "Completed"
              ? "#22BF22"
              : ""
          }`,
          width: 90,
          height: 15,
        }}
        value={Progress}
      />
      <div className="ComponentTaskButtonsContainer">
        <button className="ComponentTaskEyeButton">
          <FaRegEye color="#FABA5F" />
        </button>
        <button className="ComponentTaskPencilButton">
          <GoPencil color="#8D95A3" />
        </button>
        <button className="ComponentTaskTrashButton">
          <LuTrash color="#FF5454" />
        </button>
      </div>
    </div>
  );
};

export default Task;
