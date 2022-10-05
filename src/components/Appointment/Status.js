// src/components/Appointment/Status.js
import React from 'react';

/**
 * This component shows status/loading of an inprogress operation
 * @param     {Object} props
 * @param     {String} props.message 
 */
const Status = (props) => {
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>
  );
};

export default Status;
