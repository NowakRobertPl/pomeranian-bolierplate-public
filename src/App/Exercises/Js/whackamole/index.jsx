import './styles.css';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { Playground } from './Playground/Playground';
import { useState } from 'react';

export function Whackamole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [czas, setCzas] = useState(0);
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
          czas={czas}
          setCzas={setCzas}
        />
      ) : (
        <MenuView setGameStarted={setGameStarted} />
      )}

      <div>
        {/* <ResultView result={result} /> */}
        {isGameStarted && <Playground score={score} setScore={setScore} />}
      </div>
    </div>
  );
}
