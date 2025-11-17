import React from "react";
import { FaTrophy, FaBriefcase, FaCertificate } from "react-icons/fa";

interface AchievementItem {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "hackathon" | "job" | "award";
}

const achievementsData: AchievementItem[] = [
  {
    id: 1,
    title: "Smart India Hackathon Winner",
    description:
      "Led a 7-person team to develop a project that won the national-level Smart India Hackathon 2022.",
    date: "April 2022",
    type: "hackathon",
  },
  {
    id: 2,
    title: "Arrow Electronics - Software Developer",
    description:
      "Contributed to the development of an in-house job scheduling system using Java, Spring Boot, and Angular.",
    date: "Nov 2023 - Nov 2024",
    type: "job",
  },
  {
    id: 3,
    title: "Oxygen Supply Monitoring System",
    description:
      "Designed a system to automate oxygen supply for patients, reducing wastage by 50%.",
    date: "Dec 2021",
    type: "award",
  },
  {
    id: 4,
    title: "TNS Coding Competition Runner-up",
    description:
      "Secured runner-up position in a coding competition conducted in collaboration with Capgemini.",
    date: "2023",
    type: "award",
  },
];

const getIcon = (type: AchievementItem["type"]) => {
  switch (type) {
    case "hackathon":
      return <FaTrophy className="text-yellow-500 w-6 h-6" />;
    case "job":
      return <FaBriefcase className="text-indigo-500 w-6 h-6" />;
    case "award":
      return <FaCertificate className="text-green-500 w-6 h-6" />;
    default:
      return null;
  }
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="section-heading">
        My <span className="highlight">Achievements</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((ach) => (
          <div
            key={ach.id}
            className="relative bg-[#1a1a3a] shadow-lg rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
              {getIcon(ach.type)}
            </div>

            {/* Content */}
            <div className="mt-6 text-center">
              <h3 className="font-semibold text-lg text-[#a78bfa]">{ach.title}</h3>
              <p className="text-white mt-2">{ach.description}</p>
              <span className="text-sm text-white mt-2 block">{ach.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
