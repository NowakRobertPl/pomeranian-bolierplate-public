import { useEffect, useState } from 'react';
import './styles.css';

export function JsPromisesExercise({
  parameterToEffect,
  personalData,
  apiData,
}) {
  const [getState, setState] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Wykonuje operacje cykliczną.');
    }, 5000);

    //cleanup function inside useEffect
    return () => {
      clearInterval(timer);
      console.log('zatrzymaj operacje cykliczną ... wykonuje clean up');
    };
    //to possible option in useEffect array of dependencies to kick useEffect and cause rerender of the Component
  }, [parameterToEffect, getState]);

  return <div className="playing-with-js-promises"> </div>;
}
