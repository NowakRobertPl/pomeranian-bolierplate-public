import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/menu';
import { useEffect, useState } from 'react';

export const GameView = ({
  setGameStarted,
  score,
  setScore,
  options,
  setTime,
  time,
}) => {
  //licznik czasu

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

  useEffect(() => {
    if (time == 0) {
      setGameStarted(false);
    }
  }, [time]);

  //Karolajna!
  //   const [count,setCount]=useState(60);
  //   useEffect(()=>{setInterval(()=>)setCount((count) ->(count>0?count -1;'0'));
  // },1000);
  // },[count]);

  return (
    <>
      <Menu label="Czas do końca:">
        <Button className="menu-label">{time}</Button>
      </Menu>
      <Menu label="Wynik:">
        <Button className="value-field">{score}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setTime(0);
            // setScore(0);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
