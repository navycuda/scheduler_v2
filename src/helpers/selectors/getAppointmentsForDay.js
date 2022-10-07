// src/helpers/selectors/getAppointmentsForDay.js

/**
 * 
 * @param     {Object} state - Appointment state from which to query 
 * @param     {Array.<{id: Number, name: String, spots: Number}>} state.days - Array of day objects
 * @param     {Object} state.appointments
 * @param     {String} day 
 * @returns 
 */
const getAppointmentsForDay = (state, day) => {
  const selectedDay = state.days.find(({ name }) => name === day);
  return !selectedDay ? [] : getAppointmentsByIds(state.appointments, selectedDay.appointments);
};

export default getAppointmentsForDay;
ge