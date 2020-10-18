import React from 'react';
import { createUseStyles } from 'react-jss';

const usetStyles = createUseStyles({
  page: {
    overflow: 'hidden',
    height: '100vh',
  },

  navbar: {
    height: '5rem',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    fontSize: '2em',
    boxShadow:
      '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
    paddingLeft: '1rem',
  },
});

const Page = ({ children }) => {
  const classes = usetStyles();

  return (
    <div className={classes.page}>
      <div className={classes.navbar}>
        <div>Concept Corner</div>
      </div>
      {children}
    </div>
  );
};

export default Page;
