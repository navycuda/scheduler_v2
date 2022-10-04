// src/components/DayList/Item.js
import React from 'react';

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
  
  const handleDay = () => {
    setDay(name);
  }
  
  return (
    <li
      onClick={handleDay}
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
