import React from "react";

import { FaRegBell } from "react-icons/fa";

import "./Tickets.css";

const Tickets = () => {
  return (
    <div className="TicketsContainer">
      <div className="TicketsHeaderContainer">
        <h2>Tickets</h2>
        <button className="TicketsHeaderBellButtonContainer">
          <FaRegBell color="#fff" size={20} />
        </button>
      </div>


    </div>
  );
};

export default Tickets;
