import './styles.css';
import { Menu } from '../Menu/menu';
import { Button } from '../Button/Button';
import { SelectButtonsMemo } from '../SelectButtons/SelectButtonsMEMO';

export const MenuView = ({
  setAmount,
  setGameStarted,
  setBoardSize,
  myTime,
  amount,
  isGameEnded,
  isGameStarted,
  boardSize,
}) => {
  return (
    <>
      {isGameEnded && !isGameStarted && (
        <p>
          Twój wynik to {boardSize / 2} znalezionych par w czasie {myTime}{' '}
          sekund i w {amount} ruchów.
        </p>
      )}
      <Menu label="Liczba Elementów: ">
        <SelectButtonsMemo
          setValue={setBoardSize}
          options={[
            { value: 8, label: '8 elementów', isActive: false },
            { value: 16, label: '16 elementów', isActive: false },
            { value: 20, label: '20 elementów', isActive: false },
          ]}
        />
      </Menu>
      <Menu label="Przycisk Sterujący:">
        <Button
          onClick={() => {
            setGameStarted(true);
            setAmount(0);
          }}
        >
          START
        </Button>
      </Menu>
    </>
  );
};
