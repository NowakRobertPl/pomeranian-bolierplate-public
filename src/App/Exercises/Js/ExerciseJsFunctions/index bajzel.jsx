import './styles.css';

export function ExerciseJsFunctions() {
  const originalArr = [3, 2, 1];
  const sortedArr = sortImmute(originalArr);

  function sortImmute(lista) {
    return [...lista].sort(); // Nawiasy i spread operator sprawiają, że dodaje siędo nowej listy
  }

  const originalObject = { name: 'john', surname: 'wick', age: 1000 };
  // const changedObject = upperObject(originalObj);

  // const changedObject = Object.fromEntries(
  // Object.entries(originalObject).map(([key,value]) => [
  //   key,
  //   String(value).charAt(0).toUpperCase() + String(value).slice(1),
  // ])
  // );
  const upperObject = (obj) => {
    const changedObject = {};

    Object.keys(originalObject).forEach((key) => {
      const helperString = String(originalObject[key]);
      changedObject[key] =
        helperString.charAt(0).toUpperCase() + helperString.slice(1);
    });

    return changedObject;
  };

  //funkcja podnosząca pierwszą literę property obiektu 27maj czas: 4:50
  //NIE DZIAŁA -SOMETHING WENT WRONG//
  // const upperObject = (object) => {
  //   const helperObject = {};
  //   for (const property in object) {
  //     const propertyToString = object[property].toString();
  //     // console.log(property, 'property');
  //     // console.log(object[property], 'object[property]');

  //     const helperValue = propertyToString[0];
  //     helperObject[property] =
  //       helperValue.toUpperCase() + propertyToString.slice(1);
  //     // helperObject [property] = object[property].toString()[0].toUpperCase();
  //   }

  //   return helperObject;
  // };

  //podnoszenie pierwszej litery

  // function capitalize(lista) {
  //   return [...lista].sort(); // Nawiasy i spread operator sprawiają, że dodaje siędo nowej listy
  // }

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const calcAvr = (peopleArr) => {
    const returnArr = [];
    peopleArr.forEach((person) => {
      const sum = null;
      person.grades.forEach((num) => (sum += num));

      returnArr.push({
        id: person.id,
        name: person.name,
        avr,
      });
    });
    return returnArr;
  };

  const tablicaWynikowa = calcAvr(tablicaPierwotna);
  console.log(tablicaPierwotna, tablicaWynikowa);

  // return (
  //   <div>
  //     {/* <div>{originalArr}</div>
  //     <div>{sortedArr}</div>
  //     <div>{originalObj}</div>
  //     <div>{upperObject}</div> */}
  //   </div>
  // );
  // }

  // console.log({
  //   tablicaPierwotna[0].grades.reduce ((a,b) => a+b,0)
  //   tablicaWynikowa
  // })
  // function tablicaWynikowa = srednia(tablicaPierwotna[2]) = {
  //   const srednia =
  //   return [...]
}
