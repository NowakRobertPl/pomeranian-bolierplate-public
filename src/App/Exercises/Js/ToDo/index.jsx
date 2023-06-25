import './styles.css';
import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask/SingleTask.jsx';
import { AddTask } from './AddTask/AddTask';
import { API_URL, FORM_SCHEMA } from './constants';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';
import { requestHandler, setStateAsync } from './helpers';
// dodać constansy

export function ToDoWithServer({}) {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(FORM_SCHEMA);
  const [isEdited, setIsEdited] = useState(false);
  const [isForm, setIsForm] = useState(false);
  // const isError = errorList.length > 0;
  const isDataEmpty = data.length === 0;
  const [errorIds, setErrorIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isToDoError, setIsToDoError] = useState('');

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setIsError(true);
        // setErrorList((prevState) => [...prevState, err]);
        // setErrorList(err)
      })
      .finally(() => {
        setIsLoading(false);
      });

    //stara wersja then'a i catch'a - wspolpracujaca z requestHandlerem z helpersów
    // try {try {

    //     setErrorList([]);
    //     const dataFromServer = await fetch(`${API_URL}/todo`);
    //     if (!dataFromServer.ok) {
    //       throw new Error(dataFromServer.json());
    //     }
    //     const response = await dataFromServer.json();

    //     setData(response);
    //   } catch (err) {
    //     setStateAsync(() => {
    //       setErrorList((prevState) => [...prevState, err]);
    //     });
    //   } finally {
    //     // await setStateAsync(() => {
    //     setIsLoading(false);
    //     // });

    //     console.log(errorList, 'errorList');
    //   }
    // } catch (error) {

    // }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteToDo = async (id) => {
    try {
      const response = await fetch(`${API_URL}todo/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'appliction/json' },
      });
      if (!response.ok) {
        throw new Error(response.json());
      }
    } catch {
      setStateAsync(() => {
        setErrorIds((prevState) => [...prevState, id]);
      });
    } finally {
      getData();
    }
  };

  const handleEditTask = (id) => {
    const foundToDo = data.find((todo) => todo.id === id);
    // console.log('id:', foundToDo);
    setFormData(foundToDo);
    setIsEdited(true);
    setIsForm(true);
  };

  const markAsDone = async (id) => {
    setIsToDoError(false);
    requestHandler('PUT', `${id}`)
      .then((response) => {
        if (!response.isDone) {
          setErrorIds((prevState) => [...prevState, id]);
          setIsToDoError(true);
        } else {
          getData();
        }
      })
      .catch(() => {
        setIsToDoError(true);
        setErrorIds((prevState) => [...prevState, id]);
      });
    //   try {
    //     const response = await fetch(`${API_URL}/todo/${id}/markAsDone`, {
    //       method: 'PUT',
    //       headers: { 'Content-type': 'appliction/json' },
    //     });
    //     if (!response.ok);
    //     {
    //       console.log(response, 'response w ifie w markasdone');
    //       throw new Error(response.json());
    //     }
    //   } catch (err) {
    //     setStateAsync(() => {
    //       setIsError(true);
    //     });
    //   } finally {
    //     getData();
    //   }
    // };
  };
  const handleIsForm = () => {
    setIsForm(true);
  };

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }
  return (
    <div className="task-index-page">
      {!isForm && !isError && (
        <>
          <h3>TODO </h3>
          <p>Tutaj znajdziesz listę swoich zadań</p>
          <button
            type="submit"
            className="button-add-addtask"
            onClick={handleIsForm}
          >
            DODAJ
          </button>
          {!isForm && !isDataEmpty && !isError && (
            <button className="button-add-addtask" onClick={handleIsForm}>
              DODAJ
            </button>
          )}
        </>
      )}
      {isForm && !isError && (
        <AddTask
          getData={getData}
          formData={formData}
          setFormData={setFormData}
          isEdited={isEdited}
          setIsEdited={setIsEdited}
          setIsForm={setIsForm}
        />
      )}

      {!isForm &&
        !isDataEmpty &&
        !isError &&
        data.map((el) => {
          console.log('lista blędów', errorIds);
          const isError = errorIds.includes(el.id);
          return (
            <div>
              <SingleTask
                title={el.title}
                author={el.author}
                note={el.note}
                deleteToDo={deleteToDo}
                id={el.id}
                isError={isError}
                handleEditTask={handleEditTask}
                markAsDone={markAsDone}
                isDone={el.isDone && !isToDoError}
                doneDate={el?.doneDate}
              />
            </div>
          );
        })}

      {!isForm && !isDataEmpty && !isError && (
        <button className="button-add-addtask" onClick={handleIsForm}>
          DODAJ
        </button>
      )}
      {(isDataEmpty || isError) && (
        <EmptyTaskList
          isError={isError}
          addTask={handleIsForm}
          getData={getData}
        />
      )}
    </div>
  );
}
