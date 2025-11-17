
// import { FaExternalLinkAlt } from 'react-icons/fa';



// export default function Projects() {
//   const projectData = [
//     {
//       id: 1,
//       name: 'Aadhar Pay (Hackathon Winner)',
//       description: 'A cashless payment application for Aadhar centers, reducing overcharging by 70%, and improving transaction transparency.',
//       tech: ['React.js', 'Python', 'MySQL'],
//       achievements: [
//         'Reduced overcharging by 70%, improved transaction transparency for over 100 users.',
//         'Secured funding approval from The Ministry of Education\'s Innovation Cell, selected from over 100 projects.'
//       ],
//     },
//     {
//       id: 2,
//       name: 'Oxygen Supply Monitoring System',
//       description: 'A system to automate respiratory oxygen supply to patients, reducing oxygen wastage and enhancing care.',
//       tech: ['Java', 'Automation Logic', 'IoT/Sensors'],
//       achievements: [
//         'Reduced oxygen wastage by 50% through automated supply control.',
//         'Awarded an incentive for submitting the best idea among 100 teams.'
//       ],
      
//     },
//     {
//       id: 3,
//       name: 'Lung Cancer Detection Model',
//       description: 'Early-stage cancer detection model integrating machine learning with medical imaging for reliable diagnostics.',
//       tech: ['Machine Learning', 'Medical Imaging', 'Python'],
//       achievements: [
//         'Achieved 90% accuracy in identifying malignancies.',
//         'Resulted in a more reliable diagnostic tool for early-stage detection.'
//       ],
      
//     },
//   ];

//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="section-heading">
//         Key <span className="highlight">Projects & Achievements</span>
//       </h2>
      
//       <div className="projects-grid-container">
//         {projectData.map((project) => (
//           <div 
//             key={project.id} 
//             className="project-card" // Removed conditional class
//           >
            

//             {/* Content Area */}
//             <div className="project-content">
//               <h3 className="project-name">{project.name}</h3>
//               <p className="project-description">{project.description}</p>
              
//               {/* Tech Stack */}
//               <div className="tech-stack">
//                 {project.tech.map((tech, index) => (
//                   <span key={index} className="tech-tag">{tech}</span>
//                 ))}
//               </div>
              
              

//               {/* Links (Placeholder) */}
//               <div className="project-links">
//                 <a href="#!" target="_blank" rel="noopener noreferrer" className="project-link github-link" title="Project Details">
//                     <FaExternalLinkAlt /> View Details
//                   </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





import { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import gsap from "gsap";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

  const cardsRef = useRef<HTMLDivElement[]>([]);

  const allTech = [...new Set(projectsData.flatMap((p) => p.tech))];

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    const matchesTech = selectedTech ? project.tech.includes(selectedTech) : true;
    return matchesSearch && matchesTech;
  });

  // Initial and filtered animations
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" }
    );
  }, [search, selectedTech]);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading text-center">
        Key <span className="highlight">Projects & Achievements</span>
      </h2>

      {/* Search + Filter */}
      <div className="max-w-4xl mx-auto mt-6 grid gap-4 sm:grid-cols-2">
        <input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Filter by Tech</option>
          {allTech.map((tech, idx) => (
            <option key={idx} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      {/* Horizontal Timeline Line */}
      <div className="relative max-w-6xl mx-auto mt-12">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-300 transform -translate-y-1/2"></div>

        <div className="flex gap-8 overflow-x-auto py-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative project-card bg-indigo-1000 p-4 rounded-lg shadow-md min-w-[250px] hover:scale-105 transition-transform duration-300 flex-shrink-0"
            >
              {/* Circle to show timeline milestone */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></div>

              <div className="project-content mt-4">
                <h3 className="project-name font-semibold">{project.name}</h3>
                <p className="project-description text-white">{project.description}</p>
                <div className="tech-stack mt-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag mr-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links mt-2">
                  <a href="https://github.com/kavya64102?tab=repositories" className="project-link text-indigo-600 inline-flex items-center gap-2">
                    <FaExternalLinkAlt /> View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
