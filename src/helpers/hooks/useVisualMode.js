// src/helpers/hooks/useVisualMode.js
// @ts-check
import { useState } from "react";

/**
 * The useVisualModeCustomHook
 * @param     {String}    initial - The inital mode to set
 * @returns   {VisualMode}
 */
const useVisualMode = (initial) => {
  const [ history, setHistory ] = useState([initial]);

  /**
   * @type    {Transition}
   */
  const transition = (nextMode, isReplacingPrevious) => {
    setHistory((previous) => isReplacingPrevious ? 
    [...previous.slice(0, previous.length - 1), nextMode]
    :
    [...previous, nextMode]
    );
  };

  /**
   * @type   {Back}
   */
  const back = () => {
    setHistory((previous) => {
      if (previous.length < 2) return previous;
      return previous.slice(0, previous.length - 1)
    });
  };

  return { mode:history[history.length - 1], transition, back };
};

export default useVisualMode;