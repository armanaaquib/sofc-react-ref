import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Moment from 'react-moment';

import Tags from './Tags.jsx';

const useStyles = createUseStyles({
  question: {
    width: '75%',
    boxShadow:
      '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
    backgroundColor: 'white',
    padding: '1rem',
    paddingRight: '3rem',
    margin: '2rem auto',
    boxSizing: 'border-box',
    borderRadius: 5,
  },
});

const Question = ({ id }) => {
  const [question, setQuestion] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    fetch(`/api/question/${id}`)
      .then((res) => res.json())
      .then(setQuestion);
  }, []);

  return question ? (
    <div className={classes.question}>
      <h2 style={{ borderBottom: '1px solid #e7e7e7', padding: '0.5rem' }}>
        {question.title}
      </h2>
      <div style={{ padding: '2rem' }}>
        <p>{question.description}</p>
        <Tags tags={question.tags} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: '#c2c2c2' }}>
            <Moment fromNow>{question.time}</Moment>
          </p>
          <p style={{ color: '#33b9e2' }}>{question.user.username}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Question;
