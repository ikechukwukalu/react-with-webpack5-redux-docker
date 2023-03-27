import React, { useEffect } from 'react';
import { HashRouter as Router } from "react-router-dom";
import './App.css';
import Components from './components/index.jsx';

import { useDispatch, useSelector } from 'react-redux'
import { setGlobals, globalsSelector } from './components/redux/globals'

const App = () => {
  const dispatch = useDispatch();
  const { base_url, api_url } = useSelector(globalsSelector);
  console.info(base_url, api_url);

  useEffect(() => {
      dispatch(setGlobals())
  }, [dispatch]);

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