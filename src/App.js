import { Route, Routes } from 'react-router-dom';

import './App.css';
import Assets from './components/Assets';
import Details from './components/Details';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Assets />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
