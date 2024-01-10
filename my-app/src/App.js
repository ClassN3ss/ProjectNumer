import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from './pages/Home.jsx';
import Bisection from './pages/Bisection.jsx';
import FalsePosition from './pages/FalsePosition.jsx';
import OnePointEleration from './pages/OnePointEleration.jsx';
import NewtonRaphson from './pages/NewtonRaphson.jsx';
import Scant from './pages/Scant.jsx';
import Pathanin from './pages/Pathanin.jsx';
import Matix from './pages/Matix.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/bisection'element={<Bisection />} />
      <Route path='/falsePosition'element={<FalsePosition />} />
      <Route path='/onepointeleration'element={<OnePointEleration />} />
      <Route path='/newtonRaphson'element={<NewtonRaphson />} />
      <Route path='/scant'element={<Scant />} />
      <Route path='/pathanin'element={<Pathanin />} />
      <Route path='/matix'element={<Matix />} />
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
};

export default App;