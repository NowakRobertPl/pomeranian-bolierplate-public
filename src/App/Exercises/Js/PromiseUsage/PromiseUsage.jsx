import './styles.css';
import { useState, useEffect } from 'react';

export function Exercise() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();

  const getJokes = async (category) => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?`);
      console.log('Response before .json():', response);
      const data = await response.json();
      console.log('Response after .json():', response);
      const joke = data.value;
      // zamiennie const joke = data;
      console.log(`RANDOM CHUCK NORRIS JOKE: ${joke}`);
      setData(joke);
    } catch (err) {
      console.log(err, 'err');
    }
  };

  //kazdy render
  useEffect(() => {});
  // jednorazowy render
  useEffect(() => {}, []);
  // render przy zapytaniu
  useEffect(() => {}, ['jakas zmienna']);

  useEffect(() => {
    getJokes();
  }, []);

  useEffect(() => {
    console.log('useEffect on category change');
  }, [category]);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e, 'e from handleClick');
    setCategory(e.target.value);
  };

  return (
    <div>
      <p>{data}</p>
      {/* zamiennie   <p>{data?.value}</p> */}
      <button onClick={getJokes}>Get random Chuck Norris joke</button>
      <form action="submit"></form>
      <input type="text" onChange={handleChange} value={category} />
      Enter Category!
      <form />
    </div>
  );
}
