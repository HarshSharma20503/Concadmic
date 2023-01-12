// components imported from packages
import React from "react";
import { Link } from "react-router-dom";

// CSS imported
import './Components.scss';

const Tags = ({ tags }) => {
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4 text-white">Tags</div>
      <div className="tags">
        {tags?.map((tag, index) => (
          <p className="tag" key={index}>
            <Link
              to={`/tag/${tag}`}
              style={{ textDecoration: "none",  }}
            >
              {tag}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
