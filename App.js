import React from 'react';
import './style.css';
import About from './components/About';
import Home from './components/Home';
import Model from './components/helper/model/Model';
// const AboutUs = React.lazy(() => import('./components'));
import { Routes, Route } from 'react-router-dom';
import ProtectRouter from './ProtectRouter';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </div>
  );
}
