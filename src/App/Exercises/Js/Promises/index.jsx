import { useEffect, useState } from 'react';
import './styles.css';

export function ApiSimulationSuccess() {
  const [getUserData, setUserData] = useState('');

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John' });
      }, 2000);
    });
  }
  // sekwencyjność, single responsibility, chaining in promises
  function loadUserDetails(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, 2000);
    });
  }

  function loadAllUserData() {
    return loadUser().then((user) => {
      return loadUserDetails(user.id).then((userDetails) => {
        return { ...user, ...userDetails };
      });
    });
  }

  function handleLoadUserData() {
    setUserData(null);
    return loadAllUserData().then((allUserData) => {
      return setUserData(allUserData);
    });
  }

  console.log('udalo sie?', getUserData);

  return (
    <div className="playing-with-js-promises">
      <button onClick={handleLoadUserData}>Załaduj dane użytkownika: </button>
      <p>{getUserData?.id}</p>
      {/* {getUserData && getUserData.id} */}
      <p>{getUserData?.name}</p>
      <p>{getUserData?.age}</p>
      <p>{getUserData?.country}</p>
    </div>
  );
}
