import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Moment from 'react-moment';

const useStyles = createUseStyles({
  answer: {
    width: '75%',
    boxShadow:
      '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
    backgroundColor: 'white',
    padding: '3rem',
    margin: '2rem auto',
    boxSizing: 'border-box',
    borderRadius: 5,
  },

  postAnswerTitle: {
    fontWeight: '150',
    borderBottom: '1px solid #e7e7e7',
    padding: '0.5rem',
    marginTop: '5rem',
    marginBottom: '2rem',
  },

  postAnswerTextArea: {
    width: '100%',
    height: '20rem',
    padding: '1rem',
    fontSize: '20px',
    resize: 'none',
  },

  postButton: {
    border: '1px solid black',
    cursor: 'pointer',
    height: '3rem',
    width: '8rem',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: '2rem 0',
  },
});

const PostAnswer = ({ questionId, onPost }) => {
  const classes = useStyles();
  const [description, setDescription] = useState('');

  const postAnswer = () => {
    const desc = description;

    if (desc) {
      fetch('/api/answer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: desc,
          questionId,
          userId: 1,
        }),
      }).then(() => {
        setDescription('');
        onPost();
      });
    }
  };

  return (
    <div style={{ margin: '0 auto', width: '75%' }}>
      <h1 className={classes.postAnswerTitle}>Post your answer</h1>
      <textarea
        className={classes.postAnswerTextArea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={classes.postButton} onClick={postAnswer}>
        Post Answer
      </button>
    </div>
  );
};

const Answer = ({ description, user, votes, time }) => {
  const classes = useStyles();

  return (
    <div className={classes.answer}>
      <p style={{ marginBottom: '5rem' }}>{description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ color: '#c2c2c2' }}>
          <Moment fromNow>{time}</Moment>
        </p>
        <p style={{ color: '#33b9e2' }}>{user.username}</p>
      </div>
      {/* <div style={{ display: 'flex' }}>
        <div>Up {votes.filter((vote) => vote.vote === 'up').length}</div>
        <div>Down {votes.filter((vote) => vote.vote === 'down').length}</div>
      </div> */}
    </div>
  );
};

const Answers = ({ questionId }) => {
  const [answers, setAnswers] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(`/api/answer/${questionId}`)
      .then((res) => res.json())
      .then(setAnswers);
  }, [toggle]);

  return (
    <div>
      <h2 style={{ margin: '2rem 14rem', fontWeight: '150' }}>
        {answers ? answers.length : 0} Answer(s)
      </h2>
      <div>
        {answers
          ? answers.map((answer) => <Answer {...answer} key={answer.id} />)
          : null}
      </div>
      <PostAnswer
        questionId={questionId}
        onPost={() => setToggle((toggle) => !toggle)}
      />
    </div>
  );
};

export default Answers;
