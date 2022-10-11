// @ts-check

import Axios from "axios";
import React, { useState, useEffect } from "react";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";

import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import { useApplicationData } from "helpers/hooks";

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
  const {
    state,
    setDay,
    bookInterview,
    editInterview,
    cancelInterview,
    getSchedule
  } = useApplicationData();
  



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
        {getSchedule()}
      </section>
    </main>
  );
};

export default Application;
