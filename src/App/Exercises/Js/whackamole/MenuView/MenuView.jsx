import './styles.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/menu';
import { SelectButtons } from '../SelectButtons/SelectButtons';
export const MenuView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="Czas Gry">
        <SelectButtons
          options={[
            {
              label: '1 minuta',
              isActive: false,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />

        {/* <Button isActive={true}>1 minuta</Button>
        <Button>2 minuty</Button>
        <Button>3 minuty</Button> */}
      </Menu>

      {/* propsy!! importowane z Menu/menu.jsx */}
      <Menu label={'Ilość Kretów'}>
        <SelectButtons
          options={[
            {
              label: '1 KRET',
              isActive: false,
              value: 1,
            },
            {
              label: '2 KRETY',
              isActive: false,
              value: 2,
            },
            {
              label: '3 KRETY',
              isActive: false,
              value: 3,
            },
          ]}
        />
        {/* <Button isActive={true}>1 kret</Button>
        <Button>2 krety</Button>
        <Button>3 krety</Button> */}
      </Menu>

      {/* <div className="menu">
  <div className="menu-label">Przyciski Sterujące</div>
  <Button>ROZPOCZNIJ GRĘ</Button>
</div> */}
      {/* v2.0 */}
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Rozpocznij Grę</Button>
      </Menu>
    </>
  );
};
