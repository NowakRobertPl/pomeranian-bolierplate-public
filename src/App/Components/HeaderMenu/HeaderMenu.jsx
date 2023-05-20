import './styles.css';
import { Logo } from '../Logo/Logo';
import { SettingIcon } from '../Icons/SettingIcon';
import { ReactComponent as ArrowDown } from '../../Images/arrowdown.svg';
import { MenuArrow } from '../Icons/MenuArrow';
import { useState } from 'react';

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const clickHandler = () => {
    setIsOpen(!isOpen); // ustaw mi wartośc na różną (wykrzyknik "!") od aktualnej wartości "isTrue"
  };

  return (
    <div class="images-container">
      <div class="name">
        <h4>Juan Pablo Wassermüller </h4>
        <h5>Mściciel</h5>
      </div>
      <SettingIcon />
      {/* todo: <Roundimage/> */}
      <div className="circular_image">
        <img src="http://placekitten.com/500/500" />
      </div>
      <div className="okienko" onClick={clickHandler}>
        <MenuArrow className="menu_arrow" />
        {isOpen && <p></p>}
        {!isOpen && (
          <p>
            <div className="otwarte">
              <button className="login">Zaloguj się</button>
              <p className="loginBottom">
                Nie masz jeszcze konta? .
                <span className="register"> Zarejestruj się!</span>
              </p>
            </div>
          </p>
        )}
      </div>
      {/* {isTrue && <Popup popup="Zaloguj się" />}
      {!isTrue && <div className="popup"></div>} */}
    </div>

    //
    //   <div>
    //     <Logo/>
    //     <div className="header-title">Tytuł nagłówka</div>
    //     <div></div>
    //   </div>
    // </header>
  );
}
