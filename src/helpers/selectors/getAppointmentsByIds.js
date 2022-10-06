// src/helpers/selectors/getAppointmentsByIds.js
const getAppointmentsByIds = (appointments, ids) => {
  return ids.map((id) => {
    return appointments[id];
  });
};

export default getAppointmentsByIds;