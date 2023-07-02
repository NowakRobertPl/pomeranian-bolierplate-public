import React, { useEffect, useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from '../../../../Store/Slices/counterSlice';

export function JakisKomponent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [decrementValue, setDecrementValue] = useState('1');

  const handleDecVal = () => {
    dispatch(decrementByValue(Number(decrementValue)));
  };
  const handleDecByVal = (e) => {
    const value = e.target.value;
    setDecrementValue(value);
  };
  return (
    <div>
      <input onChange={handleDecByVal} type="text" value={decrementValue} />
      <button onClick={handleDecVal}>Odejmij{decrementValue}</button>
    </div>
  );
}
