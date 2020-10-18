import React from 'react';
import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';

import Page from '../components/Page';
import Question from '../components/Question';
import Answers from '../components/Answers';

const useStyles = createUseStyles({
  question: {
    overflow: 'scroll',
    height: '90%',
  },

  border: { width: '80%', margin: '0 auto' },
});

const QuestionPage = () => {
  const classes = useStyles();
  const { questionId } = useParams();

  return (
    <Page>
      <div className={classes.question}>
        <Question id={questionId} />
        <hr className={classes.border} />
        <Answers questionId={questionId} />
      </div>
    </Page>
  );
};

export default QuestionPage;
