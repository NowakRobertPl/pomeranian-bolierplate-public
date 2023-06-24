import './styles.css';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3333/api';
const FORM_SCHEMA = { title: '', note: '', author: '' };

export function Exercise() {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState(FORM_SCHEMA);

  const getData = async () => {
    const response = await fetch('http://localhost:3333/api/todo');
    const jsonData = await response.json();
    console.log(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e, name) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSendData = () => {
    fetch(`${API_URL}/todo`, {
      method: 'POST', //PUT,DELETE
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => {
      setFormData(FORM_SCHEMA);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSendData();
  };

  useEffect(() => {
    console.log(formData, 'formData');
  });

  // (e), htmlFor

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => handleChange(e, 'title')}
        />
        <br />
        <label htmlFor="note">Note:</label>
        <input
          type="text"
          id="note"
          value={formData.note}
          onChange={(e) => handleChange(e, 'note')}
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => handleChange(e, 'author')}
        />
        <br />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
