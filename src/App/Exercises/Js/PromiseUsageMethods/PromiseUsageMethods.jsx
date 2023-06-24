import './styles.css';
import { useState, useEffect } from 'react';

export function Exercise() {
  const promises = [
    new Promise((resolve) => setTimeout(resolve(1), 1000)),
    new Promise((resolve) => setTimeout(resolve(2), 2000)),
    new Promise((resolve) => setTimeout(resolve(3), 3000)),
  ];

  //all sprawi ze po resolvie wszystkich dopiero wykona promisa
  useEffect(() => {
    Promise.all(promises).then(alert);
    //allSettled zwraca niezależnie czy sięudało, czy są wyniki - po prostu zadziało się
    Promise.allSettled(promises).then(alert);
    //race zwraca pierwszy zresolvowany wynik(promise) - nawet z errorem  (WYKLUCZA SIĘ Z all i ALLSETTLED)
    Promise.race(promises).then(alert);
    //any zwraca pierwszy zakonczony bezbłędnie wynik(promise)  (WYKLUCZA SIĘ Z all i ALLSETTLED)
    Promise.any(promises).then(alert);
  }, []);
  return <div>{Exercise}</div>;
}
