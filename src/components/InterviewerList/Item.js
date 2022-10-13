// src/components/InterviewerList/Item.js
import React from 'react';

import classNames from 'classnames';

import './InterviewerList.scss';

/**
 * An interviewer
 * @param     {Object}    props
 * @param     {Number}    props.id - the id of the interviewer
 * @param     {String}    props.name - the name of the interviewer
 * @param     {String}    props.avatar - url of the interviewer avatar
 * @param     {Boolean}   props.selected - is this item selected?
 * @param     {Function}  props.setInterviewer - onClick event handler
 */
const Item = (props) => {
  const classes = classNames("interviewers__item",
  {
    "interviewers__item--selected": props.selected
  });

  console.log("Interviewer.Item : props", props);

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
