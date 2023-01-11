import React from "react";
import './Components.scss'

const Category = ({ catgBlogsCount }) => {
  return (
    <div className="widget">
      <div className="blog-heading text-start py-2 mb-4 text-white">Category</div>
      <div className="link-widget">
        <ul>
          {catgBlogsCount?.map((item, index) => (
            <li key={index}>
              <p className="text-white"
                style={{ textDecoration: "none", float: "left", color: "#777" }}
              >
                {item.category}
                <span>({item.count})</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;