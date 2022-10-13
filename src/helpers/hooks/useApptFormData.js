// src/helpers/hooks/useApptFormData.js
// @ts-check
import { useState } from "react";


const emptyState = {
  student: "",
  interviewer: null
};
/**
 * @type {UseApptFormData}
 */
const useApptFormData = () => {
const [ state, setState ] = useState(emptyState);

  /**
   * @type {SetStudent}
   */
  const setStudent = () => {

  };

  /**
   * @type {SetInterviewer}
   */
  const setInterviewer = () => {

  };

  /**
   * @type {Save}
   */
  const save = () => {

  };

  /**
   * @type {Reset}
   */
  const reset = () => {

  };

  /**
   * @type {InputHandler}
   */
  const inputHandler = () => {

  };


  return {
    student:  state.student,
    setStudent,
    interviewer: state.interviewer,
    setInterviewer,
    save,
    reset,
    inputHandler
  };
};

export default useApptFormData;