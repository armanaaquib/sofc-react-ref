import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tags: {
    display: 'flex',
    margin: '1.5rem 0',
  },
  tag: {
    'font-size': 18,
    backgroundColor: '#c9f1fd',
    marginRight: '0.5rem',
    padding: '0.2rem',
    'border-radius': 3,
  },
});

const Tags = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.tags}>
      {tags.map((tag, idx) => (
        <div className={classes.tag} key={idx}>
          {tag.tagName}
        </div>
      ))}
    </div>
  );
};

Tags.prototype = {
  tags: PropTypes.array,
};

Tags.defaultProps = {
  tags: [],
};

export default Tags;
