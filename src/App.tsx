import React, { useEffect } from 'react';
import Components from './components/index.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobals, globalsSelector } from './components/redux/globals/index.tsx';
import './App.css';
import 'bootstrap';

const App = () => {
  const dispatch = useDispatch();
  const { base_url, api_url } = useSelector(globalsSelector);

  useEffect(() => {
      dispatch(setGlobals())
  }, [base_url, api_url]);

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