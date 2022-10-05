// src/components/Appointment/Form.js
import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

/**
 * 
 * @param {Object} props
 * @param {String} props.student - Name of the student
 * @param {Array.<{id: Number, name: String, avatar: String}>} props.interviewers - Array of interviewer objects 
 * @param {Number} props.interviewer - The selected interviewer
 * @param {Function} props.onSave - Save to database
 * @param {Function} props.onCancel - Cancel this form and return
 * @returns React Component
 */
const Form = (props) => {
  const [ student, setStudent ] = useState(props.student || "");
  const [ interviewer, setInterviewer ] = useState(props.interviewer || null);
  const placeholder = student ? null : "Enter Student Name";


  const inputHandler = (e) => {
    setStudent(e.target.value);
  }

  const reset = () => {
    setStudent("");
    setInterviewer(null);
    props.onCancel();
  }

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
            onClick={props.onSave}
            >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
