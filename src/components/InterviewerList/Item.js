// src/components/InterviewerList/Item.js
import React from 'react';

import './InterviewerList.scss';

/**
 * 
 * @param {Object} props
 * @property {Number} id - the id of the interviewer
 * @property {String} name - the name of the interviewer
 * @property {String} avatar - url of the interviewer avatar 
 * @returns React Component
 */
const Item = (props) => {

  return (
    <li
      className="interviewers__item"
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
    </li>
  );
};

export default Item;
