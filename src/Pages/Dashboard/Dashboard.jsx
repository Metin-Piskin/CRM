import React from "react";
import { FaRegStar, FaRegBell } from "react-icons/fa";
import { GiEntryDoor } from "react-icons/gi";
import { RiUserAddLine } from "react-icons/ri";
import { IoMegaphoneOutline, IoCalendarOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "./Dashboard.css";

import Avatar from "../../Assets/Avatar.png";

import DashboardCard from "../../Components/DashboardCard";
import DashboardTask from "../../Components/DashboardTask";

const data = [
  { name: "A", uv: 400, pv: 2400, amt: 2400 },
  { name: "B", uv: 300, pv: 2400, amt: 2400 },
  { name: "C", uv: 200, pv: 2400, amt: 2400 },
  { name: "D", uv: 300, pv: 2400, amt: 2400 },
  { name: "E", uv: 200, pv: 2400, amt: 2400 },
  { name: "F", uv: 200, pv: 2400, amt: 2400 },
];

const Dashboard = () => {
  return (
    <div className="DashboardContainer">
      <div className="DashboardHeaderContainer">
        <h2>Good Morning, Metin</h2>
        <div className="DashboardHeaderInputContainer">
          <div className="DashboardHeaderInnerInputContainer">
            <FiSearch />
            <input placeholder="Search" className="DashboardHeaderInput" />
          </div>
          <button className="DashboardHeaderButtonContainer">
            <FaRegBell color="#fff" size={20} />
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div className="CardContainer">
            <DashboardCard
              BackgroundColor={"#FFD8E5"}
              TextOne={"My Awards"}
              TextTwo={"26"}
              Icon={<FaRegStar size={26} color="#FF3679" />}
            />
            <DashboardCard
              BackgroundColor={"#CEEFFF"}
              TextOne={"Manageement Leave"}
              TextTwo={"31"}
              Icon={<GiEntryDoor size={26} color="#21B7FF" />}
            />
            <DashboardCard
              BackgroundColor={"#D5F5D5"}
              TextOne={"Total Requests"}
              TextTwo={"24"}
              Icon={<RiUserAddLine size={26} color="#22BF22" />}
            />
            <DashboardCard
              BackgroundColor={"#EEEBFF"}
              TextOne={"New Announcement"}
              TextTwo={"31"}
              Icon={<IoMegaphoneOutline size={26} color="#7158FF" />}
            />
          </div>
          <div className="TaskAllContainer">
            <h2 className="TaskContainerTitle">My Task</h2>
            <div className="TaskContainer">
              <div className="TaskTitleSectionsContainer">
                <p style={{ fontWeight: "bold" }}>Project Name</p>
                <p style={{ fontWeight: "bold" }}>End Date</p>
                <p style={{ fontWeight: "bold" }}>Status</p>
                <p style={{ fontWeight: "bold" }}>Progress</p>
                <p style={{ fontWeight: "bold" }}>Action</p>
              </div>
              <DashboardTask
                ProjectName={"Markdesing"}
                EndDate={"06 July, 2021"}
                Status={"Running"}
                Progress={0.65}
              />
              <DashboardTask
                ProjectName={"Oriano Land"}
                EndDate={"14 Sep, 2021"}
                Status={"Pending"}
                Progress={0.05}
                id={1}
              />
              <DashboardTask
                ProjectName={"QuickLeave"}
                EndDate={"28 July, 2021"}
                Status={"Running"}
                Progress={0.3}
              />
              <DashboardTask
                ProjectName={"Travel Znk"}
                EndDate={"08 Jun, 2021"}
                Status={"Completed"}
                Progress={1}
                id={1}
              />
              <DashboardTask
                ProjectName={"Markdesing"}
                EndDate={"06 July, 2021"}
                Status={"Running"}
                Progress={0.65}
              />
              <DashboardTask
                ProjectName={"Oriano Land"}
                EndDate={"14 Sep, 2021"}
                Status={"Pending"}
                Progress={0.05}
                id={1}
              />
              <DashboardTask
                ProjectName={"QuickLeave"}
                EndDate={"28 July, 2021"}
                Status={"Running"}
                Progress={0.3}
              />
              <DashboardTask
                ProjectName={"Travel Znk"}
                EndDate={"08 Jun, 2021"}
                Status={"Completed"}
                Progress={1}
                id={1}
              />
              <DashboardTask
                ProjectName={"Markdesing"}
                EndDate={"06 July, 2021"}
                Status={"Running"}
                Progress={0.65}
              />
              <DashboardTask
                ProjectName={"Oriano Land"}
                EndDate={"14 Sep, 2021"}
                Status={"Pending"}
                Progress={0.05}
                id={1}
              />
              <DashboardTask
                ProjectName={"QuickLeave"}
                EndDate={"28 July, 2021"}
                Status={"Running"}
                Progress={0.3}
              />
              <DashboardTask
                ProjectName={"Travel Znk"}
                EndDate={"08 Jun, 2021"}
                Status={"Completed"}
                Progress={1}
                id={1}
              />
            </div>
          </div>
        </div>
        <div className="AttendanceContainer">
          <div className="AttendanceButtonContainer">
            <button className="AttendanceOneButton">Mark Attendance</button>
            <button className="AttendanceTwoButton">Attendance Overview</button>
          </div>
          <hr />
          <div className="AttendanceUserContainer">
            <div className="AttendanceUserCardContainer">
              <div className="AttendanceUserCardImgContainer">
                <img className="AttendanceUserCardImg" src={Avatar} alt="" />
              </div>
              <div className="AttendanceUserCardTextContainer">
                <p className="AttendanceUserCardOneText">Metin Pişkin</p>
                <p className="AttendanceUserCardTwoText">
                  React Native Developer
                </p>
                <p className="AttendanceUserCardThreeText">
                  28 Jun, 2021 - 9:26
                </p>
              </div>
            </div>
            <div className="AttendanceShiftTextContainer">
              <p className="AttendanceShiftOneText">My Office Shift:</p>
              <p className="AttendanceShiftTwoText">9:00 - 18:00</p>
            </div>
            <div className="AttendanceClockButtonsContainer">
              <button className="AttendanceClockInButton">Clock In</button>
              <button className="AttendanceClockOutButton">Clock Out</button>
            </div>
          </div>
          <hr />
          <div className="AttendanceEarningsContainer">
            <div className="AttendanceEarningsTitleContainer">
              <p className="AttendanceEarningsTitle">Earnings</p>
              <IoCalendarOutline color={"#101928"} />
            </div>
            <LineChart
              width={300}
              height={200}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#FABA5F" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
