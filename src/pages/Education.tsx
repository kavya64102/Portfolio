// import React from 'react';
// import { FaGraduationCap, FaCalendarAlt, FaStar } from 'react-icons/fa';


// export default function Education() {
//   const educationData = [
//     {
//       id: 1,
//       degree: 'Masters of Science in Software Engineering',
//       University: 'University of Limerick, Irealnd',
//       year: '2025 - present',
      
//     },
//     {
//       id: 2,
//       degree: 'Bachelor of Engineering (B.E) in Computer Science',
//       institution: 'K.S Institute Of Technology, Bangalore',
//       year: '2019 - 2023',
//       gpa: '8.58/10'
//     },
//     {
//       id: 3,
//       degree: 'High School',
//       institution: 'Jain Pre-University College, Bangalore',
//       year: '2017 - 2019',
//       gpa: '80%'
//     },
//     {
//       id: 3,
//       degree: 'Secondary School',
//       institution: 'Sri Krishna International School, Bangalore',
//       year: '2016 - 2017',
//       gpa: '77%'
//     }
//   ];

//   return (
//     <section id="education" className="education-section">
//       <h2 className="section-heading">
//         My <span className="highlight">Education</span>
//       </h2>
      
//       {/* Container for the timeline layout */}
//       <div className="timeline-container">
//         {educationData.map((edu) => (
//           <div key={edu.id} className="timeline-item">
            
//             {/* The main content box */}
//             <div className="timeline-card">
//               <h3 className="degree-title">
//                 <FaGraduationCap className="icon-main" /> {edu.degree}
//               </h3>
//               <h4 className="institution">{edu.institution}</h4>
              
//               {/* Details line */}
//               <div className="timeline-details">
//                 <span className="detail-tag">
//                   <FaCalendarAlt /> {edu.year}
//                 </span>
//                 <span className="detail-tag gpa-tag">
//                   <FaStar /> {edu.gpa}
//                 </span>
//               </div>
//             </div>
            
//             {/* The decorative circle in the middle */}
//             <div className="timeline-circle"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'Masters of Science in Software Engineering',
      institution: 'University of Limerick, Ireland', // Using 'institution' for consistency
      year: '2025 - present',
      gpa: 'N/A' // Placeholder since it's current
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering (B.E) in Computer Science',
      institution: 'K.S Institute Of Technology, Bangalore',
      year: '2019 - 2023',
      gpa: '8.58/10'
    },
    {
      id: 3,
      degree: 'High School',
      institution: 'Jain Pre-University College, Bangalore',
      year: '2017 - 2019',
      gpa: '80%'
    },
    {
      id: 4, // Corrected duplicate ID
      degree: 'Secondary School',
      institution: 'Sri Krishna International School, Bangalore',
      year: '2016 - 2017',
      gpa: '77%'
    }
  ];

  return (
    <section id="education" className="education-section-simple">
      <h2 className="section-heading-simple">
        My <span className="highlight">Education</span>
      </h2>
      
      {/* Container for the simple stacked cards */}
      <div className="education-list-simple">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-card-simple">
            
            {/* Degree Title */}
            <h3 className="degree-title-simple">
              {edu.degree}
            </h3>
            
            {/* Institution Name */}
            <h4 className="institution-simple">{edu.institution}</h4>
            
            {/* Details (Year and GPA) */}
            <div className="education-details-simple">
              <span className="detail-tag-simple">
                Year: {edu.year}
              </span>
              <span className="detail-tag-simple">
                GPA/Percentage: {edu.gpa}
              </span>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}