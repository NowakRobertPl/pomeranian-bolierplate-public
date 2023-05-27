import './styles.css';

const array2d = [1, [2]];

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function JsArraysMethods() {
  function filterMethod(arrayOfNumbers) {
    const greaterThan5 = arrayOfNumbers.filter(function (number) {
      return number > 5;
    });
    return console.log('filterMethod', greaterThan5);
  }

  JsArraysMethods(arrayOfNumbers);

  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'zbigniew' };
    const resultOfMerging = { ...object1, ...object2 };

    console.log('mergeObjects', resultOfMerging);
    return resultOfMerging.name;
  }

  return (
    <div>
      <p>Metody na tablicach: </p>
      <pre>
        <code>
          {objectOfMultipleTypes.maciej.daneOsobowe}
          {objectOfMultipleTypes.KursFe4()}
          {objectOfMultipleTypes['maciej']['daneOsobowe']}
          {Object.values(objectOfMultipleTypes)}
          {Object.keys(objectOfMultipleTypes)}
        </code>
        {mergeObjects}
      </pre>
    </div>
  );
}
// function filterMethod(arrayOfNumbers1, arrayOfNumbers2) {
//   const intersection = arrayOfNumbers1.filter(
//     (element) => arrayOfNumbers2.indexOf(element),
//     {}
//   );
//   return console.log('filterMethod', intersection);
// }
// filterMethod(arrayOfNumbers);

function getTheSameNumbers() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];

  const result = arr1.filter(function (numberElement) {
    return arr2.includes(numberElement);
  });
  return console.log('getTheSameNumbers', result);
}
getTheSameNumbers();

const objectOfMultipleTypes = {
  maciej: { daneOsobowe: 'jestem z gdańska' },
  kursFe: 'react',
  KursFe1L: 1,
  KursFe2: true,
  KursFe3: [],
  KursFe4: () => 'Lubię Vanilla JS',
};
