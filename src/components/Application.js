// @ts-check

import Axios from "axios";
import React, { useState, useEffect } from "react";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";

import { getAppointmentsForDay } from "helpers/selectors";

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

/**
 * @type  {State}
 */
const emptyState = {
  day: "Monday",
  days: [],
  appointments: {}
};

const Application = () => {
  const [ state, setState ] = useState(emptyState);

  const dailyAppointments = getAppointmentsForDay(state);

  /**
   * sets the currently selected day
   * @param {String} day 
   * @returns {void}
   */
  const setDay = (day) => setState({...state, day});
  /**
   * Sets the days
   * @param {Array.<Day>} days days to set state with
   * @returns {void}
   */
  const setDays = (days) => setState((prev) => {
    return {...prev, days };
  });

  // Deal with days
  useEffect(() => {
    const urlGetDays = '/api/days';
    const urlGetAppointments = '/api/appointments';
    const urlGetInterviewers = '/api/interviewers';

    Promise
      .all([
        Axios.get(urlGetDays),
        Axios.get(urlGetAppointments),
        Axios.get(urlGetInterviewers)
      ])
      .then((all) => {

        setState((previous) => ({
          ...previous,
          days: all[0].data,
          appointments: all[1].data
        }));
      });
  }, []);

  // Deal with Appointments
  const mockAppointments = dailyAppointments.map((appointment) => {
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
          value={state.day}
          days={state.days}
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
