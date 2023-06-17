import { useEffect, useState } from 'react';
import './styles.css';

export function JsPromisesExercise2({
  parameterToEffect,
  personalData,
  apiData,
}) {
  const [getState, setState] = useState(null);
  const [wezStan, ustStan] = useState('');
  const [getCount, setCount] = useState(0);

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 5000);
    });

    myPromise
      .then((result) => {
        ustStan(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getCount]);

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

  function logPromiseState(promise) {
    promise
      .then(() => {
        //success
        console.log('Stan:fulfilled');
        console.log('Promise zakończony suckesem');
      })
      .catch(() => {
        //failed
        console.log('Stan:rejected');
        console.log('Promise zakończony błędem');
      })
      .finally(() => {
        //nevertheless I will do this:
        console.log('Stan:');
        console.log('Promise zakończony');
      });
  }

  const myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const random = Math.random();

      if (random < 0.5) {
        resolve();
      } else {
        rejected();
      }
    }, 2000);
  });

  //POTWÓR FRANKNSTEINA!!!

  // function Obietnica(promise) {
  //   promise
  //   .then(() => {
  //     //success
  //     console.log('Stan:fulfilled');
  //     console.log('Promise zakończony suckesem');
  //   })

  //   setTimeout(() => {
  //     const warunek =

  //     return ("Udało się") => {
  //       clearInterval(timer);
  //     }
  //   },5000)
  // }

  const handleIncrementing = () => setCount(getCount + 1);

  return (
    <div className="playing-with-js-promises">
      <button onClick={handleIncrementing}> Click Me!</button>
      <p>123{wezStan}</p>
    </div>
  );
}
