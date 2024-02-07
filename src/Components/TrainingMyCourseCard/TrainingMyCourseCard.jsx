import React from "react";

import { LuTrash } from "react-icons/lu";

import "./TrainingMyCourseCard.css";

const TrainingMyCourseCard = ({ CourseName, CourseDuration, Progress }) => {
  return (
    <div className="TrainingMyCourseCardContainer">
      <p style={{ flex: 1 }}>{CourseName}</p>
      <p style={{ flex: 1 }}>{CourseDuration}</p>

      <progress
        style={{
          accentColor: "#22BF22",
          width: 90,
          height: 15,
        }}
        value={Progress}
      />
      <div className="TrainingMyCourseCardButtonsContainer">
        <button className="TrainingMyCourseCardTrashButton">
          <LuTrash color="#FF5454" />
        </button>
      </div>
    </div>
  );
};

export default TrainingMyCourseCard;
