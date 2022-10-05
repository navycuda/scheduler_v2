// src/components/Appointment/Show.js
import React from 'react';

/**
 * 
 * @param {Object} props
 * @param {String} props.student - Full name of student
 * @param {{id: Number, name: String, avatar: String}} props.interviewer - Interviewer object
 * @param {Function} props.onEdit - called when the edit button is pressed
 * @param {Function} props.onDelete - called when the delete butoon is pressed
 * @returns React Component
 */
const Show = (props) => {

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{props.student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{props.interviewer.name}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section>
      </section>
    </main>
  );
};


export default Show;
