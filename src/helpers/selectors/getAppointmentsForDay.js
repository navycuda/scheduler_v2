// src/helpers/selectors/getAppointmentsForDay.js
const getAppointmentsForDay = (state, day) => {
  const selectedDay = state.days.find(({ name }) => name === day);
  return !selectedDay ? [] : getAppointmentsByIds(state.appointments, selectedDay.appointments);
};

export default getAppointmentsForDay;
