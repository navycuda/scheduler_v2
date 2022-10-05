// src/components/DayList/index.js
import React from 'react';

import Item from './Item';

/**
 * Combines Days into a list for display
 * @param     {Object}    props
 * @param     {String}    props.value - the currently selected Day
 * @param     {Array.<{id: Number, name: String, spots: Number}>} props.days - Array of day objects
 * @param     {Function}  props.onChange - sets the currectly selected day and accepts the name of the day
 */
const DayList = (props) => {
  console.log(props);
  // Build array of items for the DayList
  const dayList = props.days.map((d) => {
    return (
      <Item
        key={d.id}
        name={d.name}
        spots={d.spots}
        selected={d.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
};

export default Object.assign(DayList, {
  Item
});
