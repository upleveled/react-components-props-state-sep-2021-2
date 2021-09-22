import { useState } from 'react';

export default function ControlledComponents() {
  // 1. Create a state variable
  const [myInput, setMyInput] = useState('');
  const [myCheckbox, setMyCheckbox] = useState(false);
  // 2. create The input wiht an onChange Function that update State
  // 3. connect the value of the input with the state variable
  return (
    <div>
      <input
        value={myInput}
        onChange={(e) => setMyInput(e.currentTarget.value)}
      />
      <input
        type="checkbox"
        checked={myCheckbox}
        onChange={(e) => setMyCheckbox(e.currentTarget.checked)}
      />
    </div>
  );
}
