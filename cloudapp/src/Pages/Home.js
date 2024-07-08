import React from 'react';

function Home() {
  return (
    <div>
      {/* Banner start */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-lg-0 order-1">
              <div className="header-holder">
                <div className="animation1">
                  <span id="bg1"></span>
                </div>
                <h1 className="mb-3">Any device. <br />Any data.<br />Secured.</h1>
                <p>
                  <span>Ardra Cloud is a no-code IoT app builder platform for teams looking to scale up their IoT delivery. Build in minutes and share the dashboard with your clients or users with a full stack Admin panel.</span>
                </p>
                <p>
                  <span>These are used for making digital twins, energy monitoring, Genset/machine automation, industrial automation, and every application which needs hardware to send data to the cloud securely.</span>
                </p>
              </div>
              <div className="col-md-12 order-lg-1 order-0">
                <a href="https://app.ardracloud.com/" target="_blank" rel="noopener noreferrer" type="button" className="btn startBtn me-5 py-2">Get Started</a>
                <a href="home#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
              </div>
            </div>
            <div className="col-md-6">
              <span id="bg2"></span>
              <div className="col-md-8 col-6 mx-auto">
                <div className="animation-holder">
                  <span id="circle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner End */}

      {/* Trusted By section start */}
      <section className="trusted-by">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-holder">
                <h2>Trusted By</h2>
                <span className="line"></span>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="nav justify-content-between">
                <li className="nav-item text-center mx-1">
                  <a className="nav-link active" href="#"><img src="frontend/assets/images/icon/Oil-%26-NG.png" alt="contact sales" /><span>Oil & NG</span></a>
                </li>
                <li className="nav-item text-center mx-1">
                  <a className="nav-link" href="#"><img src="frontend/assets/images/icon/Energy-companies.png" alt="contact sales" /><span>Energy Companies</span></a>
                </li>
                <li className="nav-item text-center mx-1">
                  <a className="nav-link" href="#"><img src="frontend/assets/images/icon/SOLAR.png" alt="contact sales" /><span>Solar, EV</span></a>
                </li>
                <li className="nav-item text-center mx-1">
                  <a className="nav-link" href="#"><img src="frontend/assets/images/icon/EMISSION.png" alt="contact sales" /><span>Emission Monitoring</span></a>
                </li>
                <li className="nav-item text-center mx-1">
                  <a className="nav-link" href="#"><img src="frontend/assets/images/icon/Industrial-Automation.png" alt="contact sales" /><span>Industrial Automation</span></a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 text-center my-5">
              <a href="home#con-sales" type="button" className="btn connectBtn py-2">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted By section end */}

      {/* Data Centric start */}
      <section className="data-centric">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="header-holder">
                <p>Integrated solutions for all your needs</p>
                <h3 className="mb-3">Data-Centric <br />IoT life cycle</h3>
                <span>Users can build with our no-code builder platform - usually reducing development time from days to minutes and the engineering team to just a developer.</span>
              </div>
              <div className="col-md-12">
                <a href="home#con-sales" type="button" className="btn connectBtn me-5 py-2">Connect Sales</a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="img-holder p-3">
                <img src="frontend/assets/images/data-centric.png" className="img-fluid" alt="data-centric" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features start */}
      <section className="feature" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 feature-div">
              <div className="d-lg-flex d-block">
                <div className="icon-holder">
                  <img src="frontend/assets/images/icon/Connect-Anything.png" alt="contact sales" />
                </div>
                <div className="text-holder">
                  <h4>Connect Anything</h4>
                  <span>Any device with a network can be connected to ardrasync</span>
                  <div className="col-md-12 my-2">
                    <a href="home#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 feature-div">
              <div className="d-lg-flex d-block">
                <div className="icon-holder">
                  <img src="frontend/assets/images/icon/Access-Management.png" alt="contact sales" />
                </div>
                <div className="text-holder">
                  <h4>Access Management</h4>
                  <span>Manage devices, users, data, dashboard at one place</span>
                  <div className="col-md-12 my-2">
                    <a href="home#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 feature-div">
              <div className="d-lg-flex d-block">
                <div className="icon-holder">
                  <img src="frontend/assets/images/icon/Dashboard.png" alt="contact sales" />
                </div>
                <div className="text-holder">
                  <h4>Dashboard</h4>
                  <span>All the data and controls on one screen - reporting and KPI’s</span>
                  <div className="col-md-12 my-2">
                    <a href="home#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 feature-div">
              <div className="d-lg-flex d-block">
                <div className="icon-holder">
                  <img src="frontend/assets/images/icon/Alerts.png" alt="contact sales" />
                </div>
                <div className="text-holder">
                  <h4>Alerts</h4>
                  <span>Set up alerts for events or automate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features End */}

      {/* Developer Design start */}
      <section className="developer-design py-4" id="design">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="header-holder">
                <p>Developer-first design</p>
                <span className="line"></span>
                <h3 className="my-1">A unified platform with modern APIs</h3>
              </div>
            </div>
            <div className="col-md-6 py-5">
              <div className="text-holder">
                <p>Ardra Provides a single, elegant interface that abstracts dozens of integrations.</p>
              </div>
              <div className="col-md-12 mb-5">
                <button type="button" className="btn readBtn me-4 py-2"><a href="#">Read the docs</a></button>
                <a href="#">Get your API key</a>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="header-holder">
                    <h5>Accelerate your business</h5>
                    <span className="line2"></span>
                  </div>
                </div>
                <div className="col-md-6 my-3">
                  <div className="icon-holder"><img src="frontend/assets/images/icon/automate-process.png" alt="contact sales" /></div>
                  <div className="text-holder">
                    <h4>Automate processes</h4>
                    <span>Move faster with workflow automation that closely follows your business rules and approvals.</span>
                  </div>
                </div>
                <div className="col-md-6 my-3">
                  <div className="icon-holder"><img src="frontend/assets/images/icon/adapt.png" alt="contact sales" /></div>
                  <div className="text-holder">
                    <h4>Adapt and scale</h4>
                    <span>Automate processes as you grow and get faster results, without growing pains.</span>
                  </div>
                </div>
                <div className="col-md-6 my-3">
                  <div className="icon-holder"><img src="frontend/assets/images/icon/real-time.png" alt="contact sales" /></div>
                  <div className="text-holder">
                    <h4>Real-time</h4>
                    <span>Track your progress and your team’s productivity in real-time.</span>
                  </div>
                </div>
                <div className="col-md-6 my-3">
                  <div className="icon-holder"><img src="frontend/assets/images/icon/control.png" alt="contact sales" /></div>
                  <div className="text-holder">
                    <h4>Complete control</h4>
                    <span>Keep control of your infrastructure and your data with our built-in governance and compliance.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-holder mt-4">
                <img src="frontend/assets/images/developer-design.png" className="img-fluid" alt="developer design" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Developer Design End */}

      {/* Resources Start */}
      <section className="resource">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-holder mt-4">
                <img src="frontend/assets/images/resources.png" className="img-fluid" alt="developer design" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-holder">
                <h3 className="mb-3">Resources</h3>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 p-0">
                      <div className="icon-holder"><img src="frontend/assets/images/icon/Case-Study.png" alt="contact sales" /></div>
                    </div>
                    <div className="col-9 col-md-10 p-0">
                      <div className="text-holder">
                        <h4>Case Study</h4>
                        <span>Ardra has helped companies across multiple industries digitize their businesses. Learn more about how our IoT platform can benefit your industry.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 p-0">
                      <div className="icon-holder"><img src="frontend/assets/images/icon/Brochure.png" alt="contact sales" /></div>
                    </div>
                    <div className="col-9 col-md-10 p-0">
                      <div className="text-holder">
                        <h4>Brochure</h4>
                        <span>Ardra Brochure - Get an overview of our IoT platform and see how it can help you build and manage your IoT projects faster and more efficiently.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 p-0">
                      <div className="icon-holder"><img src="frontend/assets/images/icon/Press-Release.png" alt="contact sales" /></div>
                    </div>
                    <div className="col-9 col-md-10 p-0">
                      <div className="text-holder">
                        <h4>Press Release</h4>
                        <span>Stay updated with the latest news and updates from Ardra, including new product releases, partnerships, and industry events.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex">
                    <div className="col-3 col-md-2 p-0">
                      <div className="icon-holder"><img src="frontend/assets/images/icon/Docs.png" alt="contact sales" /></div>
                    </div>
                    <div className="col-9 col-md-10 p-0">
                      <div className="text-holder">
                        <h4>Docs</h4>
                        <span>Access our comprehensive documentation to get started with Ardra. Learn about our APIs, integrations, and how to make the most of our IoT platform.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resources End */}
    </div>
  );
}

export default Home;
