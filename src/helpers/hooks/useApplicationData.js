// src/helpers/hooks/useApplicationData.js
// @ts-check
import React, { useState, useEffect } from "react";
import { updateAppointmentsByState } from "helpers/operations";
import { getAppointmentUrl, getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import Appointment from "components/Appointment";
import axios from "axios";

/**
 * @type {UseApplicationData}
 */
const useApplicationData = () => {
  const[ state, setState ] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  /**
   * @type {SetDay}
   */
  const setDay = (day) => setState({...state, day});

  /**
   * @type {BookInterview}
   */
  const bookInterview = async (id, interview, ) => {
    const appointments = updateAppointmentsByState(id, interview, state);

    return axios.put(getAppointmentUrl(id), {interview})
      .then(() => {
        setState((previous) => ({
          ...previous,
          days: previous.days.map((day) => {
            if (day.name === previous.day) {
              day.spots -= 1;
            }
            return day;
          }),
          appointments
        }));
      });
  };

  /**
   * @type {EditInterview}
   */
  const editInterview = async (id, interview) => {
    await cancelInterview(id);
    await bookInterview(id, interview);
  };

  /**
   * @type {CancelInterview}
   */
  const cancelInterview = async (id) => {
    return axios.delete(getAppointmentUrl(id))
      .then(() => {
        setState((previous) => ({
          ...previous,
          appointments: {
            ...previous.appointments,
            [id]: {
              ...previous.appointments[id],
              interview: null
            }
          },
          days: previous.days.map((day) => {
            if (day.name === previous.day) {
              day.spots += 1;
            }
            return day;
          })
        }));
      });
  };

  /**
   * @type {GetSchedule}
   */
  const getSchedule = () => {
    const interviewers = getInterviewersForDay(state);
    
    const appointments = Object.values(getAppointmentsForDay(state));
    const result = appointments.map((appointment) => {
      const interview = getInterview(state, appointment.interview);
      return (
        <Appointment 
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          interviewers={interviewers}
          bookInterview={bookInterview}
          editInterview={editInterview}
          cancelInterview={cancelInterview}
        />
      );
    });
    result.push(
      <Appointment
        key="last"
        time="5pm"
      />
    );
    return result;
  };

  useEffect(() => {
    const urlGetDays = '/api/days';
    const urlGetAppointments = '/api/appointments';
    const urlGetInterviewers = '/api/interviewers';

    Promise
      .all([
        axios.get(urlGetDays),
        axios.get(urlGetAppointments),
        axios.get(urlGetInterviewers)
      ])
      .then((all) => {
        setState((previous) => ({
          ...previous,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    editInterview,
    cancelInterview,
    getSchedule
  };
};



export default useApplicationData;