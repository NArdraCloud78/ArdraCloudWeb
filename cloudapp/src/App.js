import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
// import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Index from './Pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="features" element={<Features />} /> */}
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
