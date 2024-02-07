import React from "react";

import { FaRegBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { LiaCoinsSolid } from "react-icons/lia";

import "./Training.css";
import TrainingCard from "../../Components/TrainingCard";
import TrainingCourseCard from "../../Components/TrainingCourseCard";
import TrainingMyCourseCard from "../../Components/TrainingMyCourseCard";

const Training = () => {
  return (
    <div className="TrainingContainer">
      <div className="TrainingHeaderContainer">
        <h2>Training</h2>
        <div className="TrainingHeaderInputContainer">
          <div className="TrainingHeaderInnerInputContainer">
            <FiSearch />
            <input placeholder="Search" className="TrainingHeaderInput" />
          </div>
          <button className="TrainingHeaderButtonContainer">
            <FaRegBell color="#fff" size={20} />
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div className="TrainingCardsContainer">
            <TrainingCard
              BackgroundColor={"#D5F5D5"}
              TextOne={"Ongoing"}
              TextTwo={"05"}
              Icon={<MdOutlineSlowMotionVideo size={30} color="#22BF22" />}
            />
            <TrainingCard
              BackgroundColor={"#FFD8E5"}
              TextOne={"Untracked"}
              TextTwo={"11"}
              Icon={<PiVideoBold size={30} color="#FF3679" />}
            />
            <TrainingCard
              BackgroundColor={"#CEEFFF"}
              TextOne={"Coin"}
              TextTwo={"32"}
              Icon={<LiaCoinsSolid size={30} color="#21B7FF" />}
            />
          </div>
          <div className="TrainingMyCoursesAllContainer">
            <div className="TrainingMyCoursesTitleContainer">
              <h2 className="TrainingMyCoursesTitle">My Courses</h2>
              <select
                className="TrainingMyCoursesSelects"
                name="selectedFruit"
              >
                <option value="Sortby">Sort by</option>
                <option value="Sortby">Sort by</option>
                <option value="Sortby">Sort by</option>
              </select>
            </div>
            <div className="TrainingMyCourseCardsContainer">
              <div className="TrainingMyCoursesTitleSectionsContainer">
                <p style={{ fontWeight: "bold" }}>Course Name</p>
                <p style={{ fontWeight: "bold" }}>Course Duration</p>
                <p style={{ fontWeight: "bold" }}>Progress</p>
                <p style={{ fontWeight: "bold" }}>Action</p>
              </div>
              <TrainingMyCourseCard
                CourseName={"Markdesing"}
                CourseDuration={"13:45"}
                Progress={0.65}
              />
              <TrainingMyCourseCard
                CourseName={"Oriano Land"}
                CourseDuration={"21:32"}
                Progress={0.05}
              />
              <TrainingMyCourseCard
                CourseName={"QuickLeave"}
                CourseDuration={"15:00"}
                Progress={0.3}
              />
              <TrainingMyCourseCard
                CourseName={"Travel Znk"}
                CourseDuration={"08:55"}
                Progress={1}
              />
              <TrainingMyCourseCard
                CourseName={"Markdesing"}
                CourseDuration={"13:45"}
                Progress={0.65}
              />
              <TrainingMyCourseCard
                CourseName={"Oriano Land"}
                CourseDuration={"21:32"}
                Progress={0.05}
              />
              <TrainingMyCourseCard
                CourseName={"QuickLeave"}
                CourseDuration={"15:00"}
                Progress={0.3}
              />
              <TrainingMyCourseCard
                CourseName={"Travel Znk"}
                CourseDuration={"08:55"}
                Progress={1}
              />
            </div>
          </div>
        </div>
        <div className="TrainingCoursesAllContainer">
          <h3 className="TrainingCoursesTitle">Courses</h3>
          <div className="TrainingCoursesContainer">
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
              id={1}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
              id={1}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
              id={1}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
              id={1}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
              id={1}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
              id={1}
            />
            <TrainingCourseCard
              CourseName={"Course Name"}
              CourseTime={"Course Time"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
