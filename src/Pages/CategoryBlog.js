import React from "react";
import BlogSection from "../components/BlogSection";

const CategoryBlog = () => {
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="blog-heading text-center py-2 mb-4">
            Category: <strong>Fest</strong>
          </div>
            <div className="col-md-6">
              <BlogSection/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlog;