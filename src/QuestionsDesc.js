import React, { useState, useEffect } from 'react';

import Tags from './Tags';

const QuestionTitle = ({ children }) => (
  <a href="/api/question/1">
    <h3>{children}</h3>
  </a>
);

const User = ({ user }) => {
  return (
    <div>
      <img src={user.avatarUrl} alt="Avatar" />
      <p>{user.username}</p>
    </div>
  );
};

const QuestionDesc = (props) => {
  return (
    <div>
      <QuestionTitle>{props.title}</QuestionTitle>
      <div style={{ display: 'flex' }}>
        <div>
          <Tags tags={props.tags} />
          <div style={{ display: 'flex' }}>
            <p>{props.time}</p>
            <p>{props.answers.length} Answer(s)</p>
          </div>
        </div>
        <User user={props.user} />
      </div>
    </div>
  );
};

const QuestionsDesc = () => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch('/api/question/')
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  return (
    <div>
      {questions
        ? questions.map((question) => (
            <QuestionDesc key={question.id} {...question} />
          ))
        : null}
    </div>
  );
};

export default QuestionsDesc;
