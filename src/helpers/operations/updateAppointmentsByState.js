// src/helpers/operations/bookInterview.js
// @ts-check

/**
 * Function to book the interview
 * @param     {Number} id           appointment id
 * @param     {Interview} interview interview to book
 * @param     {State} state         state of the application
 * @returns   {Appointments}
 */
const updateAppointmentsByState = (id, interview, state) => {
  const appointment = {
    ...state.appointments[id],
    interview: {...interview}
  };
  return {
    ...state.appointments,
    [id]: appointment
  }
};

export default updateAppointmentsByState;