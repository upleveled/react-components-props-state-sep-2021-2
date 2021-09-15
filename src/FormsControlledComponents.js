import { useState } from 'react';

export default function FormsControlledComponents() {
  // 1. Create a state variable for the controlled component
  const [name, setName] = useState('');
  // 1. Create a state variable for the controlled component
  const [bringingADog, setBringingADog] = useState(false);
  // 1. Create a state variable for the controlled component
  const [baggageType, setBaggageType] = useState('cabin');
  return (
    <>
      <h1>Forms Controlled Components</h1>
      <div>
        <form
          onSubmit={(event) => {
            console.log('submitted', name);
            event.preventDefault();
          }}
        >
          <label>
            Name:
            <input
              // 2. Connect the state variable to the controlled component
              value={name}
              // 3. Change the state variable when the user interacts
              onChange={(event) => setName(event.currentTarget.value)}
            />
          </label>
          <div>Output of the name: {name}</div>

          <label>
            <input
              type="checkbox"
              // 2. Connect the state variable to the controlled component
              checked={bringingADog}
              // 3. Change the state variable when the user interacts
              onChange={(event) => setBringingADog(event.currentTarget.checked)}
            />
            Bringing a dog?
          </label>

          <div>
            Output of "bringing a dog": {bringingADog ? 'true' : 'false'}
          </div>

          <label>
            <select
              // 2. Connect the state variable to the controlled component
              value={baggageType}
              // 3. Change the state variable when the user interacts
              onChange={(event) => setBaggageType(event.currentTarget.value)}
            >
              <option value="cabin">cabin</option>
              <option value="checked">checked</option>
            </select>
          </label>

          <div>Output of "baggage type": {baggageType}</div>
        </form>
      </div>
    </>
  );
}
