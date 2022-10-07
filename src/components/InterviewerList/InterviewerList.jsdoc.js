// src/components/InterviewerList/InterviewerList.jsdoc.js
// @ts-check
/**
 * Interview List module
 * @module InterviewerList
 */
/**
 * Interviewer
 * @typedef   {Object}        Interviewer
 * @property  {Number}        id The interviewers id
 * @property  {String}        name The name of the interviewer
 * @property  {String}        avatar The url of the interviewers avatar
 */
/**
 * Interview
 * @typedef   {Object}        Interview
 * @property  {String}        student The students name
 * @property  {Interviewer}   interviewer The mentor processing the interview
 */
/**
 * Interviewers
 * @typedef   {{[id: Number]: Interviewer}} Interviewers
 */