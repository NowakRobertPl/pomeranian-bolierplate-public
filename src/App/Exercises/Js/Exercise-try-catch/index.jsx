import './styles.css';
import { useState } from 'react';

export function Exercise() {
  const [value, setValue] = useState('');
  const [error, setError] = useState();

  const checkIsNumber = (value) => {
    const parsedValue = Number.parseInt(value);

    if (isNaN(parsedValue)) {
      throw new Error('Input nie jest liczbą!');
    }
  };

  const validate = (valueToValidate) => {
    try {
      checkIsNumber(valueToValidate);
    } catch (err) {
      setError(err);
    }

    if (Number.isInteger(valueToValidate)) {
      console.log('Jest liczbą całkowitą');
    } else {
      console.log('Nie jest liczbą całkowitą');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate(value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nasz imput:
          <input onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error && <div>Error: {error}</div>}
    </>
  );
}
