// src/components/InterviewerList/InterviewerList.jsdoc.js
// @ts-check
/**
 * Interview List module
 * @module InterviewerList
 */
/**
 * Interviewer
 * @typedef   {Object}        interviewer
 * @property  {Number}        id The interviewers id
 * @property  {String}        name The name of the interviewer
 * @property  {String}        avatar The url of the interviewers avatar
 */
/**
 * Interview
 * @typedef   {Object}        interview
 * @property  {String}        student The students name
 * @property  {interviewer}   interviewer The mentor processing the interview
 */