import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((store) => store.greeting);

  return (
    <div>
      <h1>{greeting.greeting}</h1>
    </div>
  );
}

export default Greeting;
