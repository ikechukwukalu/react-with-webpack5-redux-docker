import React, { useEffect } from 'react';
import Components from './components/index.tsx';
import './App.css';
import 'bootstrap';

const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, []);

  return (
    <Components />
  );
}

export default App;