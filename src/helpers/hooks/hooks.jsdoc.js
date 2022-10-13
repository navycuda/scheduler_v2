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
 * @async
 * @callback    EditInterview
 * @param       {Number}      id          The id of the appointment
 * @param       {Interview}   interview   The interview to be booked
 * @returns     {Promise}     
 */
/**
 * Cancels an existing interview
 * @callback    CancelInterview
 * @param       {Number}      id          The id of the appointment
 * @returns     {Promise}
 */
/**
 * Gets the current schedule
 * @callback    GetSchedule
 * 
 */
/**
 * The custom hook for the Application Data
 * @callback    UseApplicationData
 * @returns     {ApplicationData}
 */
/**
 * The custom hook for the Appointment Form Data
 * @callback    UseApptFormData
 * @param       {Init_ApptFormData} [initial] The intial state for the form
 * @returns     {ApptFormData}
 */
/**
 * Sets the student state
 * @callback    SetStudent
 * @property    {String}            student The students name
 */
/**
 * Sets the interviewer state
 * @callback    SetInterviewer
 * @property    {Number}            interviewer The interviewer id
 */
/**
 * Funtion to save the appointment
 * @callback    Save
 * @returns     {Void}
 */
/**
 * Resets the form to empty
 * @callback    Reset
 * @returns     {Void}
 */
/**
 * Handles the user input
 * @callback    InputHandler
 * @returns     {Void}
 */

/**
 * The initial state as sent to the apptform data
 * @typedef     {Object}            Init_ApptFormData
 * @property    {Appt_OnSave}       [onSave]
 * @property    {String}            [student] The student name
 * @property    {Number}            [interviewer] The interviewer id
 */
/**
 * The data from the Appointment Form
 * @typedef     {Object}            ApptFormData
 * @property    {String}            student The student name
 * @property    {SetStudent}        setStudent Sets the student name
 * @property    {Number}            interviewer Interviewer id
 * @property    {SetInterviewer}    setInterviewer sets the interviewer id
 * @property    {Save}              save
 * @property    {Reset}             reset
 * @property    {InputHandler}      inputHandler
 * @property    {String}            placeholder placeholder text for html
 */
/**
 * ApplicationData hook return object
 * @typedef     {Object}            ApplicationData
 * @property    {State}             state   Current state of the application
 * @property    {SetDay}            setDay  Sets the current day
 * @property    {BookInterview}     bookInterview books an interview in this slot
 * @property    {EditInterview}     editInterview edits an existing interview
 * @property    {CancelInterview}   cancelInterview removes an existing interview
 * @property    {GetSchedule}       getSchedule gets the schedule array
 */
/**
 * useVisualMode return object
 * @typedef     {Object}      VisualMode
 * @property    {String}      mode - The current visual mode
 * @property    {Transition}  transition - Transitions to the next visual mode
 * @property    {Back}        back - goes back to the previous 
 */



