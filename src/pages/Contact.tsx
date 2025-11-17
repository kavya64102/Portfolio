// /**
//  * Contact form component
//  * @returns JSX.Element
//  */

// import React from "react";

// const Contact: React.FC = () => (
//   <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//     <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">Contact</h2>
//     <p className="mt-2 text-gray-600 dark:text-gray-300 text-center md:text-left">
//       Feel free to reach out for collaborations or roles.
//     </p>

//     <form className="mt-6 grid gap-4 sm:gap-6 max-w-xl mx-auto md:mx-0">
//       <input
//         className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//         placeholder="Your Name"
//       />
//       <input
//         type="email"
//         className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//         placeholder="Email"
//       />
//       <textarea
//         className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//         rows={4}
//         placeholder="Message"
//       />
//       <div className="flex flex-col sm:flex-row gap-3 items-center">
//         <button
//           type="button"
//           className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm sm:text-base hover:bg-indigo-700 transition-colors w-full sm:w-auto"
//         >
//           Send Message
//         </button>
//         <a
//           href="mailto:youremail@example.com"
//           className="text-indigo-600 hover:underline text-sm sm:text-base"
//         >
//           Or email me directly
//         </a>
//       </div>
//     </form>
//   </section>
// );

// export default Contact;


// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState<string | null>(null);

//   // 🔹 Validation helper
//   const validateForm = () => {
//     if (formData.name.trim().length < 2) {
//       setStatusMessage("❌ Name must be at least 2 characters.");
//       return false;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       setStatusMessage("❌ Please enter a valid email address.");
//       return false;
//     }

//     if (formData.message.trim().length < 10) {
//       setStatusMessage("❌ Message must be at least 10 characters.");
//       return false;
//     }

//     return true;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setStatusMessage(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatusMessage(null);

//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       await emailjs.send(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         "YOUR_PUBLIC_KEY"
//       );

//       setStatusMessage("✅ Message sent! A confirmation email has been sent.");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error(error);
//       setStatusMessage("❌ Something went wrong. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">
//         Contact
//       </h2>
//       <p className="mt-2 text-gray-600 dark:text-gray-300 text-center md:text-left">
//         Feel free to reach out for collaborations or roles.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="mt-6 grid gap-4 sm:gap-6 max-w-xl mx-auto md:mx-0"
//       >
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//           placeholder="Your Name"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//           placeholder="Email"
//           required
//         />

//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//           rows={4}
//           placeholder="Message"
//           required
//         />

//         <div className="flex flex-col sm:flex-row gap-3 items-center">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm sm:text-base hover:bg-indigo-700 transition-colors w-full sm:w-auto ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </div>

//         {statusMessage && (
//           <p className="mt-3 text-center md:text-left">{statusMessage}</p>
//         )}
//       </form>
//     </section>
//   );
// };

// export default Contact;



//import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact: React.FC = () => {
//   const form = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.current) return;

//     setLoading(true);

//     const serviceID = "service_qinirmy";      // service id
//     const templateToYou = "template_ifn2u8r"; // template that sends to you
//     const templateReply = "template_u07pqq6";  // auto-reply template
//     const publicKey = "l_SjeQJMpb1HWBMiT";      // publickey

//     try {
//       // 1️⃣ Send email to YOU
//       await emailjs.sendForm(serviceID, templateToYou, form.current, publicKey);

//       // 2️⃣ Auto-reply to the USER
//       await emailjs.sendForm(serviceID, templateReply, form.current, publicKey);

//       alert("Message sent successfully!");

//       form.current.reset();
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send message. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">
//         Contact
//       </h2>
//       <p className="mt-2 text-gray-600 text-center md:text-left">
//         Feel free to reach out for collaborations or opportunities.
//       </p>

//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="mt-6 max-w-xl mx-auto bg-white shadow-md rounded-xl p-6"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           required
//           className="p-3 rounded-lg border border-gray-300 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           required
//           className="p-3 rounded-lg border border-gray-300 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           required
//           rows={4}
//           className="p-3 rounded-lg border border-gray-300 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:bg-indigo-300"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [statusMessage, setStatusMessage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatusMessage(null);

//     try {
//       await emailjs.send(
//         "service_qinirmy",     // from EmailJS dashboard
//         "template_ifn2u8r",    // template you created
//         {
//           user_name: formData.name,
//           user_email: formData.email,
//           message: formData.message,
//         },
//         "l_SjeQJMpb1HWBMiT"      // from EmailJS dashboard
//       );
//       await emailjs.send(
//   "service_qinirmy",
//   "template_u07pqq6", // auto-reply template
//   {
//     user_name: formData.name,
//     user_email: formData.email,
//     message: formData.message,
//     to_email: formData.email,
//   },
//   "l_SjeQJMpb1HWBMiT"
// );
//       setStatusMessage("✅ Message sent! A confirmation email has been sent to you.");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error(error);
//       setStatusMessage("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">
//         Contact
//       </h2>
//       <p className="mt-2 text-gray-600 dark:text-gray-300 text-center md:text-left">
//         Feel free to reach out for collaborations or roles.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="mt-6 grid gap-4 sm:gap-6 max-w-xl mx-auto md:mx-0"
//       >
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//           className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows={4}
//           placeholder="Message"
//           required
//           className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 w-full"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//         {statusMessage && <p className="mt-3 text-center md:text-left">{statusMessage}</p>}
//       </form>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatusMessage(null);

    // Your EmailJS IDs
    const serviceID = "service_qinirmy";
    const templateToYou = "template_ifn2u8r"; // Email to you
    const templateReply = "template_u07pqq6"; // Auto-reply to user
    const publicKey = "l_SjeQJMpb1HWBMiT";

    try {
      //  Send email TO YOU
      await emailjs.sendForm(serviceID, templateToYou, form.current, publicKey);

    //  Auto-reply to USER
const formElements = form.current.elements as HTMLFormControlsCollection;

const nameValue = (formElements.namedItem("name") as HTMLInputElement).value;
const emailValue = (formElements.namedItem("email") as HTMLInputElement).value;
const messageValue = (formElements.namedItem("message") as HTMLTextAreaElement).value;

await emailjs.send(serviceID, templateReply, {
  name: nameValue,
  email: emailValue,
  message: messageValue,
  to_email: emailValue, // recipient for auto-reply
}, publicKey);

// After sending emails successfully
await fetch("http://localhost:5001/store-message", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: nameValue,
    email: emailValue,
    message: messageValue,
  }),
});

      setStatusMessage(
        "✅ Message sent! A confirmation email has been sent to you."
      );
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:center">
      <h2 className="text-3xl sm:text-3xl font-semibold text-center md:text-center">
        Contact
      </h2>
      <p className="mt-2 text-gray-600 text-center md:text-center">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        // className="mt-6 max-w-2xl   shadow-md rounded-xl p-6 grid gap-4 "
        className="mt-6 max-w-2xl mx-auto shadow-md rounded-xl p-6 grid gap-4"

      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:bg-indigo-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {statusMessage && (
          <p className="mt-3 text-center md:text-left">{statusMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
