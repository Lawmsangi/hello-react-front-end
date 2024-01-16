import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getGreeting } from './redux/greetingSlice';
import Greeting from './components/Greeting';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default App;
