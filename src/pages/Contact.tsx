// import React from "react";

// const Contact: React.FC = () => (
//   <section className="max-w-5xl mx-auto p-8">
//     <h2 className="text-2xl font-semibold">Contact</h2>
//     <form className="mt-6 grid gap-3 max-w-xl">
//       <input className="p-3 rounded-md border" placeholder="Your name" />
//       <input className="p-3 rounded-md border" placeholder="Email" />
//       <textarea className="p-3 rounded-md border" rows={4} placeholder="Message"></textarea>
//       <div className="flex items-center gap-3">
//         <button type="button" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
//           Send Message
//         </button>
//         <a href="mailto:youremail@example.com" className="text-sm underline">Or email me directly</a>
//       </div>
//     </form>
//   </section>
// );

// export default Contact;
import React from "react";

const Contact: React.FC = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">Contact</h2>
    <p className="mt-2 text-gray-600 dark:text-gray-300 text-center md:text-left">
      Feel free to reach out for collaborations or roles.
    </p>

    <form className="mt-6 grid gap-4 sm:gap-6 max-w-xl mx-auto md:mx-0">
      <input
        className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        placeholder="Your Name"
      />
      <input
        type="email"
        className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        placeholder="Email"
      />
      <textarea
        className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        rows={4}
        placeholder="Message"
      />
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <button
          type="button"
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm sm:text-base hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          Send Message
        </button>
        <a
          href="mailto:youremail@example.com"
          className="text-indigo-600 hover:underline text-sm sm:text-base"
        >
          Or email me directly
        </a>
      </div>
    </form>
  </section>
);

export default Contact;
