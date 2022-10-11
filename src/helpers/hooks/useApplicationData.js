// src/helpers/hooks/useApplicationData.js
// @ts-check
import React, { useState, useEffect } from "react";
import { updateAppointmentsByState } from "helpers/operations";
import { getAppointmentUrl, getAppointmentsForDay, getInterview } from "helpers/selectors";
import Appointment from "components/Appointment";
import Axios from "axios";

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
  const bookInterview = (id, interview) => {
    const appointments = updateAppointmentsByState(id, interview, state);

    return Axios.put(getAppointmentUrl(id), {interview})
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
    return Axios.delete(getAppointmentUrl(id))
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

    const appointments = getAppointmentsForDay(state);
    console.log("getSchedule : appointments", appointments);
    const result = appointments.map((appointment) => {
      const interview = getInterview(state, appointment.interview);
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={interview}
        />
      );
    });
    console.log("getSchduel : result - before push", result)
    result.push(
      <Appointment
        key="last"
        time="5pm"
      />
    );
    console.log("getSchedule : result - after push", result);
    return result;
  };

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
          appointments: all[1].data,
          interviewers:all[2].data
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