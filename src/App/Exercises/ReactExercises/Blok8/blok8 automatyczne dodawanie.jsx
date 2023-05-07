import React from 'react';
import { useState } from 'react';
import './style.css';

const style = {
  marginLeft: '140px',
};

export function Blok8() {
  const [iloscklikniec, setIlosc] = useState(0);
  // stała zawierająca  ilosc klikniec
  const [text, setText] = useState('Tekst do wpisania');
  // stała odpowiadajaca za zawartosc tekstu w boxie -
  // text bedzie zmienną, a setText - funkcją na tej zmiennej
  const [placeholder, setPlaceholder] = useState('Tekst do wpisania');
  // useState() <= wartosc początkowa to zawartosc nawiasu tej funkcji
  const [liczba1, setSuma1 ] = useState(0)
  const [liczba2, setSuma2 ] = useState(0)
  const x1 = parseFloat(liczba1)
  const x2 = parseFloat(liczba2)

  function dodawanie(){
    const x1 = parseFloat(liczba1)
    const x2 = parseFloat(liczba2)

  }
  

  function clickHandler() {
    setIlosc(iloscklikniec + 1);
    // funkcja ktora na klikniecie wykonuje dodanie do wartosc iloscklikniec jedynkę
  }
  function changeHandler(ev) {
    console.log(ev.target.value);
    // uwzględnia w konsoli wprowadzone zmiany
    setText(ev.target.value);
    // ustawia tekst na to co wpisałeś
    setPlaceholder(ev.target.value)
    
  }
  function changeHandler1(ev) {
  setSuma1(ev.target.value);
  }
  function changeHandler2(ev) {
    setSuma2(ev.target.value)
  }

  
  return (
    <div>
      <h2>Cześć!</h2>
      <h4>Wpisz tekst</h4>
      <input value={text} onChange={changeHandler} placeholder='tekst do wpisania' />
      <span style={style}>{placeholder}</span>
      {/* zmienna {text} to jest to co widzimy jako efekt koncowy pisania  */}

      <br></br>
      <button className="btn" onClick={clickHandler} type="button">
        {' '}
        Kliknieto mnie {iloscklikniec} razy.
      </button>
      
      <br/>
      <input value={x1} onChange={changeHandler1} placeholder='podaj 1. liczbę'/>
      <button onClick= 'dodawanie'>+</button>
      <input value={x2} onChange={changeHandler2} placeholder='podaj 2. liczbę'/>
      <button >=</button>
      <input value={x1 + x2} />
      </div>
  )}
  
      
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [wynik, setWynik] = useState('');
  
//   function changeNum1(ev){
//   setNum1(ev.target.value)}
//   function changeNum2(ev){
//   setNum2(ev.target.value)};
//   function dodaj () {
//     const z = parseFloat(num1) +  parseFloat(num2);
//   setWynik(z)  
// }


//   return(
//   <div>

//     <input value={num1} onChange={changeNum1}/>
//     <input value={num2} onChange={changeNum2}/>
//      <button onClick={dodaj}>Dodaj</button>
//      <p>
//       {wynik}
//       </p>
//   </div>
