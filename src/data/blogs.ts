// src/data/blogs.ts

export interface BlogType {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

export const blogs: BlogType[] = [
  
  {
    id: 1,
    title: "My Journey into Full-Stack Development",
    excerpt:
      "How I transitioned into full-stack development using Java, Spring Boot, React, and modern web tools.",
    content: `
I started my journey as a backend-focused developer working with Java and Spring Boot. Over time, 
I realized the importance of understanding the full stack—how the UI interacts with APIs, 
how state is managed, and how client–server communication works.

### 🌱 Early Learning
I began with:
- Java fundamentals  
- JDBC & SQL  
- Spring Boot basics  
- REST API development  

### ⚛️ Moving to Frontend
To become full-stack, I learned:
- HTML, CSS, JavaScript  
- React.js  
- TypeScript  
- Component architecture  
- Routing and state management  

### 🧩 Why Full-Stack?
Becoming full-stack allowed me to:
- Understand end-to-end flow  
- Work independently on projects  
- Improve debugging skills  
- Collaborate better with teams  

Today, I can design a UI, build APIs, connect both, and deploy a complete working application.
    `,
  },
  {
    id: 2,
    title: "Understanding Microservices as a Beginner",
    excerpt:
      "A simple guide to understanding microservices architecture, service registry, API gateway, and distributed systems.",
    content: `
Microservices architecture divides a large application into small, independent services that 
communicate with each other. This makes systems more scalable, maintainable, and fault-tolerant.

### 🧱 What Are Microservices?
Each service:
- Focuses on a single business capability  
- Has its own codebase  
- Can deploy independently  
- Communicates using REST or messaging systems  

### 🏛 Key Concepts
**1️⃣ API Gateway**  
Acts as the single entry point for all requests.

**2️⃣ Service Registry & Discovery**  
Services register themselves so other services can discover them.

**3️⃣ Load Balancing**  
Distributes traffic across services.

**4️⃣ Distributed Logging & Monitoring**  
Tools like ELK, Prometheus, Grafana.

### 🚀 Real-World Benefits
- Better scalability  
- Faster deployments  
- Technology flexibility  
- Improved fault isolation  

This architecture powers modern companies like Netflix, Uber, Amazon, and many enterprise systems.
    `,
  },
];
