// src/components/Appointment/index.js
import React from 'react';

import Empty from './Empty';
import Header from './Header';
import Show from './Show';
import Form from './Form';
import Confirm from './Confirm';
import Status from './Status';
import Error from './Error';
import views from './views';

import './Appointment.scss';

/**
 * The component that displays the appointment details
 * @param     {Object}    props
 * @param     {Number}    props.id - the id of this appointment
 * @param     {String}    props.time - the appointment time
 * @param     {Object}    props.interview - object with interview parameters
 */
const Appointment = (props) => {
  return (
    <article
      className="appointment"
    >
      <Header 
        time={props.time}
      />
      { props.interview &&
        <Show 
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      }
      { !props.interview &&
        <Empty />
      }
    </article>
  );
};

export default Object.assign(Appointment, {
  views,
  Header,
  Empty,
  Show,
  Form,
  Confirm,
  Status,
  Error
});