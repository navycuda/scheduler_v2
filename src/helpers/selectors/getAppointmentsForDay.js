// src/helpers/selectors/getAppointmentsForDay.js

/**
 * Gets the Appoints for a day
 * @param     {Object}        state - Appointment state from which to query 
 * @param     {Array.<Day>}   state.days - Array of day objects
 * @param     {Appointments}  state.appointments
 * @param     {String}        day 
 * @returns   {Array.<Appointment>}
 */
const getAppointmentsForDay = (state, day) => {
  const selectedDay = state.days.find(({ name }) => name === day);
  return !selectedDay ? [] : getAppointmentsByIds(state.appointments, selectedDay.appointments);
};

export default getAppointmentsForDay;