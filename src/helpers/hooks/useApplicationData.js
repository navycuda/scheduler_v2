// src/helpers/hooks/useApplicationData.js
// @ts-check
import { useState, useEffect } from "react";
import { updateAppointmentsByState } from "helpers/operations";
import { getAppointmentUrl } from "helpers/selectors";
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


};



export default useApplicationData;