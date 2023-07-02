// redux, store, slice : sprawdz na redux toolkit get it started

import React from 'react';
import { useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
} from '../../../../Store/Slices/counterSlice';
import { JakisKomponent } from './JakisKomponent';
// export function Exercise() {
//   // const testValue = useSelector((state) => {
//   //   console.log(state, 'store aplikacji w cwiczenie Reduxa');
//   //   return state?.storeTest?.value ?? 'Not working';
//   // });
//   return (
//     <div>
//   {/* //     <p>REDUX</p>
//   //     <div>{testValue} - yay wyświetlam stan naszego Store'a</div> */}
//   //   </div>
//   );
// }

export function Exercise() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [incrementValue, setIncrementValue] = useState('1');

  const handleAdd = () => dispatch(increment());
  const handleDec = () => dispatch(decrement());
  const handleSubVal = () => {
    dispatch(incrementByValue(Number(incrementValue)));
  };
  const handleIncByVal = (event) => {
    const value = event.target.value;

    setIncrementValue(value);
  };
  return (
    <div>
      <div>Nasz count: {count}</div>
      <button onClick={handleAdd}>Dodaj</button>
      <button onClick={handleDec}>Odejmij</button>
      <input onChange={handleIncByVal} type="text" value={incrementValue} />
      <button onClick={handleSubVal}>Dodaj {incrementValue} </button>

      <JakisKomponent />
    </div>
  );
}
