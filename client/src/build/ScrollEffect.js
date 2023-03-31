 import React from "react";
    import "../styles/ScrollEffect.css";
    export default function ScrollEffect() {
      return (
        <div id="scrollEffectAccordian">
          <h1>CSS + HTML only Accordion Element</h1>
          <ul>
            <li>
              <input type="checkbox" checked />
              <i></i>
              <h2>Languages Used</h2>
              <p>
                This page was written in HTML and CSS. The CSS was compiled from
                SASS. I used Normalize as my CSS reset and -prefix-free to save
                myself some headaches. I haven't quite gotten the hang of Slim for
                compiling into HTML, but someday I'll use it since its syntax
                compliments that of SASS. Regardless, this could all be done in
                plain HTML and CSS.
              </p>
            </li>
            <li>
              <input type="checkbox" checked />
              <i></i>
              <h2>How it Works</h2>
              <p>
                Using the sibling and checked selectors, we can determine the
                styling of sibling elements based on the checked state of the
                checkbox input element. One use, as demonstrated here, is an
                entirely CSS and HTML accordion element. Media queries are used to
                make the element responsive to different screen sizes.
              </p>
            </li>
            <li>
              <input type="checkbox" checked />
              <i></i>
              <h2>Points of Interest</h2>
              <p>
                By making the open state default for when :checked isn't detected,
                we can make this system accessable for browsers that don't recognize
                :checked. The fallback is simply an open accordion. The accordion
                can be manipulated with Javascript (if needed) by changing the
                "checked" property of the input element.
              </p>
            </li>
          </ul>
        </div>
      );
    }
    