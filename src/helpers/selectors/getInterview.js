// src/helpers/selectors/getInterview.js
// @ts-check
import React from 'react';

/**
 * Gets interview data if
 * @param     {State}     state - current state of the app
 * @param     {Interview} interview - interview object to 
 * @returns   {null|Interview} 
 */
const getInterview = (state, interview) => {
  if (!interview) return null;

  const interviewer = state.interviewers[interview.interviewer.id];

  return {
    interviewer,
    student: interview.student
  };
};

export default getInterview;
