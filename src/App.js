import React from 'react';
import './App.css';
import Home from './component/home';
import { Routes, Route } from "react-router-dom";
import Men from './component/Men';
import Kids from './component/kid';
import Bag from './component/bag';
import 'antd/dist/antd.css';
import Sign from './component/signup';
import Login from './component/login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kid' element={<Kids />} />
        <Route path='/' element={<Sign />} />
        <Route path='/bag' element={<Bag />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
