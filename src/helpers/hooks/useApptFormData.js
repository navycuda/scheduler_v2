// src/helpers/hooks/useApptFormData.js
// @ts-check
import { useState } from "react";


const emptyState = {
  student: "",
  interviewer: null,
  error: "",
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

  const setError = (msg) => {
    setState((previous) => {
      return {
        ...previous,
        error: msg
      };
    });
  };

  /**
   * @type {Save}
   */
  const save = () => {
    if (validate()) {
        state.onSave(state.student, state.interviewer);
    }
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


  const validate = () => {
    if (!state.student) {
      setError("student name cannot be blank");
      return false;
    }else if (!state.interviewer) {
      setError("please select an interviewer");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  return {
    student:  state.student,
    setStudent,
    interviewer: state.interviewer,
    setInterviewer,
    save,
    reset,
    inputHandler,
    placeholder: "Enter Student Name",
    error: state.error
  };
};

export default useApptFormData;