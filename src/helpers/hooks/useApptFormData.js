// src/helpers/hooks/useApptFormData.js
// @ts-check
import { useState } from "react";


const emptyState = {
  student: "",
  interviewer: null,
  onSave: () => console.log(this)
};
/**
 * @type {UseApptFormData}
 */
const useApptFormData = (initial) => {
const [ state, setState ] = useState({...emptyState, ...initial});

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
    state.onSave(state.student, state.interviewer);
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