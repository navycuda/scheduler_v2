// src/helpers/selectors/getInterviewersForDay.js
// @ts-check

/**
 * Gets the interviewers for this day
 * @param {State} state Current state of the data 
 */
const getInterviewersForDay = (state) => {
  const selectedDay = state.days.find(({ name }) => name === state.day);
  if (state.days.length === 0 || !selectedDay) {
    return [];
  }

  const interviewers = [];
  selectedDay.interviewers.forEach((appointment) => {
    interviewers.push(state.interviewers[appointment]);
  });
  return interviewers;
};

export default getInterviewersForDay;