import React from "react";
import './Pages.scss';

function About() {
  return (
    <>
      <div class="service py-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10 col-11 mx-auto">
              <div class="mt-2 mb-5 text-center">
                <h1 class="service_heading">ABOUT US</h1>
              </div>
              <div class="row ">
                <div class="col-md-6 mt-md-2 m-0">
                  <span class="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light f">
                    <h3 class="head">About Concadmic</h3>
                  </span>
                  <h6 class="font-weight-light subtitle">
                  Concadmic is a comprehensive platform where several blogs of experienced people along with all required academic resources are available and easily accessible. It also serves as a networking platform where anyone can reach out to their seniors or peers. Apart from the blogging feed and the academic resources section, there is an events section where all the upcoming college events will be posted.
                  </h6>
                </div>
                <div class="col-md-6 mt-md-5 m-0">
                  <div class="row wrap-service">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            class="profile-img rounded img-shadow img-fluid"
                            src="images/harsh.jpeg"
                          />
                          <h5>Harsh Sharma</h5>
                        </div>
                        <div class="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            class="profile-img rounded img-shadow img-fluid"
                            src="images/barbie.jpeg"
                          />
                          <h5>Barbie Agrawal</h5>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 uneven-box">
                      <div class="row">
                        <div class="col-md-12 img-hover mb-4">
                          <div class="dipti-img"><img
                            alt="ux"
                            class=" profile-img rounded img-shadow img-fluid"
                            src="images/dipti.jpg"
                          />
                          <h5>Dipti Jain</h5></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        crossorigin="anonymous"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      ></script>
      <script
        crossorigin="anonymous"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
      ></script>
    </>
  );
}

export default About;
