// src/helpers/selectors/getAppointmentUrl.js
// @ts-check
/**
 * Gets the appropriate url id
 * @param     {Number} id The appointment id
 * @returns   {String}
 */
const getAppointmentUrl = (id) => {
  return `api/appointments/${id}`;
};
export default getAppointmentUrl;