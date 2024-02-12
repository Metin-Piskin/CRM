import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineFiberNew, MdOutlineMarkEmailRead } from "react-icons/md";
import { TbMailPause } from "react-icons/tb";

import "./Customers.css";
import CustomersCard from "../../Components/CustomersCard";
import CustomerListCard from "../../Components/CustomerListCard";

const Customers = () => {
  return (
    <div className="CustomersContainer">
      <div className="CustomersHeaderContainer">
        <h2>Customers</h2>
        <div className="CustomersHeaderInputContainer">
          <div className="CustomersHeaderInnerInputContainer">
            <FiSearch />
            <input placeholder="Search" className="CustomersHeaderInput" />
          </div>
          <button className="CustomersHeaderBellButtonContainer">
            <FaRegBell color="#fff" size={20} />
          </button>
        </div>
      </div>
      <div className="CustomersCardsContainer">
        <CustomersCard
          BackgroundColor={"#CFDFFF"}
          TextOne={"Unanswered"}
          TextTwo={"03"}
          Icon={<TbMailPause size={26} color="#1664FF" />}
        />
        <CustomersCard
          BackgroundColor={"#C5F4FB"}
          TextOne={"Answered"}
          TextTwo={"16"}
          Icon={<MdOutlineMarkEmailRead size={26} color="#10C8E4" />}
        />
        <CustomersCard
          BackgroundColor={"#D5F5D5"}
          TextOne={"New Offer"}
          TextTwo={"06"}
          Icon={<MdOutlineFiberNew size={26} color="#22BF22" />}
        />
        <CustomersCard
          BackgroundColor={"#FFD8E5"}
          TextOne={"Rejected"}
          TextTwo={"10"}
          Icon={<IoClose size={26} color="#FF3679" />}
        />
      </div>
      <div className="CustomersAllListContainer">
        <div className="CustomersListTitleContainer">
          <h2 className="CustomersListTitle">Customers List</h2>
          <select className="CustomersListSelects" name="selectedFruit">
            <option value="Sortby">Sort by</option>
            <option value="Sortby">Sort by</option>
            <option value="Sortby">Sort by</option>
          </select>
        </div>
        <div className="CustomersListContainer">
          <div className="CustomersListTitleSectionsContainer">
            <p style={{ fontWeight: "bold" }}>Customer Name</p>
            <p style={{ fontWeight: "bold" }}>Project Subject</p>
            <p style={{ fontWeight: "bold" }}>Status</p>
            <p style={{ fontWeight: "bold" }}>Last Contact</p>
            <p style={{ fontWeight: "bold" }}>Action</p>
          </div>
          <CustomerListCard
            CustomerName={"Markdesing"}
            ProjectSubject={"Markdesing"}
            Status={"Running"}
            LastContact={"06 July, 2021"}
          />
          <CustomerListCard
            CustomerName={"Markdesing"}
            ProjectSubject={"Markdesing"}
            Status={"Running"}
            LastContact={"06 July, 2021"}
            id={1}
          />
          <CustomerListCard
            CustomerName={"Markdesing"}
            ProjectSubject={"Markdesing"}
            Status={"Running"}
            LastContact={"06 July, 2021"}
          />
          <CustomerListCard
            CustomerName={"Markdesing"}
            ProjectSubject={"Markdesing"}
            Status={"Running"}
            LastContact={"06 July, 2021"}
            id={1}
          />
          <CustomerListCard
            CustomerName={"Markdesing"}
            ProjectSubject={"Markdesing"}
            Status={"Running"}
            LastContact={"06 July, 2021"}
          />
          <CustomerListCard
            CustomerName={"Markdesing"}
            ProjectSubject={"Markdesing"}
            Status={"Running"}
            LastContact={"06 July, 2021"}
            id={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
