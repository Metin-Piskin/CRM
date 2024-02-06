import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../../Assets/events";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./Organization.css";
const localizer = momentLocalizer(moment);

const Organization = () => {
  return (
    <div className="OrganizationContainer">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ padding: 50 }}
      />
    </div>
  );
};

export default Organization;
