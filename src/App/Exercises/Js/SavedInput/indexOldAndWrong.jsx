import './styles.css';
import { TablicaNickow } from './TablicaNickow/TablicaNickow';
//TODOSY
//pojemniki
//klasy
//komponent: Tablica Nicków

export function SavedInput(TablicaNickow) {
  return (
    <div className="container">
      <div className="inputbox">
        <p>Nick</p>
      </div>
      <div>
        <button className="button">Dodaj</button>
      </div>
      <div className="tablicanickow"> {/* <TablicaNickow /> */}</div>
    </div>
  );
}
