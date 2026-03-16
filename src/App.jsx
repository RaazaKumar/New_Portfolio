import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import "./App.css";
import "./components/pages/Pages.css";

/* Lazy Loading Pages */
const About = lazy(() => import("./components/pages/About"));
const Resume = lazy(() => import("./components/pages/Resume"));
const Portfolio = lazy(() => import("./components/pages/Portfolio"));
const Contact = lazy(() => import("./components/pages/Contact"));

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />

        <main className="main-content">
          <Navbar />

          <div className="page-content">
            <Suspense fallback={<div className="page-loader">Loading...</div>}>
              <Routes>
                {/* Redirect root to about */}
                <Route path="/" element={<Navigate to="/about" replace />} />

                {/* Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

                {/* 404 Page */}
                <Route path="*" element={<Navigate to="/about" replace />} />
              </Routes>
            </Suspense>
          </div>

        </main>
      </div>
    </Router>
  );
}

export default App;