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
 * useVisualMode return object
 * @typedef     {Object}      VisualMode
 * @property    {String}      mode - The current visual mode
 * @property    {Transition}  transition - Transitions to the next visual mode
 * @property    {Back}        back - goes back to the previous 
 */
