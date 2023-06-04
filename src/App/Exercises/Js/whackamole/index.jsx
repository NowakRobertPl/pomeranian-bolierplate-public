import './styles.css';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { Playground } from './Playground/Playground';
import { useState, useEffect } from 'react';
import { Result } from './Result/Result';

export function Whackamole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [initialTime, setInitialTime] = useState(time);

  useEffect(() => {
    time === 0 && setGameStarted(false);
  }, [time]);

  return (
    <div className="hit-the-mole">
      <h4>Whack-a-mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
          time={time}
          setTime={setTime}
        />
      ) : (
        <MenuView
          setTime={setTime}
          time={time}
          setGameStarted={setGameStarted}
          isGameStarted={isGameStarted}
          setInitialTime={setInitialTime}
          initialTime={initialTime}
          score={score}
          setScore={setScore}
        />
        //
      )}

      <div>
        {isGameStarted && <Playground score={score} setScore={setScore} />}
      </div>
    </div>
  );
}
