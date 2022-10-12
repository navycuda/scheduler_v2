// src/components/Appointment/Form.js
// @ts-check
import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

/**
 * Form component used for edit and create
 * @param     {Object}    props
 * @param     {String}    props.student - Name of the student
 * @param     {Array.<Interviewer>} props.interviewers - Array of interviewer objects 
 * @param     {Number}    props.interviewer - The selected interviewer
 * @param     {Function}  props.onSave - Save to database
 * @param     {Function}  props.onCancel - Cancel this form and return
 */
const Form = (props) => {
  const [ student, setStudent ] = useState(props.student || "");
  const [ interviewer, setInterviewer ] = useState(props.interviewer || null);
  const placeholder = student ? null : "Enter Student Name";

  // Handles the onChange of the intput and sets the student name
  const inputHandler = (e) => {
    setStudent(e.target.value);
  }

  // Resets all the values to zero, then cancels the Form
  const reset = () => {
    setStudent("");
    setInterviewer(null);
    props.onCancel();
  }

  const save = () => {
    props.onSave(student, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form 
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
          >
          <input
            className="appointment__create-input text--semi-bold"
            name={student}
            type="text"
            placeholder={placeholder}
            value={student}
            onChange={inputHandler}
            data-testid="student-name-input"
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
            danger
            onClick={reset}
            >
            Cancel
          </Button>
          <Button
            confirm
            onClick={save}
            >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
