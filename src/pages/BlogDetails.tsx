import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import TechFeed from "../components/TechFeed";


const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="container blog-container">
        <h2>Blog not found</h2>
        <Link to="/blog" className="btn btn-secondary mt-3">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="container blog-container">
      <Link to="/blog" className="back-link">
        ← Back to Blogs
      </Link>

      <h1 className="mb-4">{blog.title}</h1>

      <div className="blog-content mb-5">{blog.content}</div>

      <div className="divider"></div>

      <div className="techfeed-section">
        <h2>Tech Articles Feed</h2>
        <TechFeed />
      </div>
    </div>
  );
};

export default BlogDetails;

