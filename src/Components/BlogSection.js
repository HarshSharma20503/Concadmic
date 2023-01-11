import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './Components.scss';

const BlogSection = () => {
  return (
    <div>
        <div className="blog-heading text-start py-2mb-4 text-white">
                <div className="row pb-2">
                    <div className="col-md-5">
                        <div className="hover-blogs-img">
                            <div className="blogs-img">
                                <img src='images/barbie.jpeg' />
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="text-start">
                            <h6 className="category catg-color">Education</h6>
                            <span className='title py-2 text-white'>Being a Fresher</span>
                            <span className="meta-info text-white">
                                <p className='author '>Barbie Agrawal</p> - 
                                11 JAN 2023
                            </span>
                        </div>
                        <div className="short-description text-white text-start">
                            Hello i am Barbie and I'm writing this blog because almost every fresher can relate to going through some drastic changes when they first enter a college.
                        </div>
                        <Link to={`/detail`}>
                            <button className="btn btn-read">Read More</button>
                        </Link>
                            <div style = {{float: "right"}}>
                            <FontAwesome
                                name='trash'
                                style={{margin:"15px", cursor:"pointer"}}
                                size='lg'
                            />
                            <Link to={`/update`}>
                                <FontAwesome
                                    name='edit'
                                    style={{cursor:"pointer"}}
                                    size='lg'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    </div>
)
}

export default BlogSection