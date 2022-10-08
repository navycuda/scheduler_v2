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

import { useVisualMode } from 'helpers/hooks';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

/**
 * The component that displays the appointment details
 * @param     {Object}        props
 * @param     {Number}        props.id - the id of this appointment
 * @param     {String}        props.time - the appointment time
 * @param     {Interview}     props.interview - object with interview parameters
 */
const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  return (
    <article
      className="appointment"
    >
      <Header 
        time={props.time}
      />
      { mode = EMPTY  &&
        <Empty 
          onAdd={() => transition(CREATE)}
        />
      }
      { mode === SHOW &&
        <Show 
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
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