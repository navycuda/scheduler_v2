// src/helpers/hooks/hooks.jsdoc.js
// @ts-check
/**
 * The hooks module
 * @module Hooks
 */
/**
 * Transition to a new visual mode
 * @callback    Transition
 * @param       {String}      nextMode - Transition to this mode
 * @param       {Boolean}     [isReplacingPrevious] - This mode is replacing the previous
 * @returns     {Void} 
 */
/**
 * Return to a previous visual mode
 * @callback    Back
 * @returns     {Void}
 */
/**
 * Sets the state to the current day
 * @callback    SetDay
 * @param       {String}      day     The day to be set to
 * @returns     {Void}
 */
/**
 * Books the interview
 * @callback    BookInterview
 * @param       {Number}      id          The id of the appointment
 * @param       {Interview}   interview   The interview to be booked
 * @returns     {Promise}
 */
/**
 * Edits an existing interview
 * @callback    EditInterview
 * @param       {Number}      id          The id of the appointment
 * @param       {Interview}   interview   The interview to be booked
 * @returns     {Promise}     
 */
/**
 * Cancels an existing interview
 * @async
 * @callback    CancelInterview
 * @param       {Number}      id          The id of the appointment
 * @returns     {Promise}
 */
/**
 * The custom hook for the Application Data
 * @callback    UseApplicationData
 * @returns     {ApplicationData}
 */

/**
 * ApplicationData hook return object
 * @typedef     {Object}            ApplicationData
 * @property    {State}             state   Current state of the application
 * @property    {SetDay}            setDay  Sets the current day
 * @property    {BookInterview}     bookInterview books an interview in this slot
 * @property    {EditInterview}     editInterview edits an existing interview
 * @property    {CancelInterview}   cancelInterview removes an existing interview
 */
/**
 * useVisualMode return object
 * @typedef     {Object}      VisualMode
 * @property    {String}      mode - The current visual mode
 * @property    {Transition}  transition - Transitions to the next visual mode
 * @property    {Back}        back - goes back to the previous 
 */



