// src/components/Appointment/Form.js
import React from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

/**
 * 
 * @param {Object} props
 * @param {String} student - Name of the student
 * @param {Array.<{id: Number, name: String, avatar: String}>} interviewers - Array of interviewer objects 
 * @param {Number} interviewer - The selected interviewer
 * @param {Function} props.onSave - Save to database
 * @param {Function} props.onCancel - Cancel this form and return
 * @returns React Component
 */
const Form = (props) => {

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
              your code goes here
            */
          />
        </form>
        <InterviewerList 
          /* your code goes here */
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger {/* your code goes here */}>Cancel</Button>
          <Button confirm {/* your code goes here */}>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
