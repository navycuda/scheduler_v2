// src/helpers/hooks/useVisualMode.js
// @ts-check
import { useState } from "react";

/**
 *
 * @param     {String}    initial - The inital mode to set
 */
const useVisualMode = (initial) => {
  const [ mode, setMode ] = useState(initial);

  
  /**
   * Transition function, part of useVisualMode custom hook
   * @param     {String}    nextMode - new visual mode to set
   */
  const transition = (nextMode) => {
    setMode(nextMode);
  };

  /**
   * Back function, part of useVisualMode custom hook, used to
   * return to the previous view
   */


  return { mode, transition };
};

export default useVisualMode;