import { useState } from 'react';

export default function ConditionalRendering() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <>
      <h1>Conditional Rendering</h1>
      <div>
        {
          // Ternary operator (sometimes referred to as a "short if")
          isLightOn ? 'light is on' : 'light is not on'
          // You may want to have a longer, more explicit condition
          // isLightOn === true ? 'light is on' : 'light is not on'
        }
      </div>
      <button onClick={() => setIsLightOn(true)}>turn light on</button>
      <button onClick={() => setIsLightOn(false)}>turn light off</button>
      <button onClick={() => setIsLightOn(!isLightOn)}>toggle light</button>

      {/* This will be a more robust way to toggle */}
      <button onClick={() => setIsLightOn((previousState) => !previousState)}>
        toggle light
      </button>

      <h2>Boolean Operator</h2>
      {isLightOn === true && 'light is on'}
      {isLightOn === false && 'light is off'}
    </>
  );
}
