import './styles.css';

export function JsFunctionBasicsExercise() {
  //declaration types

  const d = 4;
  const e = 5;

  function multiplyTypeFunction(a, b) {
    return a * b;
  }

  const multiplyTypeArrowFunction = (b, c) => {
    return b * c;
  };

  const multiplyTypeArrowFunction_lambda = () => a * b;

  const filterHelper = (num) => {
    return (num) => 3;
  };

  const array_anonymous_function_with_declaration = [1, 2, 3].filter(
    (num) => num >= 3
  );
  const array_function_with_declaration = [1, 2, 3](() => filterHelper(num));

  function outsideFunction() {
    function insideFunction() {
      console.log('test');

      /// !!! wywołanie funkcji
      return insideFunction();
    }
    ///!!! zwracamy zmienną do ktorej przypisana jest ta funkcja -
    ///       przekazujemy referencje do tej funkcji
    /// return insideFunction;
  }
  ///.........................
  ///ARGUMENTY FUNKCJI

  // function multiplyTypeFunction2(x, y, z) {
  //   return x * y * z;
  // }

  function multiplyTypeFunction2(...values) {
    // values jako LISTA z wartościami;
    return values;

    function multiplyTypeFunction3(callback1, callback2, ...values) {
      callback1();
      callback2();
      return values;
    }
  }

  multiplyTypeFunction3(
    () => {
      console.log('1');
    },
    650,
    1,
    2,
    3,
    4
  );

  const l1 = 1;
  const l2 = 1;

  console.log(l1 === l2);

  const obj1 = {};
  const obj2 = {};

  console.log(obj1 === obj2);

  return (
    <div>
      <div>{multiplyTypeFunction(2, 4)}</div>
      <div>{multiplyTypeArrowFunction(3, 8)}</div>
      <div>
        {() => {
          return d * e;
        }}
      </div>
    </div>
  );
}
