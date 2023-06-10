import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/menu';
import './styles.css';

export const GameView = ({ setGameStarted, setAmount, time, amount }) => {
  // const [time, setTime] = useState(0);

  // wykomentowany bo odnoszenie sie do tego modułu w innych komponentach (kuzynach) bedzie problematyczne.

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setTime(time + 1);
  //   }, 1000);
  //   return () => clearTimeout(timeoutId);
  // }, [time]);

  return (
    <>
      <Menu label="Czas Gry:">
        <Button isDisabled={true}>{time}</Button>
      </Menu>

      <Menu label="Ilość Ruchów:">
        <Button isDisabled={true}>{amount}</Button>
      </Menu>

      <Menu label="Przycisk Sterujący:">
        <Button
          onClick={() => {
            setGameStarted(false);
            setAmount(0);
          }}
        >
          {' '}
          STOP
        </Button>
      </Menu>
    </>
  );
};
