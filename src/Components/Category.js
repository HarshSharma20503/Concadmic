// Components imported from packages
import React from "react";
import { Link } from "react-router-dom";

// CSS imported
import './Components.scss';

const Category = ({ catgBlogsCount }) => {
  return (
    <div className="widget">
      <div className="blog-heading text-start py-2 mb-4 text-white">Category</div>
      <div className="link-widget">
        <ul>
          {catgBlogsCount?.map((item, index) => (
            <li key={index}>
              <Link
              className="text-white"
                to={`/category/${item.category}`}
                style={{ textDecoration: "none", float: "left", color: "#777" }}
              >
                {item.category}
                <span className="text-white">({item.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;