import './styles.css';
import { Menu } from './Menu/menu';
import { Button } from './Button/Button';
import { GameView } from './GameView/GameView';
import { Playground } from './Playground/Playground';
import { useState } from 'react';

export function Whackamole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  // function TabelaMenu() {
  //   <></>;
  // }
  // function TabelaGry() {
  //   <></>;
  // }

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
        />
      ) : (
        <>
          <div className="menu">
            <div className="menu-label">Czas Gry</div>
            <button className="przycisk">1 minuta</button>
            <button className="przycisk">2 minuty</button>
            <button className="przycisk">3 minuty</button>
          </div>

          {/* propsy!! importowane z Menu/menu.jsx */}
          <Menu label={'Ilość Kretów'}>
            <Button>1 kret</Button>
            <Button>2 krety</Button>
            <Button>3 krety</Button>
          </Menu>

          {/* <div className="menu">
        <div className="menu-label">Przyciski Sterujące</div>
        <Button>ROZPOCZNIJ GRĘ</Button>
      </div> */}
          {/* v2.0 */}
          <Menu label="{Przyciski sterujące">
            <Button onClick={() => setGameStarted(true)}>Start</Button>
          </Menu>
        </>
      )}

      <div>
        <GameView></GameView>
      </div>
      <div>
        {/* <ResultView result={result} /> */}
        {isGameStarted && <Playground score={score} setScore={setScore} />}
      </div>

      {/* <div>
        <Playground/>
      </div> */}
    </div>
  );
}
