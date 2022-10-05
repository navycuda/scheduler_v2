// src/components/Appointment/Empty.js
import React from 'react';


/**
 * 
 * @param {Object} props
 * @param {Function} props.onAdd - add a new appointment 
 * @returns React Component
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
