// src/components/InterviewerList/Item.js
import React from 'react';

import classNames from 'classnames';

import './InterviewerList.scss';

/**
 * 
 * @param {Object} props
 * @property {Number} id - the id of the interviewer
 * @property {String} name - the name of the interviewer
 * @property {String} avatar - url of the interviewer avatar
 * @property {Boolean} selected - is this item selected?
 * @property {Function} setInterviewer - onClick event handler
 * @returns React Component
 */
const Item = (props) => {
  const classes = classNames("interviewers__item",
  {
    "interviewers__item--selected": props.selected
  });


  return (
    <li
      className={classes}
      onClick={props.setInterviewer}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      { props.selected &&
        props.name
      }
    </li>
  );
};

export default Item;
