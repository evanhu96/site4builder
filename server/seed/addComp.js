const connection = require("../config/connection");
const { Component } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  const tag = "HeaderFooterContrast";
  const style = "footer";
  const cssType = "css";
  const file = `import { useState } from "react";
  import "../styles/style.css";
  export default function UnderTheHood() {
    const [check, setCheck] = useState(false);
    return (
      <div id="underTheHood">
        <input
          id="rotated"
          type="checkbox"
          name="rotated"
          checked={check}
          onChange={() => setCheck(!check)}
        />
        <label htmlFor="rotated">Rotate the form</label>
        <form>
          <h3 data-text="Choose Your Language">Choose Your Language</h3>
          <label data-text="JavaScript">
            <input type="radio" name="language" value="js" /> JavaScript
            <span className="dot"></span>
            <span className="dot-shadow"></span>
          </label>
          <label data-text="PHP">
            <input type="radio" name="language" value="php" /> PHP
            <span className="dot"></span>
            <span className="dot-shadow"></span>
          </label>
          <label data-text="Python">
            <input type="radio" name="language" value="py" /> Python
            <span className="dot"></span>
            <span className="dot-shadow"></span>
          </label>
          <label data-text="Swift">
            <input type="radio" name="language" value="swift" /> Swift
            <span className="dot"></span>
            <span className="dot-shadow"></span>
          </label>
        </form>
      </div>
    );
  }
    `;
  const css = `* #underTheHood{
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root #underTheHood{
    --bg: #e3e4e8;
    --fg: #17181c;
    --formBg: #fff;
    --radioBg: #fff;
    --radioBgActive: #e3e4e8;
    --radioBorder: #c7cad1;
    --radioBorderActive: #c7cad1;
    --radioSide: #c7cad1;
    --primary1: #0b46da;
    --primary2: #255ff4;
    --primary3: #5583f6;
    --primary4: #86a6f9;
    --depth: -4.5em;
    --ballDiam: 0.75em;
    --xAngle: -30deg;
    --yAngle: 45deg;
    font-size: calc(16px + (24 - 16)*(100vw - 320px)/(1280 - 320));
  }
  body #underTheHood,#underTheHood h3,#underTheHood input {
    color: var(--fg);
    font: 1em/1.5 Hind, sans-serif;
  }
  body #underTheHood,#underTheHood form,#underTheHood form h3,#underTheHood form label {
    transform-style: preserve-3d;
  }
  body #underTheHood{
    background: var(--bg);
    overflow-x: hidden;
    padding-top: 1.5em;
    height: 100vh;
    text-align: center;
  }
  #underTheHood h3 {
    font-weight: bold;
  }
  #underTheHood input[type=checkbox] {
    margin-right: 0.375em;
  }
  /* Layer setup */
  #underTheHood form {
    box-shadow: 0 0 0 0.1em var(--radioBorder) inset;
    max-width: 17em;
    margin: 4.5em auto 1.5em auto;
    padding: 1.5em;
    text-align: left;
    transform: rotateX(0) rotateY(0) translateZ(calc(var(--depth) / -2));
    transition: transform 0.25s linear;
  }
  #underTheHood form:before, #underTheHood form label:before, #underTheHood form h3:before,#underTheHood .dot,#underTheHood .dot-shadow {
    position: absolute;
  }
  #underTheHood form:before, #underTheHood form input[type=radio], #underTheHood form label:before, #underTheHood form h3:before {
    transform: translateZ(var(--depth));
  }
  #underTheHood form:before {
    background: var(--formBg);
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #underTheHood input[type=checkbox]:checked ~ form {
    transform: rotateX(var(--xAngle)) rotateY(var(--yAngle)) translateZ(calc(var(--depth) / -2));
  }
  /* Radios */
  #underTheHood form input[type=radio], #underTheHood form span, #underTheHood form label:before, #underTheHood form h3:before {
    transition: all 0.15s linear;
  }
  #underTheHood form input[type=radio],#underTheHood span {
    border-radius: 50%;
  }
  #underTheHood form input[type=radio] {
    background: var(--radioBg);
    box-shadow:
      0 0 0 var(--radioSide),
      0 0 0 0.1em var(--radioBorder) inset,
      0 0 0 #0003;
    margin-right: 0.5em;
    width: 1.5em;
    height: 1.5em;
    -webkit-appearance: none;
    appearance: none;
  }
  #underTheHood input[type=checkbox]:checked ~ form input[type=radio] {
    box-shadow:
      -0.25em -0.25em 0 var(--radioSide),
      0 0 0 0.1em var(--radioBorder) inset,
      -0.25em -0.25em 0.25em #0005;
  }
  #underTheHood form input[type=radio]:active, form input[type=radio]:focus {
    background: var(--radioBgActive);
    box-shadow:
      0 0 0 var(--radioSide),
      0 0 0 0.1em var(--radioBorderActive) inset,
      0 0 0 #0003;
  }
  #underTheHood input[type=checkbox]:checked ~ form input[type=radio]:active, input[type=checkbox]:checked ~ form input[type=radio]:focus {
    box-shadow:
      -0.25em -0.25em 0 var(--radioSide),
      0 0 0 0.1em var(--radioBorderActive) inset,
      -0.25em -0.25em 0.25em #0005;
  }
  #underTheHood form input[type=radio]:focus {
    outline: transparent;
  }
  /* Text shadows */
  #underTheHood form h3 {
    position: relative;
  }
  #underTheHood form label {
    cursor: pointer;
    display: flex;
    margin: 0.75em 0;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }
  #underTheHood form label:before, #underTheHood form h3:before {
    color: transparent;
    content: attr(data-text);
    top: 0;
    text-shadow: 0 0 0.25em transparent;
    transition-delay: 0.15s;
  }
  #underTheHood form label:before {
    left: 2em;
  }
  #underTheHood input[type=checkbox]:checked ~ form label:before,#underTheHood input[type=checkbox]:checked ~ form h3:before {
    text-shadow: 0 0 0.25em #0005;
    transition-delay: 0;
  }
  #underTheHood form h3:before {
    top: 0;
    left: 0;
  }
  /* Dots */
  #underTheHood .dot, #underTheHood .dot-shadow {
    display: block;
    pointer-events: none;
    top: 0.375em;
    left: 0.375em;
    width: var(--ballDiam);
    height: var(--ballDiam);
  }
  #underTheHood .dot {
    background: var(--primary2);
    box-shadow:
      -0.2em -0.2em 0.4em var(--primary1) inset,
      0 0.2em 0.4em var(--primary3) inset;
    transform: translateZ(var(--depth)) rotateY(0) rotateX(0) scale(0);
  }
  #underTheHood form input[type=radio]:active ~ .dot, 
  #underTheHood form input[type=radio]:focus ~ .dot {
    background: var(--primary3);
    box-shadow:
      -0.2em -0.2em 0.4em var(--primary2) inset,
      0 0.2em 0.4em var(--primary4) inset;
  }
  #underTheHood form input[type=radio]:checked ~ .dot {
    transform: translateZ(calc(var(--ballDiam) / -2)) rotateY(0) rotateX(0) scale(1);
  }
  #underTheHood input[type=checkbox]:checked ~ form input[type=radio] ~ .dot {
    transform: translateZ(var(--depth)) rotateY(calc(var(--yAngle) * -1)) rotateX(calc(var(--xAngle) * -1)) scale(0);
  }
  #underTheHood input[type=checkbox]:checked ~ form input[type=radio]:checked ~ .dot {
    transform: translateZ(calc(var(--ballDiam) / -2)) rotateY(calc(var(--yAngle) * -1)) rotateX(calc(var(--xAngle) * -1)) scale(1);
  }
  /* Dot shadows */
  #underTheHood .dot-shadow {
    background: radial-gradient(100% 100%,#000,#0000 50%);
    opacity: 0.9;
    transform: translateZ(var(--depth)) scale(0);
  }
  #underTheHood input[type=radio]:checked ~ .dot-shadow {
    opacity: 0.4;
    transform: translateZ(var(--depth)) scale(1);
  }
  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    :root #underTheHood{
      --bg: #17181c;
      --fg: #e3e4e8;
      --formBg: #2e3138;
      --radioBg: #454954;
      --radioBgActive: #5c6270;
      --radioBorder: #454954;
      --radioBorderActive: #5c6270;
      --radioSide: #17181c;
      --primary1: #255ff4;
      --primary2: #5583f6;
      --primary3: #86a6f9;
      --primary4: #b6cafb;
    }
  } `;

  const component = new Component({
    tag: tag,
    file: file,
    style: style,
    css: css,
    cssType: cssType,
  });
  await component.save();
  return component;
});
