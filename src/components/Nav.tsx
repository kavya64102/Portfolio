import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => (
  <nav className="w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
    <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
      <div className="text-lg font-semibold">KavyaShree</div>
      <div className="space-x-6 s text-lg hidden md:inline-flex" >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        {/* <Link to="/gallery">Gallery</Link> */}
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Nav;




