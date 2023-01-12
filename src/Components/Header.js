// Components imported from packages
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

// CSS imported
import './Components.scss'

const Header = ({active,setActive,user,handleLogout}) => {
  
  //current-user id
  const userId=user?.uid;
  
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
                  <Link className={`nav-link ${active==="home"?"active":""}`} to="/" onClick={()=> setActive("home")}>Home</Link>
                </li>
                {userId ? (
                  <>    
                    <li className="nav-item">
                      <Link className={`nav-link ${active==="create"?"active":""}`} to="/create" onClick={()=> setActive("create")}>Create</Link>
                    </li>

                    <li className="nav-item">
                      <Link className={`nav-link ${active==="events"?"active":""}`} to="/events" onClick={()=> setActive("events")}>Events</Link>
                    </li>

                    <li className="nav-item">
                      <a className='nav-link' href="https://drive.google.com/drive/folders/1O_jJ2SlRIBRB8eReNYuKfyVV7YnQH9Z0?usp=sharing" rel="noreferrer" target="_blank">Resources</a>
                    </li>
                  </> 
                ) : (
                  <>
                  </>
                )}
                <li className="nav-item">
                  <Link className={`nav-link ${active==="about"?"active":""}`} to="/about" onClick={()=> setActive("about")}>About</Link>
                </li>
                {userId ? (
                  <>
                    <li className='nav-item profileName'>
                      <Dropdown className='nav-link' style={{padding:"0px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="color">
                          <img className='profileImg' src="https://e7.pngegg.com/pngimages/423/895/png-clipart-computer-icons-user-male-user-miscellaneous-head.png" alt=""
                          />
                          {user?.displayName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className={`nav-link ${active==="login"?"active":""}`} to="/auth" onClick={()=> setActive("login")}>Login</Link>
                  </li>
                )}

              </ul>
            </div>
          </div>
        </nav>

      </div>
    </section>
      
    </>
  )
}

export default Header