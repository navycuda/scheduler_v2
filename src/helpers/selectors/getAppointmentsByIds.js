// src/helpers/selectors/getAppointmentsByIds.js
// @ts-check

/**
 * Gets the appointments by their id from the provided 
 * @param {Appointments} appointments The appointment database to read
 * @param {Array.<Number>} ids - Id numbers of the appointments to extract 
 * @returns {Appointments}
 */
const getAppointmentsByIds = (appointments, ids) => {
  return ids.map((id) => {
    return appointments[id];
  });
};

export default getAppointmentsByIds;