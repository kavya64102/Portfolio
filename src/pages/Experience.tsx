import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Arrow Electronics',
      duration: 'November 2023 - July 2025',
      location: 'Bangalore, India',
      description: [
        'Developed and maintained high-performance microservices using Java and Spring Boot.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Optimized database queries and improved application response time by 15%.'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Intern',
      company: ' NilAdvantage Pvt Ltd, Bangalore, India',
      duration: 'August 2022 - October 2022',
      location: 'Bangalore, India',
      description: [
        'Contributed to the development of a customer-facing dashboard using React and Node.js.',
        'Implemented RESTful APIs and integrated MongoDB for data persistence.',
        'Participated in daily stand-ups and code review processes.'
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-heading">
        Work <span className="highlight">Experience</span>
      </h2>
      
      {/* Container for the unique card layout */}
      <div className="experience-card-container">
        {experienceData.map((job) => (
          <div key={job.id} className={`job-card-wrapper job-card-${job.id}`}>
            <div className="job-card-unique">
              
              {/* Header */}
              <div className="card-header-unique">
                <div className="title-block">
                  <FaBriefcase className="card-icon" />
                  <h3 className="job-title-unique">{job.title}</h3>
                </div>
                <span className="duration-tag">
                  <FaCalendarAlt /> {job.duration}
                </span>
              </div>
              
              {/* Company & Location */}
              <div className="company-info">
                <h4 className="company-name-unique">{job.company}</h4>
                <p className="location-info">
                  <FaMapMarkerAlt /> {job.location}
                </p>
              </div>
              
              {/* Description */}
              <ul className="job-description-list-unique">
                <p className="responsibility-heading">Key Responsibilities:</p>
                {job.description.map((point, index) => (
                  <li key={index} className="description-point-unique">
                    <FaCode className="bullet-icon" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}