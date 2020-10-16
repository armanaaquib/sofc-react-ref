import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Tags from './Tags';

const Description = ({ children }) => <p>{children}</p>;

const Question = ({ id }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch(`/api/question/${id}`)
      .then((res) => res.json())
      .then(setQuestion);
  }, []);

  return question ? (
    <div>
      <h2>{question.title}</h2>
      <Description>{question.description}</Description>
      <Tags tags={question.tags} />
      <p>{question.user.username}</p>
    </div>
  ) : null;
};

export default Question;
