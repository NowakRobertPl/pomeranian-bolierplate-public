import './styles.css';
import { useState, useEffect } from 'react';
import { Playground } from './Playground/Playground';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';

export function MemoryGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState();
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [amount, setAmount] = useState(0);
  const [isGameEnded, setGameEnded] = useState(false);
  const [myTime, setMyTime] = useState(0);

  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        return setTime((prev) => prev + 1);
      }, 1000);

      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTime(0);
    }
  }, [isGameStarted]);

  //snippet z whackamole
  //   const timeoutId =, setTimeInterval setTimeout(() => {
  //     setTime(time + 1);
  //   }, 1000);
  // }
  //   return () => clearTimeout(timeoutId);
  // }, [isGameStarted, time]);

  return (
    <div className="memoryGameMain">
      <h4>Memory Game</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          time={time}
          amount={amount}
          setAmount={setAmount}
        />
      ) : (
        <MenuView
          setAmount={setAmount}
          setGameStarted={setGameStarted}
          setBoardSize={setBoardSize}
          myTime={myTime}
          amount={amount}
          isGameEnded={isGameEnded}
          boardSize={boardSize}
          isGameStarted={isGameStarted}
        />
      )}
      {isGameStarted && (
        <Playground
          boardSize={boardSize}
          amount={amount}
          setAmount={setAmount}
          isGameEnded={isGameEnded}
          setGameEnded={setGameEnded}
          time={time}
          setGameStarted={setGameStarted}
          setTime={setTime}
          myTime={myTime}
          setMyTime={setMyTime}
        />
      )}
    </div>
  );
}
