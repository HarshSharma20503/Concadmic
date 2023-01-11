import React from "react";
import './Components.scss';

const Category = () => {
  return (
    <div className="widget">
      <div className="blog-heading text-start py-2 mb-4 text-white">Category</div>
      <div className="link-widget">
        <ul>
            <li >
              <p className="text-white"
                style={{ textDecoration: "none", float: "left", color: "#777" }}
              >
                Event/Fest
                <span>2</span>
              </p>
            </li>
            <li >
              <p className="text-white"
                style={{ textDecoration: "none", float: "left", color: "#777" }}
              >
                Event/Fest
                <span>3</span>
              </p>
            </li>
            <li >
              <p className="text-white"
                style={{ textDecoration: "none", float: "left", color: "#777" }}
              >
                Event/Fest
                <span>4</span>
              </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;