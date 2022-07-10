import React from "react";


function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;


  return (
    <main>
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
           Hello!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="my-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="my-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
              My Portfolio
            </a>
          </li>
          <li className="my-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              My Resume
            </a>
          </li>
          <li className={`my-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
   
    <footer>

    </footer>
     </main>
  );
}

export default Nav;