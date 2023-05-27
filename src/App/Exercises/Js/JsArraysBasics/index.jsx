import './styles.css';

const array = [true, 1, 'Cześć gościu!', { robert: 'nowak' }, 115];

export function JsArraysBasics() {
  function getValueByIndex(array) {
    return console.log(array[0]);
  }

  getValueByIndex(JsArraysBasics);

  return array[2];

  // function pushElementToArray(arrayToPush){
  //   return console.log('pushElementToArray', arrayToPush.push)
}
