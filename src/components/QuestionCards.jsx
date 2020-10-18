import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Moment from 'react-moment';

import Tags from './Tags.jsx';

const useStyles = createUseStyles({
  questionCards: {
    overflow: 'scroll',
    height: '90%',
  },

  questionCard: {
    backgroundColor: 'white',
    width: '60%',
    padding: '1rem',
    paddingRight: '3rem',
    margin: '2rem auto',
    boxSizing: 'border-box',
    borderRadius: 5,
    boxShadow:
      '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
  },

  qDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%',
  },
});

const QuestionTitle = ({ children, questionId }) => (
  <a
    href={`/question/${questionId}`}
    style={{ textDecoration: 'none', color: 'black' }}
  >
    <h2 style={{ fontWeight: '400' }}>{children}</h2>
  </a>
);

const QuestionCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.questionCard}>
      <QuestionTitle questionId={props.id}>{props.title}</QuestionTitle>
      <Tags tags={props.tags} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={classes.qDetail}>
          <Moment fromNow>
            <p>{props.time}</p>
          </Moment>
          <p>{props.answers.length} Answer(s)</p>
        </div>
        <div>
          <p>{props.user.username}</p>
        </div>
      </div>
    </div>
  );
};

const QuestionCards = () => {
  const [questions, setQuestions] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch('/api/question/')
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  return (
    <div className={classes.questionCards}>
      {questions
        ? questions.map((question) => (
            <QuestionCard key={question.id} {...question} />
          ))
        : null}
    </div>
  );
};

export default QuestionCards;
