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




  const save = () => {

  };

  const reset = () => {

  };

  const input = () => {

  };


  return {
    student:  state.student,
    interviewer: state.interviewer,
    save,
    reset,
    input
  };
};

export default useApptFormData;