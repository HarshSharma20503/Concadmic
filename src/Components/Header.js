import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import './Components.scss'

const Navbar = () => {
  

  return (
    <>
    <section className="header">
      <div className="container">

        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">CONCADMIC</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link"  to="/" >Home</Link>
                </li>
                    <li className="nav-item">
                      <Link className= "nav-link" to="/create">Create</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/events">Events</Link>
                    </li>

                    <li className="nav-item">
                      <Link className='nav-link' to="/" rel="noreferrer" target="_blank">Resources</Link>
                    </li>                
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                    <li className='nav-item profileName'>
                      <Dropdown className='nav-link' style={{padding:"0px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="color">
                          <img className='profileImg' src="https://e7.pngegg.com/pngimages/423/895/png-clipart-computer-icons-user-male-user-miscellaneous-head.png" alt=""
                          />
                              Dipti
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/auth" >Login</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </section>
      
    </>
  )
}

export default Navbar