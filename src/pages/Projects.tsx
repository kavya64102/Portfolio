
import { FaExternalLinkAlt } from 'react-icons/fa';



export default function Projects() {
  const projectData = [
    {
      id: 1,
      name: 'Aadhar Pay (Hackathon Winner)',
      description: 'A cashless payment application for Aadhar centers, reducing overcharging by 70%, and improving transaction transparency.',
      tech: ['React.js', 'Python', 'MySQL'],
      achievements: [
        'Reduced overcharging by 70%, improved transaction transparency for over 100 users.',
        'Secured funding approval from The Ministry of Education\'s Innovation Cell, selected from over 100 projects.'
      ],
    },
    {
      id: 2,
      name: 'Oxygen Supply Monitoring System',
      description: 'A system to automate respiratory oxygen supply to patients, reducing oxygen wastage and enhancing care.',
      tech: ['Java', 'Automation Logic', 'IoT/Sensors'],
      achievements: [
        'Reduced oxygen wastage by 50% through automated supply control.',
        'Awarded an incentive for submitting the best idea among 100 teams.'
      ],
      
    },
    {
      id: 3,
      name: 'Lung Cancer Detection Model',
      description: 'Early-stage cancer detection model integrating machine learning with medical imaging for reliable diagnostics.',
      tech: ['Machine Learning', 'Medical Imaging', 'Python'],
      achievements: [
        'Achieved 90% accuracy in identifying malignancies.',
        'Resulted in a more reliable diagnostic tool for early-stage detection.'
      ],
      
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">
        Key <span className="highlight">Projects & Achievements</span>
      </h2>
      
      <div className="projects-grid-container">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            className="project-card" // Removed conditional class
          >
            

            {/* Content Area */}
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              

              {/* Links (Placeholder) */}
              <div className="project-links">
                <a href="#!" target="_blank" rel="noopener noreferrer" className="project-link github-link" title="Project Details">
                    <FaExternalLinkAlt /> View Details
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}