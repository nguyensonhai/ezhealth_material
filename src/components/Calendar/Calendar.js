import React, { useEffect, useState } from "react";
import "assets/css/components/calendarStyle.css";
export default function Calendar() {
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
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newDate = new Date();
  const [hours, setHours] = useState(new Date().getHours());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setSeconds(new Date().getSeconds());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, [hours, seconds, minutes]);

  return (
    <div className="calendar-container">
      <div className="signboard outer">
        <div className="signboard front inner anim04c">
          <li className="year anim04c">
            <span>{newDate.getFullYear()}</span>
          </li>
          <ul className="calendarMain anim04c">
            <li className="month anim04c">
              <span>{monthNames[newDate.getMonth()]}</span>
            </li>
            <li className="date anim04c">
              <span>{newDate.getDate()}</span>
            </li>
            <li className="day anim04c">
              <span>{dayNames[newDate.getDay()]}</span>
            </li>
          </ul>
          <li className="clock minute anim04c">
            <span>{minutes < 10 ? "0" + minutes : minutes}</span>
          </li>
          <li className="calendarNormal date2 anim04c">
            <span>{newDate.getDate()}</span>
          </li>
        </div>
        <div className="signboard left inner anim04c">
          <li className="clock hour anim04c">
            <span>{hours < 10 ? "0" + hours : hours}</span>
          </li>
          <li className="calendarNormal day2 anim04c">
            <span>{dayNames[newDate.getDay()]}</span>
          </li>
        </div>
        <div className="signboard right inner anim04c">
          <li className="clock second anim04c">
            <span>{seconds < 10 ? "0" + seconds : seconds}</span>
          </li>
          <li className="calendarNormal month2 anim04c">
            <span>{monthNames[newDate.getMonth()]}</span>
          </li>
        </div>
      </div>
    </div>
  );
}
