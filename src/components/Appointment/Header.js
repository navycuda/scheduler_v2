// src/components/Appointment/Header.js
import React from 'react';

/**
 * 
 * @param {Object} props
 * @param {String} props.time - the time of the appointment "12pm" 
 * @returns React Component
 */
const Header = (props) => {

  return (
    <header
      className="appointment__time"
    >
      <h4
        className="text--semi-bold"
        >
        {props.time}
      </h4>
      <hr 
        className="appointment__separator"
        />
    </header>
  );
};

export default Header;
