import React from 'react';

function Footer() {
  return (
    <section className="footer pt-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-2 px-lg-5 px-2 text-lg-center text-start mb-4">
            <a href="index-2.html">
              <img src="frontend/assets/images/logo/footer-Logo.png" alt="contact sales" />
            </a>
          </div>
          <div className="col-md-2">
            <h3>Features</h3>
            <ul>
              <li><a href="home#features" target="_blank" rel="noopener noreferrer">Connect Anything</a></li>
              <li><a href="home#features" target="_blank" rel="noopener noreferrer">Access Management</a></li>
              <li><a href="home#features" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
              <li><a href="home#features" target="_blank" rel="noopener noreferrer">Alerts</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Developers</h3>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Open Source</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">API Status</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Resources</h3>
            <ul>
              <li><a href="about.html" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Case Study</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Security</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Social Links</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/explore/tags/ardracloud/" target="_blank" rel="noopener noreferrer">
                <img src="frontend/assets/images/icon/INSTA.png" className="i1 mx-1" alt="Instagram" width="25px" height="25px" />
              </a>
              <a href="https://www.facebook.com/ardracloud" target="_blank" rel="noopener noreferrer">
                <img src="frontend/assets/images/icon/facebook.png" className="i2 mx-1" alt="Facebook" width="25px" height="25px" />
              </a>
              <a href="https://www.linkedin.com/company/ardracloud/" target="_blank" rel="noopener noreferrer">
                <img src="frontend/assets/images/icon/LINKEDIN.png" className="i3 mx-1" alt="LinkedIn" width="25px" height="25px" />
              </a>
              <a href="https://www.reddit.com/r/ArdraCloud/" target="_blank" rel="noopener noreferrer">
                <img src="frontend/assets/images/icon/reddit.png" className="i4 mx-1" alt="Reddit" width="25px" height="25px" />
              </a>
              <a href="https://discord.com/invite/4RZnZq4Z" target="_blank" rel="noopener noreferrer">
                <img src="frontend/assets/images/icon/discord.png" className="i5 mx-1" alt="Discord" width="25px" height="25px" />
              </a>
            </div>
          </div>
          <div className="col-md-12 my-2 text-center">
            <p>© 2024 All Rights Reserved By Ardra AI Inc. Terms Of Use | Privacy Policy </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
