import Axios from "axios";
import React, { useState, useEffect } from "react";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";

const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  }
};



const Application = () => {
  const [ day, setDay ] = useState("Monday");
  const [ days, setDays ] = useState([]);

  // Deal with days
  useEffect(() => {
    const urlGetDays = '/api/days';

    Promise
      .all([
        Axios.get(urlGetDays)
      ])
      .then((all) => {
        for (const each of all) {
          console.log(each.data);
        }
        setDays(all[0].data);
      });
  }, []);

  // Deal with Appointments
  const mockAppointments = Object.values(appointments).map((appointment) => {
    return (
      <Appointment 
        key={appointment.id}
        {...appointment}
      />
    );
  });
  mockAppointments.push(<Appointment key="last" time="5pm" />);


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList 
          value={day}
          days={days}
          onChange={(day) => setDay(day)}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {mockAppointments}
      </section>
    </main>
  );
};

export default Application
