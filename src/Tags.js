import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div style={{ display: 'flex' }}>
      {tags.map((tag, idx) => (
        <div key={idx}>{tag.tagName}</div>
      ))}
    </div>
  );
};

export default Tags;
