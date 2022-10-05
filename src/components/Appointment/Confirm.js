// src/components/Appointment/Confirm.js
import React from 'react';

import Button from 'components/Button';

/**
 * Confirm user action component
 * @param     {Object}    props
 * @param     {String}    props.message - Confirmation message
 * @param     {Function}  props.onConfirm - called when the confirm button is clicked
 * @param     {Function}  props.onCancel - called when the cancel button is clicked 
 */
const Confirm = (props) => {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button 
          danger
          onClick={props.onCancel}
          >
          Cancel
        </Button>
        <Button 
          danger
          onClick={props.onConfirm}
          >
          Confirm
        </Button>
      </section>
    </main>
  );
};

export default Confirm;
