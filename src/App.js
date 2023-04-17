import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Assets from './components/Assets';
import Details from './components/Details';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Assets />} />
        <Route path="details" element={<Details />} />
      </Routes> 
    </>
  );
}

export default App;
