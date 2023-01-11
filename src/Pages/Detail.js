import React from 'react';
import './Pages.scss';

const Detail = () => { 

  return (
    <div className="single">
      <div className="blog-title-box" style={{backgroundImage: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80"}}>
        <div className="overlay">
          <div className="blog-title">
            <span>Blog Time</span>
            <h2>Blog</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid pb-4 pt-4 padding blog-single-content">
        <div className="container padding">
          <div className="row mx-0">
            <div className="col-md-8">
              <span className="meta-info text-start text-white">
                By <p className="author">Blog author</p>
                " - "+"Tue Jan 23 2023"
              </span>
              <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi, mollitia earum adipisci itaque accusantium? Saepe quis asperiores iure vitae laudantium nobis, aperiam atque nostrum cumque enim, ullam dignissimos hic.</p>
            </div>
            <div className="col-md-3">
              <h2>Tags</h2>
              <h2>Categories</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail