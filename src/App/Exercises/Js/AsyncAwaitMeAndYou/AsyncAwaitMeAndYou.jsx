import './styles.css';

// async function doSomethingAsync() {
//   //logic
// }

// const doSomethingAsyncArrowFunc=async()=>{
//   //logic
// }

export function Exercise() {
  const greeting = new Promise((resolve, reject) => {
    resolve('Hello');
  });

  const handleGreeting = () => {
    greeting
      .then((res) => {
        console.log('Greeting done:', res);
      })
      .catch((err) => {
        console.log('Greeting error:', err);
      })
      .finally(() => {
        console.log(
          'The Promise is settled, meaning it has been resolved or rejected.'
        );
      });
  };
  // async po rownasie jest istotny
  const handleGreetingAsync = async () => {
    try {
      const res = await greeting;
      console.log('Greeting from done:', res);
    } catch (err) {
      console.log('Greeting from error:', err);
    } finally {
      console.log(
        'The Promise from async/await is settled, meaning it has been resolved or rejected.'
      );
    }
  };

  //------------------async await with return --------------------------

  // Finally, when returning a Promise inside an async function, you don;t need to use await. So the following is acceptable syntax.
  const getGreeting = async () => {
    return greeting;
  };
  // However, thhere's one exception to this rule: you do need to write return await if you're looking to handle
  //the Promise being rejected in a try...catch block.

  const getGreetingTryCatch = async () => {
    try {
      return await greeting;
    } catch (err) {
      console.log('Greeting from error:', err);
    } finally {
      console.log(
        'The Promise from async/await is settled, meaning it has been resolved or rejected.'
      );
    }
  };

  return (
    <div>
      <button onClick={handleGreeting}>Hello Promise from then/catch</button>
      <button onClick={handleGreetingAsync}>
        Hello Promise from async/await
      </button>
    </div>
  );
}
