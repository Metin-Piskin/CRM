import React from "react";

import { FaRegBell } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { FaSuperpowers } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { LiaBusinessTimeSolid } from "react-icons/lia";

import "./ProjectManager.css";
import ProjectManagerCard from "../../Components/ProjectManagerCard";
import ProjectManagerProject from "../../Components/ProjectManagerProject";

const ProjectManager = () => {
  return (
    <div className="ProjectManagerContainer">
      <div className="ProjectManagerHeaderContainer">
        <h2>Project Manager</h2>
        <div className="ProjectManagerHeaderButtonsContainer">
          <button className="ProjectManagerHeaderAddNewButtonContainer">
            Add New
          </button>
          <button className="ProjectManagerHeaderBellButtonContainer">
            <FaRegBell color="#fff" size={20} />
          </button>
        </div>
      </div>
      <div className="ProjectManagerAllCardsContainer">
        <ProjectManagerCard
          BackgroundColor={"#DEF5C1"}
          TextOne={"Pending Projects"}
          TextTwo={"05"}
          Icon={<TbCalendarTime size={35} color="#77CB0D" />}
        />
        <ProjectManagerCard
          BackgroundColor={"#EED6FB"}
          TextOne={"In Progress"}
          TextTwo={"12"}
          Icon={<FaSuperpowers size={35} color="#B62EFF" />}
        />
        <ProjectManagerCard
          BackgroundColor={"#CFDFFF"}
          TextOne={"Completed Progress"}
          TextTwo={"1026"}
          Icon={<GoVerified size={35} color="#1664FF" />}
        />
        <ProjectManagerCard
          BackgroundColor={"#C5F4FB"}
          TextOne={"Deferred"}
          TextTwo={"06"}
          Icon={<LiaBusinessTimeSolid size={35} color="#10C8E4" />}
        />
      </div>
      <div className="ProjectManagerAllProjectsContainer">
        <div className="ProjectManagerProjectsTitleContainer">
          <h2 className="ProjectManagerProjectsTitle">All Projects List</h2>
          <select
            className="ProjectManagerProjectsSelects"
            name="selectedFruit"
          >
            <option value="Sortby">Sort by</option>
            <option value="Sortby">Sort by</option>
            <option value="Sortby">Sort by</option>
          </select>
        </div>
        <div className="ProjectManagerProjectsContainer">
          <div className="ProjectManagerProjectsTitleSectionsContainer">
            <p style={{ fontWeight: "bold" }}>Project Name</p>
            <p style={{ fontWeight: "bold" }}>Priority</p>
            <p style={{ fontWeight: "bold" }}>End Date</p>
            <p style={{ fontWeight: "bold" }}>Status</p>
            <p style={{ fontWeight: "bold" }}>Progress</p>
            <p style={{ fontWeight: "bold" }}>Action</p>
          </div>
          <ProjectManagerProject
            ProjectName={"Markdesing"}
            Priority={"High"}
            EndDate={"06 July, 2021"}
            Status={"Running"}
            Progress={0.65}
          />
          <ProjectManagerProject
            ProjectName={"Oriano Land"}
            Priority={"Medium"}
            EndDate={"14 Sep, 2021"}
            Status={"Pending"}
            Progress={0.05}
            id={1}
          />
          <ProjectManagerProject
            ProjectName={"QuickLeave"}
            Priority={"Medium"}
            EndDate={"28 July, 2021"}
            Status={"Running"}
            Progress={0.3}
          />
          <ProjectManagerProject
            ProjectName={"Travel Znk"}
            Priority={"Low"}
            EndDate={"08 Jun, 2021"}
            Status={"Completed"}
            Progress={1}
            id={1}
          />
          <ProjectManagerProject
            ProjectName={"Markdesing"}
            Priority={"High"}
            EndDate={"06 July, 2021"}
            Status={"Running"}
            Progress={0.65}
          />
          <ProjectManagerProject
            ProjectName={"Oriano Land"}
            Priority={"Medium"}
            EndDate={"14 Sep, 2021"}
            Status={"Pending"}
            Progress={0.05}
            id={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
