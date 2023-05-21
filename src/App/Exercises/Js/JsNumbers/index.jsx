import './styles.css';

export function Exercise() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    //oryginał

    // if (age >= 18) {
    //   if (hasDriverLicense) {
    //     if (hasCar) {
    //       return 'You can drive your car!';
    //     } else {
    //       return 'You can drive a rental car.';
    //     }
    //   } else {
    //     return "You can't drive without a driver's license.";
    //   }
    // } else {
    //   return 'You are too young to drive.';
    // }

    if (age >= 18 && hasDriverLicense == true && hasCar == true) {
      return 'You can drive your car!';
    } else if (age >= 18 && hasDriverLicense == true && hasCar == false) {
      return 'You can drive a rental car!';
    }
    if (age >= 18 && hasDriverLicense == false) {
      return "You can't drive without a driver's license.";
    } else {
      return 'You are too young to drive.';
    }
    //wersja jednoliniowa?
    // (age>=18) ? (hasDriverLicense==true) ? (hasCar==true) : console.log('You can drive your car!') : console.log('You can drive a rental car.') : console.log("You can't drive without a driver's license.") : console.log('You are too young to drive.');
  }

  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }

  function isStringShort(str) {
    if (str.length < 10) {
      return 'true';
    } else {
      return 'false';
    }
  }

  function circleArea(number) {
    return Math.PI * number;
  }

  function ocenaSlownie(ocena) {
    if (ocena == '6') {
      return 'celujący';
    } else if (ocena == '5') {
      return 'bardzo dobry';
    } else if (ocena == '4') {
      return 'dobry';
    } else if (ocena == '3') {
      return 'dostateczny';
    } else if (ocena == '2') {
      return 'dopuszczający';
    } else if (ocena == '1') {
      return 'niedostateczny';
    } else {
      return 'zła wartość';
    }
  }

  function ownMax(n1, n2) {
    if (n1 > n2) {
      return n1;
    } else {
      return n2;
    }
  }

  function sumFloat(l1, l2) {
    let suma = l1 + l2;
    return suma.toFixed(4);
  }
  //zad.7
  function mathRevenge(a, b, c) {
    let delta = [b ** 2] - [4 * a * c];
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    let x3 = -b / (2 * a);

    if (delta > 0) {
      return `Pierwiastkami tego równania kwadratowego są"${x1} ${x2}`;
    } else if (delta == 0) {
      return `Pojedyńczym pierwiastkiem tego równania kwadratowego jest x=${x3}`;
    } else {
      return 'Brak pierwiastków tego równania kwadratowego.';
    }
  }
  //zad.8
  function getRandomNr(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let booba = Math.random() * (max - min) + min;
    return `Twoją losową liczbą jest ${booba.toFixed(4)}`;
  }
  //zad.8A
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return `Twoją losową liczbą całkowitą jest ${Math.floor(
      Math.random() * (max - min) + min
    )}`;
  }
  //zad.8B
  //  "NIE MAM POJECIA"
  //zad.9

  //potwór frankensteina

  // function isNumber(a,b) {
  //   if (typeof a === "string") {
  //       return a;}
  //       else{"to nie jest liczba"}
  //     if (typeof b === "string")
  //       return b;}
  //       else{"to nie jest liczba"}

  // function srednia(a, b) {
  //   if (a && b
  //   return (a + b) / 2;

  // }

  function srednia(a, b) {
    if (typeof a === 'number')
      if (typeof b === 'number') {
        return (a + b) / 2;
      } else {
        return 'błędne dane';
      }
  }

  //wyniki - funkcje wdrozone
  return (
    <>
      {canDrive(18, true, true)} <br></br>
      {isStringShort('1234567890')} <br></br>
      {circleArea(6)} <br></br>
      {ocenaSlownie(6)} <br></br>
      {ownMax(51, 17)} <br></br>
      {sumFloat(51.123456, 34.3456789)} <br></br>
      {mathRevenge(2, -4, 2)} <br></br>
      {getRandomNr(1, 5)} <br></br>
      {getRandomInt(1, 5)} <br></br>
      {srednia(10, 832)}
    </>
  );
}
