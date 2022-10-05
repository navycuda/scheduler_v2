// src/components/DayList/Item.js
import React from 'react';

import classNames from 'classnames';

import './DayListItem.scss';

/**
 * The Day item that is used in day list
 * @param     {Object}    props
 * @param     {String}    props.name - name of the day
 * @param     {Number}    props.spots - the number of spots remaining
 * @param     {Boolean}   props.selected - is this day selected
 * @param     {Function}  props.setDay - accepts the name of the day
 */
const Item = (props) => {
  // Sets the class names according to props
  const classes = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const handleDay = () => {
    setDay(props.name);
  }

  const formatSpots = () => {
    if (props.spots === 0) {
      return 'no spots remaining'
    }
    return props.spots > 1 ? `${props.spots} spots remaining` : '1 spot remaining';
  }
  
  return (
    <li
      onClick={handleDay}
      className={classes}
      >
      <h2
        className="text--regular"
        >
        {props.name}
      </h2>
      <h3
        className="text--light"
        >
        {formatSpots()}
      </h3>
    </li>
  );
};

export default Item;
