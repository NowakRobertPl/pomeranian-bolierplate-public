import './styles.css';
import { useEffect } from 'react';

export function Exercise() {
  const fetchDataFast = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  const promises = [
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    ),
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    ),
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    ),
  ];

  const clickHandlerfetchDataFast = () => {
    fetchDataFast().then((res) => {
      console.log('fetchDataFast:', res);
    });
  };
  const clickHandlerfetchDataLong = () => {
    fetchDataLong().then((res) => {
      console.log('fetchDataLong:', res);
    });
  };
  const clickHandlerfetchDataError = () => {
    fetchDataError().then((res) => {
      console.log('fetchDataError:', res);
    });
  };
  // ----

  //   useEffect(() => {
  //     //Promise.all dla Fast i Long
  //     Promise.all(fetchDataFast, fetchDataLong).then((results) =>
  //       console.log(results, 'Promise.all for Fast & Long')
  //     );

  //     //Promise.all
  //     Promise.all(promises).then((results) =>
  //       console.log(results, 'Promise.all')
  //     );

  //     //Promise.allSettled dla Fast i Long
  //     Promise.allSettled(fetchDataFast, fetchDataLong).then((results) =>
  //       console.log(results, 'Promise.allSettled for Fast & Long')
  //     );

  //     //Promise.allSettled
  //     Promise.allSettled(promises).then((results) =>
  //       console.log(results, 'Promise.allSettled')
  //     );

  //     //Promise.any dla Fast i Long
  //     Promise.any(promises).then((results) =>
  //       console.log(results, 'Promise.any for Fast & Long')
  //     );

  //     //Promise.any
  //     Promise.any(promises).then((results) =>
  //       console.log(results, 'Promise.any')
  //     );

  //     //Promise.race dla Fast i Long
  //     Promise.race(promises).then((results) =>
  //       console.log(results, 'Promise.race for Fast & Long')
  //     );

  //     //Promise.race
  //     Promise.race(promises).then((results) =>
  //       console.log(results, 'Promise race')
  //     );
  //   });
  // ----

  //Promise.all dla Fast i Long
  const handleClick1 = () => {
    Promise.all([fetchDataFast(), fetchDataLong]).then((results) =>
      console.log(results, 'Promise.all for Fast & Long')
    );
  };

  //Promise.all
  const handleClick2 = () => {
    Promise.all(promises).then((results) =>
      console.log(results, 'Promise.all')
    );
  };

  //Promise.allSettled dla Fast i Long
  const handleClick3 = () => {
    Promise.allSettled([fetchDataFast(), fetchDataLong()]).then((results) =>
      console.log(results, 'Promise.allSettled for Fast & Long')
    );
  };

  //Promise.allSettled
  const handleClick4 = () => {
    Promise.allSettled(promises).then((results) =>
      console.log(results, 'Promise.allSettled')
    );
  };

  //Promise.any dla Fast i Long
  const handleClick5 = () => {
    Promise.any([fetchDataFast(), fetchDataLong()]).then((results) =>
      console.log(results, 'Promise.any for Fast & Long')
    );
  };

  //Promise.any
  const handleClick6 = () => {
    Promise.any(promises).then((resolve) =>
      console.log(resolve, 'Promise.any')
    );
  };

  //Promise.race dla Fast i Long
  const handleClick7 = () => {
    Promise.race([fetchDataError(), fetchDataLong()]).then((resolve, reject) =>
      console.log(resolve, reject, 'Promise.race for Fast & Long')
    );
  };

  //Promise.race
  const handleClick8 = () => {
    Promise.race(promises).then((resolve, reject) =>
      console.log(resolve, 'Promise race')
    );
  };

  return (
    <div>
      <p>
        <button onClick={clickHandlerfetchDataFast}>
          Click for fetching data Fast
        </button>
      </p>
      <p>
        <button onClick={clickHandlerfetchDataLong}>
          Click for fetching data Slowlier
        </button>
      </p>
      <p>
        <button onClick={clickHandlerfetchDataError}>
          Click for fetching data with error
        </button>
      </p>
      {/* ----------- */}
      <br />
      <p>
        <button onClick={handleClick1}>Promise.all dla Fast i Long</button>
      </p>
      <p>
        <button onClick={handleClick2}>Promise.all</button>
      </p>
      <p>
        <button onClick={handleClick3}>
          Promise.allSettled dla Fast i Long
        </button>
      </p>
      <p>
        <button onClick={handleClick4}>Promise.allSettled</button>
      </p>
      <p>
        <button onClick={handleClick5}>Promise.any dla Fast i Long</button>
      </p>
      <p>
        <button onClick={handleClick6}>Promise.any</button>
      </p>
      <p>
        <button onClick={handleClick7}>Promise.race dla Long i Error</button>
      </p>
      <p>
        <button onClick={handleClick8}>Promise.race</button>
      </p>
    </div>
  );
}

// useEffect(() => {
//     //Promise.all dla Fast i Long
//     Promise.all(fetchDataFast, fetchDataLong).then((results) =>
//       console.log(results, 'Promise.all for Fast & Long')
//     );

//     //Promise.all
//     Promise.all(promises).then((results) =>
//       console.log(results, 'Promise.all')
//     );

//     //Promise.allSettled dla Fast i Long
//     Promise.allSettled(fetchDataFast, fetchDataLong).then((results) =>
//       console.log(results, 'Promise.allSettled for Fast & Long')
//     );

//     //Promise.allSettled
//     Promise.allSettled(promises).then((results) =>
//       console.log(results, 'Promise.allSettled')
//     );

//     //Promise.any dla Fast i Long
//     Promise.any(promises).then((results) =>
//       console.log(results, 'Promise.any for Fast & Long')
//     );

//     //Promise.any
//     Promise.any(promises).then((results) =>
//       console.log(results, 'Promise.any')
//     );

//     //Promise.race dla Fast i Long
//     Promise.race(promises).then((results) =>
//       console.log(results, 'Promise.race for Fast & Long')
//     );

//     //Promise.race
//     Promise.race(promises).then((results) =>
//       console.log(results, 'Promise race')
//     );
//   });
