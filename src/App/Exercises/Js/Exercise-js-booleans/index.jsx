import './styles.css';

export function Exercise() {
  const isValid = true;
  const passStyles = true;

  const checkStatement = isValid && true; //true
  const checkStatement_1 = false && isValid; //false
  const checkStatement_2 = false && true && false; //false
  const checkStatement_3 = false && true && false; //false
  const checkStatement_4 = false || (true && false); //false

  let x = 10; //nie moze byc const bo bedzie sie zmieniac(??)
  // let y = 10;
  // let z = 10;
  // let v = 10;
  // let s = 10;

  // x = x + 5;
  // x += 5;

  // y = y * 5;
  // y *= 5;

  // z = z / 5;
  // z /= 5;

  // v = v ** 5;
  // v **= 5;

  // s = s % 5;
  // s %= 5;

  // if (x == 5) {
  //   //console.log(magia)
  // } else if (x == 15) {
  //   //console.log(brak magii)
  // } else {
  //   //console.log(inna wartosc niz wskazane)
  // }
  // // pierwszy nawias-> deklarujemy dla jakiego elementu ma byc spelniony warunek

  //   if (x>=5){
  //     console.log('wieksze lub rowne 5')
  //   } else{
  //     console.log('mniejsze niz 5')
  //    }
  // ? dziala jak operator if - czyli: "jesli ten warunek jest spelniony"
  //   (x > 5) ? console.log('wieksze od 5') : console.log ('mniejsze lub rowne 5');

  // CONDITIONAL (TERNARY) OPERATOR
  // sprawdza czy wieksze od 5 a jesli tak to czy rowne 7
  //   (x > 5) ? ((x==7) ? console.log('7') : console.log('wieksze od 5') : console.log ('mniejsze lub rowne 5'));

  // switch to loop element
  switch (x) {
    case 5:
      console.log('rowny 5');
      break;
    case 6:
      console.log('rowny 6');
      break;
    default:
      console.log('ani 5 ani 6');
  }

  //wyrenderuj nam komponent poniżej w zależności od zmiennej isValid
  return (
    <>
      {isValid && (
        <div
          style={{
            backgroundColor: passStyles ? 'red' : 'black',
          }}
        >
          JS Booleans
        </div>
      )}
    </>
  );
}
