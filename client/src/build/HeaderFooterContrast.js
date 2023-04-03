import "../styles/HeaderFooterContrast.css";

  export default function HeaderFooterContrast() {
    return (
      <div id="headerFooterContrast"><header>HEADER</header>
      <article>
        <input type='checkbox' id='c' />
        <label for='c' id='headerFooterContrastLabel'>Toggle Content Height</label>
      </article>
      <footer>FOOTER</footer></div>
    );
  }
  