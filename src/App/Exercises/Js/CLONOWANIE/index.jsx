import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { ToDoElement } from './TODO';

// wprowadzic folder do route'a!!!

const [data, setData] = useState([]);

export function ToDoWithServer() {
  const getData = async () => {
    const source = await fetch('https://localhost:3333/api/todo');
    const jsonData = await source.json();
    const [errorList, setErrorList] = useState([]);

    
    setData(jsonData)
  };

  const deleteToDo = async(id) =>{
    const source = await fetch(`https://localhost:3333/api/todo/${id}`, {
    method:'DELETE',
    headers:{'content-type':'application/json'}
  });


  const addToDo = async(id) =>{
    const response = await fetch(`https://localhost:3333/api/todo`, {
    method:'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify {name:"",}
  });




  const {status} = await response
  if (status ===200){
    getData()
  } else if (status ===500 || status ===404){
    setErrorList((prevErrorList) => [...prevErrorList, id])
    // nawet jeśli potem usuniecie sie uda - nie bedzie to kolidowało, bo rekord już zniknie
    console.log(errorList, "new error list")
  }
  }
  }

  useEffect((deleteError) => {
    getData();
  }, [errorList]);


  useEffect(() => {
    getData();
  }, []);

    return (
    <div>
      <AddTask/>
      <p className="todopar">Tutaj znajdziesz listę swoich zadań.</p>
      {data.map((element) => {
          const isError = errorList.includes(element.id) 
          return (
          
          <ToDoElement
            id={element.id}  
            label={element.title}
            author={element.author}
            note={element.note}
            deleteToDo={deleteToDo}
            isError={isError}
            
          />
        );
      })}

      {/* <ToDoElement
        label="Zamówić catering"
        name_date="Wojtek 20.04.2024, 18:03"
        comment="Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić."
      />
      ,
      <ToDoElement
        label="Kupić spray na kleszcze"
        name_date="Wojtek 10.04.2024, 11:30"
        comment="Pamiętać, żeby sprawdzić skład i termin ważności preparatu.
      Zadzwonić do weta, żeby się upewnić, czy mają na stanie."
      />
      ,
      <ToDoElement
        label="Szczepienie kitku"
        name_date="Wojtek 15.04.2024, 15:30"
        comment="Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz
        szczepiona i umówić się z naszym weterynarzem."
      /> */}
    </div>
  );
}
