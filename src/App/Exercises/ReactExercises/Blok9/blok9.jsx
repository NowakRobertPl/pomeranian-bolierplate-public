import React, { useState } from 'react';
import './style.css';

function Wynik(props){
  return <h2>{props.wynik}</h2>
}
// Wynik musi sie zaczynac z duzej litery

export function Blok9 () {
  function clickHandler() {
    console.log('Kliknieto przycisk');
  }    

  const [text, setText] = useState('Kliknij tutaj!')
  const [text2, setText2]= useState('')
  const [ilosc, setIlosc] = useState('0')
  const [isClicked5, setClicked5] = useState(false)
  const [pokaz, setPokaz] = useState(false)
  const [x1, setX] = useState('0')

  const [argA, setArgA]= useState('')
  const [argB, setArgB]= useState('')
  const [odpowiedz, setOdpowiedz] = useState('Wprowadź właściwe dane')
  const [op, setOp] = useState('+')
  let wynik =0; 

  function clickHandler1(){
    const nowa_ilosc = ilosc + 1
    setIlosc(nowa_ilosc)
    setText('klknieto ' + ilosc + 'razy')
  
      if (nowa_ilosc>=5){
    setText('Kliknales inna ilosc niz 5 razy.')
    }
    else {setText('Kliknales' + nowa_ilosc + 'razy')}
  }
    // function clickHandler2(){
    //   setPokaz(!pokaz)
    // }
    //   // ! negacja wartości
    
    function changeHandlerA(ev){
      const wartosc = ev.target.value
      setArgA(wartosc)
      if (parseFloat(wartosc)>parseFloat(argB)){
      setOdpowiedz ("Tak")
    }
      else{
      setOdpowiedz ("Nie")
    }}
    function changeHandlerB(ev){
      const wartosc = ev.target.value
      setArgB(wartosc)
      if (parseFloat(argA)>parseFloat(wartosc)){
      setOdpowiedz ("Tak")
    }
      else{
      setOdpowiedz ("Nie")
    }}
    // if(parseFloat(argA)>parseFloat(argB)){
    // wynik = 'Tak'
    // }else{
    // wynik = 'Nie'  
    // }
    
    function handleOp(ev){
      setOp(ev.target.value)
    }
    if(op=='+'){
      wynik=parseFloat(argA)+parseFloat(argB)
    }
    if(op=='-'){
      wynik=parseFloat(argA)-parseFloat(argB)
    }
    if(op=='*'){
      wynik=parseFloat(argA)*parseFloat(argB)
    }
    if(op=='/'){
      wynik=parseFloat(argA)/parseFloat(argB)
    }

  return (
    <div>
      {/* <h2>Kliknij 5 razy</h2>
      <button onClick={clickHandler} className = 'ifbtn' >{text}</button>
      {isClicked5 && <h2>Kliknales wiecej niz 5 razy</h2>}
     */}
      {/* {ilosc>=5 &&<h2>Kliknales wiecej niz 5 razy</h2>} */}
    
      {/* <button onClick={clickHandler1} className = 'ifbtn' >Ukryj/Pokaż</button>
      {pokaz && <p>Teraz mnie widać</p>}    
      <h2>Czy podana liczba jest większa niż 10?</h2>
      <input value={x1} onChange={changeHandler} placeholder='podaj liczbę'/>
      if {x1>10 setText2=('Podana Liczba jest większa niż 10');
      } *
      else setText2 = ('Podana liczba nie jest większa niz 10');
     */}
    
     <h2>Czy liczba A jest większa od liczby B?</h2>
     <input value={argA} onChange= {changeHandlerA} placeholder='A' /><br/>
     <input value={argB} onChange= {changeHandlerB} placeholder='B' /><br/>
    <select value={op} onChange={handleOp}>
      <option value='+'>+</option>
      <option value='-'>-</option>
      <option value='*'>*</option>
      <option value='/'>/</option>
    </select>
    
    <p>{wynik}</p>
    
     {/* {odpowiedz} */}
     <Wynik wynik= {wynik}/>
    {/* props=tak dla zmiennej wynik */}
    
    </div>
  );
}
