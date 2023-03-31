import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header-blue">
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
          <div className="container-fluid">
            <a className="navbar-brand" href="google.com">
              BBBOOTSTAP
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="google.com">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="google.com"
                  >
                    Services
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <a className="dropdown-item" role="presentation" href="google.com">
                      Logo design
                    </a>
                    <a className="dropdown-item" role="presentation" href="google.com">
                      Banner design
                    </a>
                    <a className="dropdown-item" role="presentation" href="google.com">
                      content writing
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline mr-auto" target="_self">
                <div className="form-group">
                  <label htmlFor="search-field">
                    <i className="fa fa-search text-white"></i>
                  </label>
                  <input
                    className="form-control search-field"
                    type="search"
                    id="search-field"
                    name="search"
                  />
                </div>
              </form>
              <span className="navbar-text">
                {" "}
                <a className="login" href="google.com">
                  Log In
                </a>
              </span>
              <a className="btn btn-light action-button" role="button" href="google.com">
                Signup
              </a>
            </div>
          </div>
        </nav>
        <div className="container hero">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
              <h1>Business goal designs</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
              </p>
              <button className="btn btn-light btn-lg action-button" type="button">
                Learn More<i className="fa fa-long-arrow-right ml-2"></i>
              </button>
            </div>
            <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
              <div className="iphone-mockup">
                <img className="device" src="https://i.imgur.com/bkCeTu7.png" alt="iPhone mockup" />
                <div className="screen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
