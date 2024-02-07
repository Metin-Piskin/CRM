import React from "react";

import { MdAdd } from "react-icons/md";

import "./TrainingCourseCard.css";

const TrainingCourseCard = ({ CourseName, CourseTime, id }) => {
  return (
    <div
      className="TrainingCourseCardContainer"
      style={{ backgroundColor: id == 1 ? "#FAFAFC" : "#fff" }}
    >
      <h5 className="TrainingCourseNameText">{CourseName}</h5>
      <p className="TrainingCourseTimeText">{CourseTime}</p>
      <button className="TrainingCourseAddButton">
        <MdAdd size={17} color="#fff" />
      </button>
    </div>
  );
};

export default TrainingCourseCard;
