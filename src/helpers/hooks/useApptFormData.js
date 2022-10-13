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
  const setStudent = (name) => {
    setState((previous) => {
      return {
        ...previous,
        student:name
      };
    });
  };

  /**
   * @type {SetInterviewer}
   */
  const setInterviewer = (id) => {
    setState((previous) => {
      return {
        ...previous,
        interviewer: id
      };
    });
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
    setStudent("");
    setInterviewer(null);
    state.onCancel();
  };

  /**
   * @type {InputHandler}
   */
  const inputHandler = (e) => {
    setStudent(e.target.value);
  };


  return {
    student:  state.student,
    setStudent,
    interviewer: state.interviewer,
    setInterviewer,
    save,
    reset,
    inputHandler,
    placeholder: "Enter Student Name"
  };
};

export default useApptFormData;