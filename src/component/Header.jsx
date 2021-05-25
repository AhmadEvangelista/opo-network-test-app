import React from 'react';

const Header = () => {
  return (
    <div style={styles.div}>
      <a style={styles.aTag} href='/todoform'>
        To-Do Form
      </a>
      {'|'}
      <a style={styles.aTag} href='/todolist'>
        To-Do List
      </a>
      {'|'}
      <a style={styles.aTag} href='/displaydata'>
        Display Data
      </a>
    </div>
  );
};
const styles = {
  div: {
    display: 'inline-block',
    justifyContent: 'space-between',
    justifyItems: 'space-between',
    alignItems: 'space-between',
  },
  aTag: {
    textDecoration: 'none',
  },
};
export default Header;
