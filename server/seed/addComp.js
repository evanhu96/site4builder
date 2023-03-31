const connection = require("../config/connection");
const { Component } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
    const tag = "SMFooter";
    const style = "footer"
    const cssType = 'css'
    const file = 
    ` import React from "react";
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
    `
    const css = `.footer-basic {
      padding:40px 0;
      background-color:#ffffff;
      color:#4b4c4d;
    }
    
    .footer-basic ul {
      padding:0;
      list-style:none;
      text-align:center;
      font-size:18px;
      line-height:1.6;
      margin-bottom:0;
    }
    
    .footer-basic li {
      padding:0 10px;
    }
    
    .footer-basic ul a {
      color:inherit;
      text-decoration:none;
      opacity:0.8;
    }
    
    .footer-basic ul a:hover {
      opacity:1;
    }
    
    .footer-basic .social {
      text-align:center;
      padding-bottom:25px;
    }
    
    .footer-basic .social > a {
      font-size:24px;
      width:40px;
      height:40px;
      line-height:40px;
      display:inline-block;
      text-align:center;
      border-radius:50%;
      border:1px solid #ccc;
      margin:0 8px;
      color:inherit;
      opacity:0.75;
    }
    
    .footer-basic .social > a:hover {
      opacity:0.9;
    }
    
    .footer-basic .copyright {
      margin-top:15px;
      text-align:center;
      font-size:13px;
      color:#aaa;
      margin-bottom:0;
    }`    

    const component = new Component({
        tag: tag,
        file: file,
        style:style,
        css:css,
        cssType:cssType

      });
      await component.save();
      return component;
    }
)