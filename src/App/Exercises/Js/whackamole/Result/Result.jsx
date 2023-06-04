import './styles.css';
import { useState } from 'react';

export const Result = ({ score, time, initialTime }) => {
  return (
    <h3>
      Twój wynik to {score} punktów w czasie {initialTime} sekund
    </h3>
  );
};
