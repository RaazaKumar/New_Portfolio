import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

import './App.css';
import './components/pages/Pages.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Navbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
