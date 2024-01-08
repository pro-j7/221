import React from "react";

const dateStyle = {
  todayText: {
    margin: "0 0 5px 0",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
};

const DateComponent = () => {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[currentDate.getMonth()];

  return (
    <div>
      <p style={dateStyle.todayText}>
        {dayOfWeek}, {monthName} {date}, {year}
      </p>
    </div>
  );
};

export default DateComponent;
