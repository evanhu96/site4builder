 import '../styles/JFKQuote.css'

    export default function JFKQuote() {
    
      return (
        <div id="jfk">
          <header className="header">
            <h1 className="title">John F. Kennedy</h1>
            <p className="description">1917-1963 </p>
          </header>
          <section className="tribute">
            <blockquote>
              "One person can make a difference, and everyone should try"
            </blockquote>
            <img src="https://news.harvard.edu/wp-content/uploads/2020/09/051_JFK_9780812997132_young-senator-1200x800.jpg" alt='jfk' />
          </section>
    
          <section className="bio">
            <h2>Biography</h2>
            <p>
              John F. Kennedy, the 35th President of the United States, faced a
              significant challenge during his presidency - his health. JFK suffered
              from Addison's disease and chronic back pain, which he kept hidden
              from the public to maintain his credibility as a leader. Despite
              rumors and occasional incidents, JFK's team of advisors and doctors
              worked hard to maintain the illusion of a healthy and robust leader.
              JFK's legacy continues to inspire people around the world, and his
              leadership during a challenging time in American history is widely
              respected and celebrated.
            </p>
            <hr />
          </section>
        </div>
      );
    }
    