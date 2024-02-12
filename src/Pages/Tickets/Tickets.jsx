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
      <div className="TicketsContentContainer">
        <div className="TicketsContentInnerContainer">
          <input
            className="TicketsSubjectInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="TicketsDescriptionTextarea"
            placeholder="Description"
            inputMode="text"
          />
          <button className="TicketsSubmitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
