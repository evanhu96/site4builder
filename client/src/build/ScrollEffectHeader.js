import { gsap, Power1 } from "gsap";
import { useEffect } from "react";
import "../styles/ScrollEffectHeader.scss";
    
    function ScrollEffectHeader() {
      useEffect(() => {
        const header = document.querySelector("#app-header");
        const bgBack = document.querySelector("#background-back");
        const bgFront = document.querySelector("#background-front");
        const toolbar = document.querySelector("#small-toolbar");
        const largeTitle = document.querySelector("#large-title");
        const smallTitle = document.querySelector("#small-title");
        const deltaHeight = header.offsetHeight - toolbar.offsetHeight;
    
        const rect1 = smallTitle.getBoundingClientRect();
        const rect2 = largeTitle.getBoundingClientRect();
        console.log(deltaHeight);
    
        const scale = rect1.height / rect2.height;
        const x = rect1.left - rect2.left;
        const y = rect1.top - rect2.top;
    
        const headerAnimation = gsap
          .timeline({ paused: true })
          .to(
            largeTitle,
            { duration: 1, scale: scale, x: x, y: deltaHeight + y },
            0
          )
          .to(header, { duration: 1, y: -deltaHeight }, 0)
          .to(toolbar, { duration: 1, y: deltaHeight }, 0)
          .to(bgBack, { duration: 1, y: deltaHeight / 2 }, 0)
          .to(bgFront, { duration: 1, y: deltaHeight / 2 }, 0)
          .to(bgBack, { duration: 1, alpha: 1 }, 0)
          .to(bgFront, { duration: 1, alpha: 0 }, 0)
          .set(smallTitle, { alpha: 1 }, 1)
          .set(largeTitle, { alpha: 0 }, 1);
    
        const shadowAnimation = gsap.to(header, {
          duration: 0.4,
          boxShadow: "0 2px 5px rgba(0,0,0,0.6)",
          ease: Power1.easeOut,
          reversed: true,
        });
    
        let progress = 0;
        let requestId = null;
        let reversed = true;
    
        function requestUpdate() {
          if (!requestId) {
            requestId = requestAnimationFrame(update);
          }
        }
    
        function update() {
          const scroll = window.pageYOffset;
    
          if (scroll < deltaHeight) {
            progress = scroll < 0 ? 0 : scroll / deltaHeight;
            reversed = true;
          } else {
            progress = 1;
            reversed = false;
          }
    
          headerAnimation.progress(progress);
          shadowAnimation.reversed(reversed);
    
          requestId = null;
        }
    
        
        update();
        window.addEventListener("scroll", requestUpdate);
    
        return () => {
          window.removeEventListener("scroll", requestUpdate);
        };
      }, []);
    
      return (
        <div>
          <header id="app-header" class="app-header" style={{  position: 'fixed',top: 0,left: 0,right: 0}}>
            <div class="background-container">
              <div id="background-back" class="background"></div>
              <div id="background-front" class="background"></div>
            </div>
    
            <div class="header-content">
              <div id="small-toolbar" class="app-toolbar">
                <div class="icon-button">
                  <div class="icon">
                    <i class="material-icons">menu</i>
                  </div>
                </div>
    
                <div id="small-title" class="small-title">
                  Some Title
                </div>
                <div class="icon-button">
                  <div class="icon">
                    <i class="material-icons">search</i>
                  </div>
                </div>
    
                <div class="icon-button">
                  <div class="icon">
                    <i class="material-icons">more_vert</i>
                  </div>
                </div>
              </div>
    
              <div id="large-toolbar" class="app-toolbar tall">
                <div id="large-title" class="large-title">
                  Some Title
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className="card">
              <h3>Card Title</h3>
              <p>Card content goes here.</p>
            </div>
          </main>
        </div>
      );
    }
    
    export default ScrollEffectHeader;
    