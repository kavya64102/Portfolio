// import React from "react";
// import TechFeed from "../components/TechFeed";

// const Blog: React.FC = () => {
//   return (
//     <section style={styles.section}>
//       <h1 style={styles.heading}>Blog & Tech Insights</h1>

//       <p style={styles.subtext}>
//         Explore curated content on the latest developments in technology.
//       </p>

//       {/* Dynamic Technology Feed */}
//       <TechFeed />
//     </section>
//   );
// };

// const styles = {
//   section: {
//     padding: "50px 20px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   heading: {
//     fontSize: "32px",
//     fontWeight: 700,
//     textAlign: "center" as const,
//     marginBottom: "10px",
//   },
//   subtext: {
//     fontSize: "16px",
//     opacity: 0.7,
//     textAlign: "center" as const,
//     marginBottom: "40px",
//   },
// };

// export default Blog;


// import React from "react";
// import { blogs } from "../data/blogs";
// import { Link } from "react-router-dom";
// import TechFeed from "../components/TechFeed";

// const Blog: React.FC = () => {
//   return (
//     <div className="container my-5">
//       <h1 className="mb-4 text-center">My Blogs</h1>

//       <div className="row">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="col-md-6 mb-4">
//             <div className="card h-100 shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">{blog.title}</h5>
//                 <p className="card-text">{blog.excerpt}</p>
//                 <Link
//                   to={`/blog/${blog.id}`}
//                   className="btn btn-primary mt-2"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Divider */}
//       <hr className="my-5" />

//       {/* TechFeed Section */}
//       <h2 className="mb-4 text-center">Tech Articles Feed</h2>
//       <TechFeed />
//     </div>
//   );
// };

// export default Blog;


import React from "react";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";
import TechFeed from "../components/TechFeed";


const Blog: React.FC = () => {
  return (
    <div className="container blog-container">
      <h1 className="page-title">My Blogs</h1>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-list-item">
            <h3 className="blog-list-title">{blog.title}</h3>
            <p className="blog-list-excerpt">{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`} className="btn btn-primary read-more-btn">
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      
      <TechFeed />
    </div>
  );
};

export default Blog;

