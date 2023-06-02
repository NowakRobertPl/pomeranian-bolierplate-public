import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/menu';

let czas = '3';

export const GameView = ({ setGameStarted, score, setScore }) => {
  return (
    <>
      <Menu label="Czas do końca:">
        <Button className="menu-label">{czas}</Button>
      </Menu>
      <Menu label="Wynik:">
        <Button className="value-field">{score}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
