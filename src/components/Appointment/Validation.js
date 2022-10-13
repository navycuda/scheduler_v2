// src/components/Appointment/Validation.js
// @ts-check
import React from 'react';

/**
 * Use to display certain validation concerns
 * @param     {Object}    props
 * @param     {String}    props.message The message to display during validation
 */
const Validation = (props) => {
  return (
    <>
      { props.message &&
        <section
          className="appointment__validation"
        >
          {props.message}
        </section>
      }
    </>
  );
};

export default Validation;
