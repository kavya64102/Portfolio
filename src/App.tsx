
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";


import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Gallery from "./pages/Gallery";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Nav />
        <main className="mt-4">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

