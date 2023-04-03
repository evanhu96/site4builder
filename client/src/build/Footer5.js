import "../styles/Footer5.css";

  export default function Footer5() {
    return (
      <div id="footer5">
        <section>Footer Example 5</section>
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              Company<span>logo</span>
            </h3>
  
            <p class="footer-links">
              <a href="google.com">Home</a>·<a href="google.com">Blog</a>·
              <a href="google.com">Pricing</a>·<a href="google.com">About</a>·
              <a href="google.com">Faq</a>·<a href="google.com">Contact</a>
            </p>
  
            <p class="footer-company-name">Company Name © 2015</p>
  
            <div class="footer-icons">
              <a href="google.com">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="google.com">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="google.com">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="google.com">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
  
          <div class="footer-right">
            <p>Contact Us</p>
  
            <form action="#" method="post">
              <input type="text" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button>Send</button>
            </form>
          </div>
        </footer>
      </div>
    );
  }
    