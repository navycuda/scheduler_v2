// src/components/Appointment/Appointment.jsdoc.js
// @ts-check
/**
 * Appointment module
 * @module Appointment
 */
/**
 * Appointment
 * @typedef     {Object}    Appointment
 * @property    {Number}    key - Required for React
 * @property    {Number}    [id] - The id of this appointment
 * @property    {String}    [time] - The time of the interview ie "12pm"
 * @property    {interview} [interview] - The interview object for this Appointment
 */
/**
 * Appointments
 * @typedef     {{[id: Number]: Appointment}} Appointments
 */