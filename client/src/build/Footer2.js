import { IonIcon } from "@ionic/react";
  import {
    logoFacebook,
    logoInstagram,
    logoSnapchat,
    logoTwitter,
  } from "ionicons/icons";
  import "../styles/Footer2.css"
  
  export default function footer2() {
    return (
      <div id="footer2">
        <footer>
          <div className="social">
            <a href="google.com" >
              <IonIcon icon={logoInstagram} />
            </a>
            <a href="google.com" >
              <IonIcon icon={logoSnapchat} />
            </a>
            <a href="google.com" >
              <IonIcon icon={logoTwitter} />
            </a>
            <a href="google.com" >
              <IonIcon icon={logoFacebook} />
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
    );
  }
   