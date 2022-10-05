// src/components/InterviewerList/index.js
import React from 'react';
import classNames from 'classnames';

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
 * @param {Function(id: Number)} props.setInterviewer - callback for selecting the interviewer
 * @param {Number} props.interviewer - id of the currently selected interviewer
 * @returns React Component
 */
const InterviewerList = (props) => {
  const selectedInterviewer = props.interviewer;

  const getInterviewers = interviewers.map((interviewer) => {
    return (
      <Item 
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === selectedInterviewer}
        setInterviewer={() => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return (
    <section
      className="interviewers"
    >
      <h4
        className="interviewers__header text--light"
      >
        Interviewer
      </h4>
      <ul
        className="interviewers__list"
      >
        {getInterviewers}
      </ul>
    </section>
  );
};

export default Object.assign(InterviewerList, {
  Item
});
