// src/components/InterviewerList/index.js
import React from 'react';

import Item from './Item';

import './InterviewerList.scss';


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];


/**
 * 
 * @param {Object} props
 * @param {Array.<{id: Number, name: String, avatar: String}>} props.interviewers - array of interviewers
 * @param {Function(id: Number)} setInterviewer - callback for selecting the interviewer
 * @param {Number} interviewer - id of the currently selected interviewer
 * @returns React Component
 */
const InterviewerList = (props) => {

  return (
    <div>
    </div>
  );
};

export default Object.assign(InterviewerList, {
  Item
});
