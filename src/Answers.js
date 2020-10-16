import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Description = ({ children }) => <p>{children}</p>;

const Answer = ({ description, user, votes }) => (
  <div>
    <Description>{description}</Description>
    <p>{user.username}</p>
    <div style={{ display: 'flex' }}>
      <div>Up {votes.filter((vote) => vote.vote === 'up').length}</div>
      <div>Down {votes.filter((vote) => vote.vote === 'down').length}</div>
    </div>
  </div>
);

const Answers = ({ questionId }) => {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    fetch(`/api/answer/${questionId}`)
      .then((res) => res.json())
      .then(setAnswers);
  }, []);

  return (
    <div>
      <p>{answers ? answers.length : 0} Answer(s)</p>
      <div>
        {answers
          ? answers.map((answer) => <Answer {...answer} key={answer.id} />)
          : null}
      </div>
    </div>
  );
};

export default Answers;
