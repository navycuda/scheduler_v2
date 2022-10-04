// src/components/DayList/index.js
import React from 'react';

import Item from './Item';

/**
 * 
 * @param {Object} props
 * @property {String} day - the currently selected Day
 * @property {Array.<{id: Number, name: String, spots: Number}>} days - Array of day objects
 * @property {Function} setDay - sets the currectly selected day and accepts the name of the day
 * @returns react component
 */
const DayList = ({
  day,
  days,
  setDay
  }) => {

  return (
    <ul>
    </ul>
  );
};

export default Object.assign(DayList, {
  Item
});
