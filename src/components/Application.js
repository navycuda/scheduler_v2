// @ts-check

import Axios from "axios";
import React, { useState, useEffect } from "react";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";

import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import {  } from "helpers/operations";

/**
 * @type  {State}
 */
const emptyState = {
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
};

const Application = () => {
  const [ state, setState ] = useState(emptyState);
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
  
  const dailyAppointments = getAppointmentsForDay(state);
  
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
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment 
        key={appointment.id}
        {...appointment}
      />
    );
  });
  schedule.push(<Appointment key="last" time="5pm" />);


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
        {schedule}
      </section>
    </main>
  );
};

export default Application;
