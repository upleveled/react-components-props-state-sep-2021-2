import React, { useState } from 'react';

export default function StateUpdatesArentSynchronous() {
  const [airplane, setAirplane] = useState('737');
  return (
    <>
      <h1>State Updates Aren't Synchronous</h1>
      <div>Current airplane: {airplane}</div>
      <button
        onClick={() => {
          setAirplane('747'); // This doesn't immediately change the value of airplane to '747'
          console.log('airplane', airplane); // airplane 737
        }}
      >
        747
      </button>
    </>
  );
}
