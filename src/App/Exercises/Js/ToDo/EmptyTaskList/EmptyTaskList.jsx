import './styles.css';

export function EmptyTaskList({ addTask, isError, getData }) {
  console.log(isError, 'isError EmptyTaskList');

  const textButton = isError ? 'ODŚWIEŻ STRONĘ' : 'NO DOBRA, MAM CO ROBIĆ';
  const action = isError ? getData : addTask;
  const title = isError
    ? 'Przepraszamy, nie dało się pobrać listy zadań'
    : 'Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.';
  console.log(
    title,
    action,
    textButton,
    'parametry title action i textButton emptyTaskList'
  );

  return (
    <div>
      <p>{title}</p>
      <button onClick={action} type="submit" className="button-add-addtask">
        <p>{textButton}</p>
      </button>
    </div>
  );
}
