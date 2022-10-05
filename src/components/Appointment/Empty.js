// src/components/Appointment/Empty.js
import React from 'react';

/**
 * This componenet is displayed when no appointment is booked
 * @param     {Object}    props
 * @param     {Function}  props.onAdd - add a new appointment 
 */
const Empty = (props) => {
  return (
    <main 
      className="appointment__add"
    >
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;
