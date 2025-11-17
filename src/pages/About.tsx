

import React from 'react';
import { FaReact, FaGitAlt, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiJava } from "react-icons/di";
import { SiAngular, SiOracle, SiPostman } from "react-icons/si";



interface SkillItem {
  name: string;
  icon: React.ReactElement; // Explicitly defining the icon as a React Element
}

// Define the main About component
const About: React.FC = () => {

    // 1. Define the skill data directly within the component
    const skillsData: SkillItem[] = [
        { name: 'Java', icon: <DiJava /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <DiNodejs /> },
        { name: 'Javascript', icon: <DiJavascript1 /> },
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'Oracle', icon: <SiOracle /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'Figma', icon: <FaFigma /> },
        
        
    ];

    return (
        <section id="about" >
        <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
            <div className="about-content">
                <div className="about-text">
                    
                     <p>
            Hi, my name is <b>KavyaShreei</b> and I am from Limerick, Ireland.
            I'm a <b>Java Full stack developer</b> and a Postgrad student at University Of Limerick, Ireland. <br/><br/>
            I have 2 years of Work Experience as  <b>software developer</b> at Arrow Electronics.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
           
          </p>
                </div>
                 <a
    href={`${import.meta.env.BASE_URL}KAVYASHREE_SL_RESUME.pdf`}
    download="KAVYASHREE_SL_RESUME.pdf"
    className="resume-button inline-block mt-4 px-6 py-3 bg-[#7a55ad] !text-white font-bold rounded-lg hover:bg-[#624983]hover:bg-indigo-700 transition !no-underline"
>
    Download Resume
  </a>

                {/* 2. Skills Grid Section */}
                <div className="skills-grid">
                    <h3 className="skills-subheading">My Tech Stack</h3>
                    <div className="skills-container">
                        {skillsData.map((skill, index) => (
                            // Use skill.name for the title and the icon for display
                            <div title={skill.name} className='SkillBox' key={index}>
                                {skill.icon}
                                <span className="skill-name-label">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Skills Grid Section */}
            </div>
            </div>
            </div>
        </section>
    );
};

export default About;

