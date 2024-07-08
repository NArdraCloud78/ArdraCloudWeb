import React from 'react'
import './index.css'

function Index() {
  return (
    <div>
       <div>
      <section className="main" data-aos="zoom-in" data-aos-duration="3000">
        <div className="container-fluid p-0">
          <span id="iot"></span>
          {/* ardra-cloud */}
          <section className="ardra-cloud">
            <div className="container">
              <div className="row justify-content-center row-card">
                <div className="col-md-12 mx-auto mb-5">
                  <div className="logo-container text-center mb-5">
                    <img src="frontend/assets/images/logo/footer-Logo.png" alt="Ardra Cloud Logo" />
                  </div>
                  <div className="header-holder">
                    <h4 className="mb-3">Ardra Cloud <span>Industry4.0 right at your fingertips</span></h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-4 col-xl-6 col-md-12 mb-4">
                    <a href="home" target="_blank">
                      <div className="card text-center">
                        <div className="card-body">
                          <div className="content-holder mb-4">
                            <h3>Ardra-IoT</h3>
                          </div>
                          <div className="text-center">
                            <a href="home" target="_blank">Get In <img src="frontend/assets/images/icon/right-angle-blue.png" className="ms-2" alt="Get In" /></a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-md-12 mb-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <div className="content-holder mb-4">
                          <h3>Ardra-AI</h3>
                        </div>
                        <div className="text-center">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#contact-sale">Contact Sales <img src="frontend/assets/images/icon/right-angle-blue.png" className="ms-2" alt="Contact Sales" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-md-12 mb-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <div className="content-holder mb-4">
                          <h3>ArdraWeb3</h3>
                        </div>
                        <div className="text-center">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#join-dev">Join Dev team <img src="frontend/assets/images/icon/right-angle-blue.png" className="ms-2" alt="Join Dev team" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ardra-cloud */}
          {/* follow-us */}
          <section className="follow-us mb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="content-holder mb-4 py-4">
                    <h3>Follow Us On <span>SOCIAL MEDIA</span></h3>
                  </div>
                  <div className="col-md-8 mx-auto">
                    <div className="icon-holder text-center">
                      <a href="https://www.instagram.com/explore/tags/ardracloud/" target="_blank">
                        <img src="frontend/assets/images/icon/INSTA.png" className="i1 mx-1 mb-3" alt="Instagram" />
                      </a>
                      <a href="https://www.facebook.com/ardracloud" target="_blank">
                        <img src="frontend/assets/images/icon/facebook.png" className="i2 mx-1 mb-3" alt="Facebook" />
                      </a>
                      <a href="https://www.linkedin.com/company/ardracloud/" target="_blank">
                        <img src="frontend/assets/images/icon/LINKEDIN.png" className="i3 mx-1 mb-3" alt="LinkedIn" />
                      </a>
                      <a href="https://www.reddit.com/r/ArdraCloud/" target="_blank">
                        <img src="frontend/assets/images/icon/reddit.png" className="i4 mx-1 mb-3" alt="Reddit" />
                      </a>
                      <a href="https://discord.com/invite/4RZnZq4Z" target="_blank">
                        <img src="frontend/assets/images/icon/discord.png" className="i5 mx-1 mb-3" alt="Discord" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* follow-us */}
          {/* powered by */}
          <section className="follow-us">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="content-holder mb-2 py-4">
                    <h3>Powered By <span>ARDRA</span></h3>
                  </div>
                  <div className="logo-container text-center mb-5">
                    <img src="frontend/assets/images/logo/footer-Logo.png" alt="Ardra Logo" />
                  </div>
                  <div className="col-md-12 my-2 text-center">
                    <p>© 2022 All Rights Reserved By Beyest Pvt Ltd. Terms Of Use | Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* powered by */}
          {/* Modal */}
          <div className="modal fade" id="contact-sale" tabIndex="-1" aria-labelledby="contact-saleLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="content-holder mb-4">
                    <h3>Contact Our Sales</h3>
                    {/* <h5><span>Contact No. :</span> &nbsp;9823573906</h5> */}
                    <h5><span>Email :</span> &nbsp;Support@ardracloud.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <div className="modal fade" id="join-dev" tabIndex="-1" aria-labelledby="join-devLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="content-holder mb-4">
                    <h3>Join Our Dev Team</h3>
                    {/* <h5><span>Contact No. :</span> &nbsp;9823573906</h5> */}
                    <h5><span>Email :</span> &nbsp;Support@ardracloud.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Index
