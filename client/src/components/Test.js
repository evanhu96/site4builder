import React from "react";
import '../styles/SMFooter.css'
export default function SMFooter() {
  return (
    <div>
      {" "}
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="google.com">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a href="google.com">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="google.com">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="google.com">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="google.com">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="google.com">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="google.com">About</a>
            </li>
            <li className="list-inline-item">
              <a href="google.com">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="google.com">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">Company Name © 2018</p>
        </footer>
      </div>
    </div>
  );
}
