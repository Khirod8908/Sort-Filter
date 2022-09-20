import React from 'react';
import './style.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
// const AboutUs = React.lazy(() => import('./components'));
import { Routes, Route } from 'react-router-dom';
import ProtectRouter from './ProtectRouter';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
