// src/components/DayList/Item.js
import React from 'react';

import classNames from 'classnames';

import './DayListItem.scss';

/**
 * 
 * @param {Object} props
 * @property {String} name - name of the day
 * @property {Number} sports - the number of spots remaining
 * @property {Boolean} selected - is this day selected
 * @property {Function} setDay - accepts the name of the day
 * @returns react component
 */
const Item = ({
  name,
  spots,
  selected,
  setDay
  }) => {
  
  const classes = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  const handleDay = () => {
    setDay(name);
  }
  
  return (
    <li
      onClick={handleDay}
      className={classes}
      >
      <h2
        className="text--regular"
        >
        {name}
      </h2>
      <h3
        className="text--light"
        >
        {spots} spots remaining
      </h3>
    </li>
  );
};

export default Item;
