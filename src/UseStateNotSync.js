import { useState } from 'react';

export default function UseStateNotSync() {
  const [title, setTitle] = useState('not sync');
  // const [title2, setTitle2] = useState('not sync2');

  function clickHandler(newTitle) {
    setTitle(newTitle);
    console.log(title);
    // setTitle2('new Title2' + newTitle);
  }

  return (
    <div>
      <h1>{title}</h1>
      <h1>{}</h1>
      <button onClick={() => clickHandler('new Title')}>click</button>
      <button onClick={() => clickHandler('button 2')}>button 2</button>
      <button onClick={() => clickHandler('new Title')}>click</button>
    </div>
  );
}
