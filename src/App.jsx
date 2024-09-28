// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Study from './Pages/Study';
import Chat from './Pages/Chat';
import Graph from './Pages/Graph';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Study" element={<Study/>} />
        <Route path='/Chat' element={<Chat/>}></Route>
        <Route path='Graph' element={<Graph/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
