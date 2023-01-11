import React, {useState} from 'react'
import "react-toastify/dist/ReactToastify.css";
import './Pages.scss'

function Auth() {
  return (
    
      <div className="container-fluid mb-4">
        <div className="container">
          <div className="col-12 text-center">
            <div className="text-center heading py-2">
                Sign Up
            </div>
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className='row'>
                
                  <div className="col-6 py-3">
                    <input type="text" className='form-control input-text-box' placeholder='First Name' name='firstName' value="" />
                  </div>
                  <div className="col-6 py-3">
                    <input type="text" className='form-control input-text-box' placeholder='Last Name' name='lastName' value="" />
                  </div>
                <div className="col-12 py-3">
                  <input type="email" className='form-control input-text-box' placeholder='Email' name='email' value="" />
                </div>
                <div className="col-12 py-3">
                  <input type="password" className='form-control input-text-box' placeholder='Password' name='password' value="" />
                </div>
               
                  <div className="col-12 py-3">
                    <input type="password" className='form-control input-text-box' placeholder='Confirm Password' name='confirmPassword' value="" />
                  </div>
                
                <div className="col-12 py-3 text-center">
                  <button className=" btn btn-sign-up" type="submit">
                  Sign Up
                  </button>
                </div>
              </form>
              <div>
                  <>
                  <div className="text-center justify-content-center mt-2 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account ?
                      <span style={{textDecoration: "none", cursor: "pointer", color: "#F88379"}}>
                        {" "}Sign Up
                      </span>
                    </p>
                  </div>
                  </>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Auth