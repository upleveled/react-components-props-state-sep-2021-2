import { useState } from 'react';

export default function Counter() {
  // State Variables 1. Declare "state variable" which will
  // change in the future
  //
  // The `count` state variable is initialized
  // with a starting value of 0
  const [count, setCount] = useState(0);

  // State Variables 2. After the line above, you can use the
  // state variable like a normal variable...
  //
  // ...for example, with a console.log()
  console.log('count: ', count);

  return (
    <>
      {/* ...and also, showing the value on the page */}
      <div style={{ color: 'red', fontSize: 50 }}>count: {count}</div>

      {/*
         State Variables 3. At any point in the future, you can call the
      setCount function and this will update the value
       */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(10)}>10</button>
    </>
  );
}
