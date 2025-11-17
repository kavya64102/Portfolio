


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

