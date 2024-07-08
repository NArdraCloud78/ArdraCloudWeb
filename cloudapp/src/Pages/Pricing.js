import React from 'react';

function Pricing() {
  return (
    <div>
      {/* Banner start */}
      <span id="bakcg1"></span>
      <section className="pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-9 mx-auto text-center mb-4">
                <div className="heading-holder">
                  <h3>Pricing for apps of all sizes</h3>
                </div>
                <div className="text-holder mb-4">
                  <p>ArdraCloud is free to get started and scales with you as you grow.</p>
                </div>
                <div className="heading-holder">
                  <h5>Need a custom solution?</h5>
                </div>
                <div className="text-holder mb-5">
                  <p>Our plans are designed to fit your specific needs, with dedicated support, uptime guarantees, and integration assistance</p>
                </div>
                <div className="col-md-10 mx-auto text-holder mb-5">
                  <ul>
                    <li>Guaranteed support response SLA</li>
                    <li>Contractual uptime guarantee</li>
                    <li>Custom contract paperwork</li>
                    <li>Multi-year contractual agreements</li>
                    <li>Dedicated infrastructure capacity</li>
                    <li>Custom hardware support</li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <a href="home#con-sales" type="button" className="btn billBtn mx-2">Contact Sales</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing end */}
      {/* plan start */}
      {/* <section className="pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="plan-holder">
                <div className="row">
                  <div className="col-lg-3 col-md-6 p-3 mb-4">
                    <div className="card p-3">
                      <div className="card-body">
                        <h5 className="card-title">Plan 1</h5>
                        <ul className="mb-4">
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                        </ul>
                        <p className="mb-4"><small>$</small><span>20</span><small>/ mo</small></p>
                        <div className="text-center">
                          <button type="button" className="btn chooseBtn" onClick={() => donationPay(20)}>Choose</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 p-3 mb-4">
                    <div className="card p-3">
                      <div className="card-body">
                        <h5 className="card-title">Plan 2</h5>
                        <ul className="mb-4">
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                        </ul>
                        <p className="mb-4"><small>$</small><span>220</span><small>/ mo</small></p>
                        <div className="text-center">
                          <button type="button" className="btn chooseBtn" onClick={() => donationPay(220)}>Choose</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 p-3 mb-4">
                    <div className="card p-3">
                      <div className="card-body">
                        <h5 className="card-title">Plan 3</h5>
                        <ul className="mb-4">
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="not-availabel">lorem ipsum dolor sit</li>
                        </ul>
                        <p className="mb-4"><small>$</small><span>320</span><small>/ mo</small></p>
                        <div className="text-center">
                          <button type="button" className="btn chooseBtn" onClick={() => donationPay(320)}>Choose</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 p-3 mb-4">
                    <div className="card p-3">
                      <div className="card-body">
                        <h5 className="card-title">Plan 4</h5>
                        <ul className="mb-4">
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                          <li className="availabel">lorem ipsum dolor sit</li>
                        </ul>
                        <p className="mb-4"><small>$</small><span>360</span><small>/ mo</small></p>
                        <div className="text-center">
                          <button type="button" className="btn chooseBtn" onClick={() => donationPay(360)}>Choose</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Modal */}
      <div className="modal fade register-popup" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="message-body p-1">
                <p>You have successfully paid Ardra Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Pricing;
