// // Portfolio.tsx
// // Single-file React component for a basic portfolio structure in TypeScript (.tsx) using React.FC.
// // Usage:
// // 1. Create a React app with TypeScript template (e.g., `npx create-react-app my-portfolio --template typescript`).
// // 2. Install and configure Tailwind CSS following the official guide.
// // 3. Place this file as `src/Portfolio.tsx` and import it in `src/index.tsx` or `App.tsx`.
// // 4. Tailwind is used for styling (no external CSS required).

// import React from "react";

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   tags: string[];
//   link: string;
// };

// type Skill = string;

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Project Alpha",
//     description: "A web app that does cool things with data and charts.",
//     tags: ["React", "API", "Charts"],
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "E-commerce UI",
//     description: "A responsive e-commerce UI built with modern components.",
//     tags: ["React", "Tailwind", "UX"],
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Job Scheduler",
//     description: "A distributed scheduler dashboard (backend + frontend).",
//     tags: ["Java", "Spring", "Angular"],
//     link: "#",
//   },
// ];

// const skills: Skill[] = [
//   "Java",
//   "Spring Boot",
//   "React.js",
//   "Angular",
//   "TypeScript",
//   "SQL",
//   "Docker",
//   "AWS",
// ];

// const Nav: React.FC = () => (
//   <nav className="w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
//     <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
//       <div className="text-lg font-semibold">KavyaShree</div>
//       <div className="space-x-4 text-sm hidden md:inline-flex">
//         <a href="#projects" className="hover:underline">
//           Projects
//         </a>
//         <a href="#about" className="hover:underline">
//           About
//         </a>
//         <a href="#skills" className="hover:underline">
//           Skills
//         </a>
//         <a href="#contact" className="hover:underline">
//           Contact
//         </a>
//       </div>
//     </div>
//   </nav>
// );

// const Hero: React.FC = () => (
//   <header className="max-w-5xl mx-auto p-8 pt-16 flex flex-col md:flex-row items-start gap-8">
//     <div className="flex-1">
//       <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//         Hi, I’m KavyaShree — a <span className="text-indigo-600">Full-Stack Developer</span>
//       </h1>
//       <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl">
//         I build reliable and maintainable web applications with Java, Spring Boot, and React.
//         I have experience in microservices, job scheduling systems, and UI development.
//       </p>
//       <div className="mt-6 flex items-center gap-3">
//         <a
//           href="#projects"
//           className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
//         >
//           View Projects
//         </a>
//         <a href="#contact" className="px-4 py-2 text-sm rounded-lg border">
//           Contact
//         </a>
//       </div>
//     </div>

//     <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-yellow-200 to-sky-200 dark:from-yellow-300/40 dark:to-sky-400/30 flex items-center justify-center">
//       {/* Placeholder avatar */}
//       <div className="w-36 h-36 rounded-full bg-white/80 dark:bg-gray-800 flex items-center justify-center text-xl font-medium">
//         KS
//       </div>
//     </div>
//   </header>
// );

// const Projects: React.FC = () => (
//   <section id="projects" className="max-w-5xl mx-auto p-8">
//     <h2 className="text-2xl font-semibold">Projects</h2>
//     <p className="text-gray-600 dark:text-gray-300 mt-2">Selected work — small descriptions and links.</p>

//     <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {projects.map((p) => (
//         <article key={p.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
//           <div className="flex items-center justify-between">
//             <h3 className="font-semibold">{p.title}</h3>
//             <span className="text-xs text-gray-500">Case Study</span>
//           </div>
//           <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
//           <div className="mt-3 flex flex-wrap gap-2">
//             {p.tags.map((t) => (
//               <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
//                 {t}
//               </span>
//             ))}
//           </div>
//           <div className="mt-4">
//             <a href={p.link} className="text-sm underline">
//               View
//             </a>
//           </div>
//         </article>
//       ))}
//     </div>
//   </section>
// );

// const About: React.FC = () => (
//   <section id="about" className="max-w-5xl mx-auto p-8">
//     <h2 className="text-2xl font-semibold">About</h2>
//     <div className="mt-4 text-gray-700 dark:text-gray-300 grid gap-4 md:grid-cols-2">
//       <p>
//         I’m an early-career software developer with hands-on experience in building web
//         applications using Java, Spring Boot, and modern frontend frameworks. I enjoy learning
//         new technologies and improving user experiences.
//       </p>
//       <div>
//         <p className="font-medium">Highlights</p>
//         <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
//           <li>Built a custom job scheduler and notification system.</li>
//           <li>Worked with microservices, Kafka, and Oracle databases.</li>
//           <li>Improved UI flows and reduced task completion time by 20%.</li>
//         </ul>
//       </div>
//     </div>
//   </section>
// );

// const Skills: React.FC = () => (
//   <section id="skills" className="max-w-5xl mx-auto p-8">
//     <h2 className="text-2xl font-semibold">Skills</h2>
//     <p className="text-gray-600 dark:text-gray-300 mt-2">Technologies I work with.</p>

//     <div className="mt-4 flex flex-wrap gap-3">
//       {skills.map((s) => (
//         <span key={s} className="px-3 py-1 border rounded-full text-sm">
//           {s}
//         </span>
//       ))}
//     </div>
//   </section>
// );

// const Contact: React.FC = () => (
//   <section id="contact" className="max-w-5xl mx-auto p-8">
//     <h2 className="text-2xl font-semibold">Contact</h2>
//     <p className="text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out for collaborations or roles.</p>

//     <form className="mt-6 grid gap-3 max-w-xl">
//       <input className="p-3 rounded-md border" placeholder="Your name" />
//       <input className="p-3 rounded-md border" placeholder="Email" />
//       <textarea className="p-3 rounded-md border" rows={4} placeholder="Message"></textarea>
//       <div className="flex items-center gap-3">
//         <button
//           type="button"
//           className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
//         >
//           Send Message
//         </button>
//         <a href="mailto:youremail@example.com" className="text-sm underline">
//           Or email me directly
//         </a>
//       </div>
//     </form>
//   </section>
// );

// const Footer: React.FC = () => (
//   <footer className="mt-12 border-t py-6">
//     <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
//       © {new Date().getFullYear()} KavyaShree. Built with React + Tailwind.
//     </div>
//   </footer>
// );

// const Portfolio: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       <Nav />
//       <main>
//         <Hero />
//         <Projects />
//         <About />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;
