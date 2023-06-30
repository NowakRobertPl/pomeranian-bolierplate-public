import React, { useState } from 'react';

import './style.css';

export function Exercise() {
  const handleSubmit = () => {};

  const [isConfirmPasswordDisabled, setIsConfirmPasswordDisabled] =
    useState(true);
  const handlePasswordChange = (event) => {
    console.log(event.target.value, 'eventTargetValue');

    // moduł walidacji długości inputu - walidacja przy użyciu length

    // const password = event.target.value;
    // if (password.length > 3) {
    //   setIsConfirmPasswordDisabled(false);
    // }

    // //gdy po wpisaniu hasła cofa się ilosc liter - ponowne blokowanie
    // if (password.length <= 3) {
    //   setIsConfirmPasswordDisabled(true);
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor="name">Wpisz swoje imię</label>
        <input type="text" id="name" placeholder="Imię" />
      </div>
      <div className="flex">
        <label htmlFor="surname">Wpisz swoje nazwisko</label>
        <input type="text" id="surname" placeholder="Nazwisko" />
      </div>
      <div className="flex">
        <label htmlFor="address">Wpisz swój adres</label>
        <input type="text" id="address" placeholder="Adres" />
      </div>
      <div className="flex">
        <label htmlFor="password">Wpisz swoje hasło</label>
        <input
          required
          onChange={handlePasswordChange}
          type="password"
          id="password"
          placeholder="Hasło"
        />
      </div>
      <div className="flex">
        <label htmlFor="password">Potwierdź swoje hasło</label>

        {/* Walidacja z użyciem value.length */}
        <input
          // disabled={isConfirmPasswordDisabled}
          type="password"
          id="confirmPassword"
          placeholder="Hasło"
          required
        />
      </div>

      <div className="flex">
        <label htmlFor="select">Wskaż płeć.</label>
        <select name="select" id="select" placeholder="Wybierz swoją płeć">
          <option value="woman">Kobieta</option>
          <option value="man">Męzczyzna</option>
          <option value="other">Inne</option>
        </select>
      </div>

      <div className="flex">
        <label htmlFor="textarea">Opisz swój problem.</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Opisz swój problem"
        ></textarea>
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
}
