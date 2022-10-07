// src/helpers/selectors/getAppointmentsForDay.js
// @ts-check

import getAppointmentsByIds from "./getAppointmentsByIds";

/**
 * Gets the Appoints for a day
 * @param     {Object}        state - Appointment state from which to query 
 * @param     {String}        state.day - The selected day
 * @param     {Array.<Day>}   state.days - Array of day objects
 * @param     {Appointments}  state.appointments
 * @returns   {Array|Appointments}
 */
const getAppointmentsForDay = (state) => {
  const selectedDay = state.days.find(({ name }) => name === state.day);
  return !selectedDay ? [] : getAppointmentsByIds(state.appointments, selectedDay.appointments);
};

export default getAppointmentsForDay;