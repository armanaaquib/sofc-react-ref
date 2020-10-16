import React from 'react';

import Question from './Question';
import Answers from './Answers';

const QuestionPage = () => {
  return (
    <div>
      <Question id={1} />
      <Answers questionId={1} />
    </div>
  );
};

export default QuestionPage;
