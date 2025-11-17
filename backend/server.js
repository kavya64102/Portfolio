


// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Configure Nodemailer (Gmail recommended)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "kavyashreesl27401@gmail.com",       // Gmail
//     pass: "ainz udid zfql jlor",               // 16-digit Gmail App Password
//   },
// });

// // Contact API
// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: "Missing fields" });
//   }

//   try {
//     // 1️⃣ Email to YOU (the owner)
//     await transporter.sendMail({
//       from: email,
//       to: "kavyashreesl27401@gmail.com", 
//       subject: `Portfolio Contact: Message from ${name}`,
//       html: `
//         <h2>New Portfolio Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `,
//     });

//     // 2️⃣ Auto-Reply to USER
//     await transporter.sendMail({
//       from: "kavyashreesl27401@gmail.com",
//       to: email,
//       subject: "Thank you for contacting me!",
//       html: `
//         <p>Hi ${name},</p>
//         <p>Thank you for reaching out through my portfolio website.</p>
//         <p>I have received your message and will respond shortly.</p>
//         <br>
//         <p><strong>Your message:</strong></p>
//         <p>${message}</p>
//         <br>
//         <p>Warm regards,<br>Kavya</p>
//       `,
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error("EMAIL ERROR:", error);
//     res.status(500).json({ success: false, message: "Email failed" });
//   }
// });

// // Start server
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });



// require("dotenv").config();
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // JSON file path
// const dbPath = path.join(__dirname, "messages.json");

// // Ensure messages.json exists
// if (!fs.existsSync(dbPath)) {
//   fs.writeFileSync(dbPath, JSON.stringify([]));
// }

// // Read messages from file
// function readMessages() {
//   return JSON.parse(fs.readFileSync(dbPath, "utf8"));
// }

// // Save new message into JSON
// function saveMessage(newMessage) {
//   const messages = readMessages();
//   messages.push(newMessage);
//   fs.writeFileSync(dbPath, JSON.stringify(messages, null, 2));
// }

// // Nodemailer setup using ENV variables
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // <-- comes from .env
//     pass: process.env.EMAIL_PASS, // <-- app password from .env
//   },
// });

// // Contact API
// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: "Missing fields" });
//   }

//   try {
//     // Save message into JSON database
//     saveMessage({
//       name,
//       email,
//       message,
//       date: new Date().toISOString(),
//     });

//     // 1️⃣ Email to YOU
//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `Portfolio Contact: Message from ${name}`,
//       html: `
//         <h2>New Portfolio Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `,
//     });

//     // 2️⃣ Auto-reply to User
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Thank you for contacting me!",
//       html: `
//         <p>Hi ${name},</p>
//         <p>Thank you for reaching out through my portfolio website.</p>
//         <p>I have received your message and will respond shortly.</p>
//         <br>
//         <p><strong>Your message:</strong></p>
//         <p>${message}</p>
//         <br>
//         <p>Warm regards,<br>Kavya</p>
//       `,
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error("EMAIL ERROR:", error);
//     res.status(500).json({ success: false, message: "Email failed" });
//   }
// });

// // Start server
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Path to JSON file
const dbPath = path.join(__dirname, "messages.json");

// Ensure file exists
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([]));
}

// Endpoint to store messages
app.post("/store-message", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const messages = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  messages.push({ name, email, message, date: new Date().toISOString() });
  fs.writeFileSync(dbPath, JSON.stringify(messages, null, 2));

  res.json({ success: true });
});

// Start the server
app.listen(5001, () => console.log("📥 Message storage server running on http://localhost:5001"));

