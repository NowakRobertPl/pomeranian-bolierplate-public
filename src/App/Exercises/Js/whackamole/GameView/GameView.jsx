import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/menu';
import { useEffect, useState } from 'react';

const koniecGry = ({ counter, setCounter }) => {
  setCounter(counter);
};

export const GameView = ({
  setGameStarted,
  score,
  setScore,
  czas,
  setCzas,
}) => {
  //licznik czasu

  const [counter, setCounter] = useState(2);

  const koniecGry = () => {
    counter = 0 ? setGameStarted(false) : '';
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      counter > 0 && setCounter(counter - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [counter]);

  //Karolajna!
  //   const [count,setCount]=useState(60);
  //   useEffect(()=>{setInterval(()=>)setCount((count) ->(count>0?count -1;'0'));
  // },1000);
  // },[count]);

  return (
    <>
      <Menu label="Czas do końca:">
        <Button className="menu-label">{counter}</Button>
      </Menu>
      <Menu label="Wynik:">
        <Button className="value-field">{score}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
            setCzas(0);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
