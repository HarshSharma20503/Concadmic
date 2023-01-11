import React from 'react'
import Tags from '../Components/Tags';
import BlogSection from '../Components/BlogSection'

const Home = () => {
  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0 ">
          <div className="col-md-8">
          <div className="blog-heading text-start py-2 mb-4 text-white">Daily Blogs</div>
            <BlogSection />
          </div>
          <div className="col-md-3">
            <Tags/>
            <h2>Category</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home