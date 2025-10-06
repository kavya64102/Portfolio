
import React from "react";
import { Link } from "react-router-dom";
import Typed from "./Typed";

const Hero: React.FC = () => (
    <div>
  <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 flex flex-col md:flex-row items-center md:items-start gap-8">
    <div className="flex-1 text-center md:text-left">
     
      <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'm <b>KavyaShree</b></h1>
         <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight " ><Typed/>  </span> 
          </div>
      
      <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
        <Link to="/projects" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm sm:text-base font-medium hover:bg-indigo-700">
          View Projects
        </Link>
        <Link to="/contact" className="px-4 py-2 rounded-lg border text-sm sm:text-base hover:bg-gray-100 dark:hover:bg-gray-700">
          Contact
        </Link>
      </div>
     
    </div>

    <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-200 to-sky-200 dark:from-yellow-300/40 dark:to-sky-400/30 flex items-center justify-center text-2xl font-bold text-white">
      KS
    </div>
  </header>
 
   <div className='AboutPage' >
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
           I’m KavyaShree, an early-career software developer with hands-on experience in building 
            scalable web applications using <b>Java</b>, <b>Spring Boot</b>, <b>React.js</b>, and <b>Angular</b>. <br/>
           <br/> I have worked on microservice-based architectures and notification platforms. I enjoy learning new technologies, optimizing code, 
            and creating intuitive interfaces that solve real-world problems. 
          </p>
        </div>
       
      </div>
      </div>
);

export default Hero;
