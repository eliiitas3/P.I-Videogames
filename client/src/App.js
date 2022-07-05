import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import Create from './components/Create'

function App() {
  return (
  <div>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/Home' element= {<Home/>}/>
      <Route exact path='/videogame/:id' element={<Detail/>}/>
      <Route exact path='/create' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
