import './styles.css';
// import { useState } from 'react';

export const Button = ({ children, isActive, onClick }) => {
  const highlightClass = 'button-active';

  const buttonClasses = 'button' + highlightClass;

  return (
    <button
      // SHORTHAND JS IN REACT
      className={`button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
